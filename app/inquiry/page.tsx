import React from "react";
import Link from "next/link";
import { Sparkles, Shield, Clock, ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import InquiryEstimator from "@/components/platform/InquiryEstimator";

export const metadata = {
  title: "Commercial Scoping & Advisory Inquiry | Akshat Dhaundiyal",
  description:
    "Scope a high-ROI machine learning, actuarial GLM, or computer vision engagement with Akshat Dhaundiyal.",
};

export default function InquiryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Top Banner Header */}
      <div className="space-y-4 border-b border-neutral-200/70 dark:border-white/10 pb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="pill-btn-secondary px-3 py-1 text-xs font-medium inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Overview</span>
          </Link>

          <Link
            href="/portal"
            className="pill-btn-secondary px-3 py-1 text-xs font-medium inline-flex items-center gap-1"
          >
            <span>Existing Client Portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-2 pt-2">
          <div className="status-pill inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d94e34]" />
            <span>COMMERCIAL INTAKE & SYSTEM ESTIMATOR</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-editorial font-normal text-neutral-950 dark:text-white tracking-tight">
            Commission an Applied AI System.
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
            Direct collaboration with <strong>Akshat Dhaundiyal</strong>. Specializing in high-throughput enterprise ML architectures, actuarial compound GLMs, on-device edge computer vision, and fractional AI product strategy.
          </p>
        </div>
      </div>

      {/* Interactive Estimator Form */}
      <InquiryEstimator />

      {/* Security & Confidentiality Reassurance */}
      <div className="p-6 rounded-2xl sm:rounded-3xl bg-[#F8F9FA] dark:bg-zinc-900/40 border border-neutral-200/70 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>Mutual Non-Disclosure Agreement (NDA) supported upon initial engagement.</span>
        </div>
        <a
          href="mailto:akshatdhaundiyal@gmail.com"
          className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white underline"
        >
          Prefer standard email?
        </a>
      </div>

    </div>
  );
}
