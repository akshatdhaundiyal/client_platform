export const dynamic = "force-dynamic";
import React from "react";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { getAllInvoices } from "@/lib/invoices";
import ClientMilestoneCard, { ProjectMilestone } from "@/components/platform/ClientMilestoneCard";
import ClientInvoiceCard from "@/components/platform/ClientInvoiceCard";
import {
  Building2,
  ShieldCheck,
  LogOut,
  Mail,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Client Advisory & Engineering Portal | Akshat Dhaundiyal",
  description:
    "Client dashboard for active machine learning milestones, deliverables, and commercial statements.",
};

const sampleMilestones: ProjectMilestone[] = [
  {
    id: "m-1",
    title: "Phase 1: Statistical EDA, Data Sanitation & Baseline Benchmark",
    status: "completed",
    date: "2024-08-15",
    deliverables: [
      { label: "Data Quality Audit.pdf", type: "doc" },
      { label: "baseline_benchmark.py", type: "code" },
    ],
  },
  {
    id: "m-2",
    title: "Phase 2: Compound Actuarial GLM Modeling (Poisson Frequency × Gamma Severity)",
    status: "completed",
    date: "2024-09-01",
    deliverables: [
      { label: "glm_actuarial_core.py", type: "code" },
      { label: "lift_curve_analysis.ipynb", type: "code" },
    ],
  },
  {
    id: "m-3",
    title: "Phase 3: Automated Google Vertex AI Inference & Model Serving Container",
    status: "in-progress",
    date: "2024-10-25",
    deliverables: [
      { label: "Dockerfile (Cloud Run)", type: "code" },
      { label: "RESTful Underwriting API", type: "demo" },
    ],
  },
  {
    id: "m-4",
    title: "Phase 4: Regulatory Compliance Audit & Production Handover",
    status: "pending",
    date: "2024-11-15",
    deliverables: [{ label: "Regulatory Filing Whitepaper", type: "doc" }],
  },
];

export default async function ClientPortalPage() {
  const user = await getCurrentUser();
  const invoices = await getAllInvoices();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-neutral-200/70 dark:border-white/10 pb-8">
        <div className="space-y-2">
          <div className="status-pill inline-flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>CONFIDENTIAL CLIENT ENGAGEMENT PORTAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-editorial text-neutral-950 dark:text-white font-normal tracking-tight">
            Client Delivery Dashboard
          </h1>

          <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
            Account:{" "}
            <span className="font-bold text-neutral-900 dark:text-white">
              {user?.displayName || "Enterprise Partner"}
            </span>{" "}
            ({user?.badge || "AUTHENTICATED CLIENT"})
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:akshatdhaundiyal@gmail.com?subject=Client%20Portal%20Sync%20Request"
            className="pill-btn-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider gap-2 shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Request Engineering Sync</span>
          </a>

          {user?.role === "superadmin" || user?.role === "admin" ? (
            <Link
              href="/admin/projects"
              className="pill-btn-secondary px-3.5 py-2.5 text-xs font-medium gap-1.5"
            >
              <span>Admin Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : null}
        </div>
      </div>

      {/* 1. Active Milestones & Deliverables Roadmap */}
      <ClientMilestoneCard
        projectTitle="Commercial Actuarial Pricing & High-Throughput ML Pipeline"
        category="Underwriting AI Practice · EXL / Enterprise"
        progressPercent={72}
        milestones={sampleMilestones}
      />

      {/* 2. Invoices & FinOps Statements */}
      <ClientInvoiceCard invoices={invoices} />

      {/* 3. Direct Advisory Support Notice */}
      <div className="rounded-2xl sm:rounded-3xl p-6 bg-[#F8F9FA] dark:bg-zinc-900/40 border border-neutral-200/70 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200">
            Need an urgent revision or architecture scope adjustment?
          </div>
          <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400">
            All active commercial contracts include direct Slack/Signal communication channels and 24h SLA.
          </p>
        </div>

        <Link
          href="/inquiry"
          className="pill-btn-secondary px-4 py-2 text-xs font-medium hover:border-black dark:hover:border-white flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Commission Additional Sprints</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}

