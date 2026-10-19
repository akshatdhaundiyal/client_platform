import { prisma } from "./prisma";
import { initialInvoices, type InvoiceItem } from "./data/invoices";

export type { InvoiceItem };

// Runtime memory store
let memoryInvoices: InvoiceItem[] = [...initialInvoices];
let isDbAvailable: boolean | null = null;

export async function getAllInvoices(statusFilter?: string): Promise<InvoiceItem[]> {
  if (isDbAvailable !== false) {
    try {
      const where: any = {};
      if (statusFilter && statusFilter !== "all") {
        where.status = statusFilter;
      }
      const dbInvoices = await (prisma as any).invoice.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });
      if (dbInvoices && dbInvoices.length > 0) {
        isDbAvailable = true;
        return dbInvoices.map((inv: any) => ({
          ...inv,
          lineItems: Array.isArray(inv.lineItems) ? inv.lineItems : [],
        })) as InvoiceItem[];
      }
    } catch {
      isDbAvailable = false;
    }
  }

  if (statusFilter && statusFilter !== "all") {
    return memoryInvoices.filter((inv) => inv.status === statusFilter);
  }
  return memoryInvoices;
}

export async function getInvoiceById(id: string): Promise<InvoiceItem | null> {
  if (isDbAvailable !== false) {
    try {
      const dbInv = await (prisma as any).invoice.findUnique({
        where: { id },
      });
      if (dbInv) {
        return {
          ...dbInv,
          lineItems: Array.isArray(dbInv.lineItems) ? dbInv.lineItems : [],
        } as InvoiceItem;
      }
    } catch {
      isDbAvailable = false;
    }
  }

  return memoryInvoices.find((inv) => inv.id === id) || null;
}

export async function createInvoice(data: Partial<InvoiceItem>): Promise<InvoiceItem> {
  const nextNum = memoryInvoices.length + 1;
  const invNumber = data.invoiceNumber || `INV-2024-00${nextNum}`;

  let total = data.totalAmount || 0;
  if (data.lineItems && data.lineItems.length > 0) {
    total = data.lineItems.reduce((acc, item) => acc + (item.amount || item.quantity * item.rate), 0);
  }

  const newInvoice: InvoiceItem = {
    id: data.id || `inv-${Date.now()}`,
    invoiceNumber: invNumber,
    clientCompany: data.clientCompany || "Enterprise Client",
    clientEmail: data.clientEmail || "billing@client.com",
    projectSlug: data.projectSlug || "general-architecture",
    projectTitle: data.projectTitle || "Architecture & System Consulting",
    issueDate: data.issueDate || new Date().toISOString().split("T")[0],
    dueDate: data.dueDate || new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
    totalAmount: total,
    status: data.status || "pending",
    description: data.description || "Production Milestone Deliverable",
    lineItems: data.lineItems || [],
  };

  if (isDbAvailable !== false) {
    try {
      const created = await (prisma as any).invoice.create({
        data: {
          ...newInvoice,
          lineItems: newInvoice.lineItems as any,
        },
      });
      if (created) {
        return {
          ...created,
          lineItems: Array.isArray(created.lineItems) ? created.lineItems : [],
        } as InvoiceItem;
      }
    } catch {
      isDbAvailable = false;
    }
  }

  memoryInvoices.unshift(newInvoice);
  return newInvoice;
}

export async function updateInvoice(id: string, updates: Partial<InvoiceItem>): Promise<InvoiceItem | null> {
  if (isDbAvailable !== false) {
    try {
      const updated = await (prisma as any).invoice.update({
        where: { id },
        data: {
          ...updates,
          lineItems: updates.lineItems as any,
        },
      });
      if (updated) {
        return {
          ...updated,
          lineItems: Array.isArray(updated.lineItems) ? updated.lineItems : [],
        } as InvoiceItem;
      }
    } catch {
      isDbAvailable = false;
    }
  }

  const idx = memoryInvoices.findIndex((inv) => inv.id === id);
  if (idx === -1) return null;

  memoryInvoices[idx] = {
    ...memoryInvoices[idx],
    ...updates,
  };
  return memoryInvoices[idx];
}

export async function deleteInvoice(id: string): Promise<boolean> {
  if (isDbAvailable !== false) {
    try {
      await (prisma as any).invoice.delete({
        where: { id },
      });
      return true;
    } catch {
      isDbAvailable = false;
    }
  }

  const initialLen = memoryInvoices.length;
  memoryInvoices = memoryInvoices.filter((inv) => inv.id !== id);
  return memoryInvoices.length < initialLen;
}
