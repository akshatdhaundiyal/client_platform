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
      <div className="space-y-4 border-b border-black/10 dark:border-white/10 pb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Overview</span>
          </Link>

          <Link
            href="/portal"
            className="inline-flex items-center gap-1 font-mono text-xs text-[#d94e34] dark:text-[#f87171] hover:underline"
          >
            <span>Existing Client Portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#d94e34] dark:text-red-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMERCIAL INTAKE & SYSTEM ESTIMATOR</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 dark:text-white tracking-tight">
            Commission an Applied AI System.
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl font-sans leading-relaxed">
            Direct collaboration with <strong>Akshat Dhaundiyal</strong>. Specializing in high-throughput enterprise ML architectures, actuarial compound GLMs, on-device edge computer vision, and fractional AI product strategy.
          </p>
        </div>
      </div>

      {/* Interactive Estimator Form */}
      <InquiryEstimator />

      {/* Security & Confidentiality Reassurance */}
      <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>Mutual Non-Disclosure Agreement (NDA) supported upon initial engagement.</span>
        </div>
        <a
          href="mailto:akshatdhaundiyal@gmail.com"
          className="text-neutral-700 dark:text-neutral-300 hover:text-[#d94e34] underline"
        >
          Prefer standard email?
        </a>
      </div>

    </div>
  );
}
