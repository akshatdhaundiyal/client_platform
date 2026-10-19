import { prisma } from "@/lib/prisma";

export interface InquiryItem {
  id: string;
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  timeline: string;
  budgetTier: string;
  details: string;
  status: "new" | "reviewed" | "scheduled" | "archived";
  createdAt: string;
}

// Resilient memory store
let memoryInquiries: InquiryItem[] = [
  {
    id: "inq-101",
    name: "Marcus Vance",
    email: "marcus@vanceunderwriting.com",
    company: "Vance Underwriting Syndicate",
    serviceType: "actuarial-glm",
    timeline: "2-4 weeks",
    budgetTier: "$10k - $25k",
    details: "Need Poisson-Gamma pricing optimization calibration on commercial casualty books to lower loss ratio.",
    status: "new",
    createdAt: new Date().toISOString().split("T")[0],
  },
];

let isDbAvailable: boolean | null = null;

export async function getAllInquiries(): Promise<InquiryItem[]> {
  if (isDbAvailable !== false) {
    try {
      const records = await (prisma as any).clientInquiry?.findMany({
        orderBy: { createdAt: "desc" },
      });
      if (records && records.length > 0) {
        isDbAvailable = true;
        return records as InquiryItem[];
      }
    } catch {
      isDbAvailable = false;
    }
  }

  return memoryInquiries;
}

export async function createInquiry(data: Partial<InquiryItem>): Promise<InquiryItem> {
  const item: InquiryItem = {
    id: data.id || `inq-${Date.now()}`,
    name: data.name || "Anonymous Partner",
    email: data.email || "partner@enterprise.org",
    company: data.company || "Independent Enterprise",
    serviceType: data.serviceType || "actuarial-glm",
    timeline: data.timeline || "2-4 weeks",
    budgetTier: data.budgetTier || "$10k - $25k",
    details: data.details || "",
    status: "new",
    createdAt: new Date().toISOString().split("T")[0],
  };

  if (isDbAvailable !== false) {
    try {
      const saved = await (prisma as any).clientInquiry?.create({
        data: item,
      });
      if (saved) return saved as InquiryItem;
    } catch {
      isDbAvailable = false;
    }
  }

  memoryInquiries.unshift(item);
  return item;
}
