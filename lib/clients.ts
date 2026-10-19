import { prisma } from "./prisma";
import { initialClients, type ClientItem } from "./data/clients";

export type { ClientItem };

// Runtime memory store with initial seeded clients
let memoryClients: ClientItem[] = [...initialClients];
let isDbAvailable: boolean | null = null;

export async function getAllClients(): Promise<ClientItem[]> {
  if (isDbAvailable !== false) {
    try {
      const dbClients = await (prisma as any).client.findMany({
        orderBy: { createdAt: "desc" },
      });
      if (dbClients && dbClients.length > 0) {
        isDbAvailable = true;
        return dbClients.map((c: any) => ({
          ...c,
          createdAt: c.createdAt instanceof Date ? c.createdAt.toISOString().split("T")[0] : String(c.createdAt),
        })) as ClientItem[];
      }
    } catch {
      isDbAvailable = false;
    }
  }

  return memoryClients;
}

export async function getClientById(id: string): Promise<ClientItem | null> {
  if (isDbAvailable !== false) {
    try {
      const dbClient = await (prisma as any).client.findUnique({
        where: { id },
      });
      if (dbClient) {
        return {
          ...dbClient,
          createdAt: dbClient.createdAt instanceof Date ? dbClient.createdAt.toISOString().split("T")[0] : String(dbClient.createdAt),
        } as ClientItem;
      }
    } catch {
      isDbAvailable = false;
    }
  }

  return memoryClients.find((c) => c.id === id) || null;
}

export async function createClient(data: Partial<ClientItem>): Promise<ClientItem> {
  const newClient: ClientItem = {
    id: data.id || `client-${Date.now()}`,
    company: data.company || "New Enterprise Partner",
    contactName: data.contactName || "Technical Director",
    email: data.email || "contact@client.org",
    role: data.role || "Lead Architect",
    status: data.status || "Active",
    assignedProjects: data.assignedProjects || [],
    totalBilled: data.totalBilled || "$0",
    notes: data.notes || "",
    createdAt: new Date().toISOString().split("T")[0],
  };

  if (isDbAvailable !== false) {
    try {
      const saved = await (prisma as any).client.create({
        data: {
          ...newClient,
          notes: newClient.notes || "",
        },
      });
      if (saved) {
        return {
          ...saved,
          createdAt: saved.createdAt instanceof Date ? saved.createdAt.toISOString().split("T")[0] : String(saved.createdAt),
        } as ClientItem;
      }
    } catch {
      isDbAvailable = false;
    }
  }

  memoryClients.unshift(newClient);
  return newClient;
}

export async function updateClient(id: string, updates: Partial<ClientItem>): Promise<ClientItem | null> {
  if (isDbAvailable !== false) {
    try {
      const updated = await (prisma as any).client.update({
        where: { id },
        data: updates,
      });
      if (updated) {
        return {
          ...updated,
          createdAt: updated.createdAt instanceof Date ? updated.createdAt.toISOString().split("T")[0] : String(updated.createdAt),
        } as ClientItem;
      }
    } catch {
      isDbAvailable = false;
    }
  }

  const idx = memoryClients.findIndex((c) => c.id === id);
  if (idx === -1) return null;

  memoryClients[idx] = {
    ...memoryClients[idx],
    ...updates,
  };
  return memoryClients[idx];
}

export async function deleteClient(id: string): Promise<boolean> {
  if (isDbAvailable !== false) {
    try {
      await (prisma as any).client.delete({
        where: { id },
      });
      return true;
    } catch {
      isDbAvailable = false;
    }
  }

  const initialLen = memoryClients.length;
  memoryClients = memoryClients.filter((c) => c.id !== id);
  return memoryClients.length < initialLen;
}
