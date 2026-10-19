import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Sparkles, Briefcase, FileCheck, ExternalLink } from "lucide-react";

export default function PlatformHomePage() {
  const showcaseUrl = process.env.NEXT_PUBLIC_SHOWCASE_URL || "https://akshatdhaundiyal.com";

  return (
    <div className="space-y-12 sm:space-y-16 py-4 sm:py-8">
      {/* 1. Curated Hero Stage Container */}
      <section className="relative bg-[#F8F9FA] dark:bg-zinc-900/40 rounded-2xl sm:rounded-3xl border border-neutral-200/70 dark:border-white/10 p-6 sm:p-10 md:p-14 flex flex-col items-center justify-center text-center overflow-hidden shadow-xs">
        
        {/* Editorial Subheader Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-800/80 border border-neutral-200/70 dark:border-white/10 font-mono text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-widest mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>ENTERPRISE ENGAGEMENTS // ACTIVE SPRINT 2026</span>
        </div>

        {/* Editorial Title */}
        <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-neutral-950 dark:text-white font-normal leading-tight tracking-tight max-w-4xl">
          High-Velocity Applied AI & Systems Engineering Platform
        </h1>

        <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal max-w-2xl leading-relaxed">
          Gallery-grade deliverable tracking, commercial milestone verification, and encrypted billing statements curated for high-velocity engineering teams.
        </p>

        {/* Tactile Pill Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/portal"
            className="w-full sm:w-auto pill-btn-primary px-6 py-3 text-xs uppercase tracking-wider font-semibold gap-2 shadow-xs"
          >
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Access Client Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/inquiry"
            className="w-full sm:w-auto pill-btn-secondary px-6 py-3 text-xs uppercase tracking-wider font-semibold gap-2 bg-white dark:bg-zinc-800/80 hover:bg-neutral-50 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Scope Intake Estimator</span>
          </Link>
        </div>

        {/* Subtle Mono Meta Indicator */}
        <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-white/10 w-full max-w-md flex items-center justify-between text-neutral-400 dark:text-neutral-500 font-mono text-[11px]">
          <span>VERIFIED PRODUCTION SLA</span>
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">ISO/SOC2 ALIGNED</span>
          <span>PAN-GLOBAL</span>
        </div>
      </section>

      {/* 2. Curated Feature Gallery Grid */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200/70 dark:border-white/10 pb-4">
          <div className="space-y-1">
            <span className="font-mono text-[11px] font-semibold text-neutral-500 uppercase tracking-widest block">
              ARCHITECTURE & VERIFICATION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-neutral-950 dark:text-white font-normal">
              Commercial Operations Suite
            </h2>
          </div>
          <span className="status-pill self-start sm:self-auto">
            3 Core Capabilities
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="bg-[#F8F9FA] dark:bg-zinc-900/30 rounded-2xl sm:rounded-3xl border border-neutral-200/70 dark:border-white/10 p-6 sm:p-8 hover:border-black dark:hover:border-white/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-800 dark:text-neutral-200 mb-4 shadow-xs">
                <FileCheck className="w-5 h-5 text-indigo-500" />
              </div>
              <h3 className="font-mono text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                Milestone Tracking
              </h3>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                Real-time delivery progress bars, commit verification, and artifact handoffs with verified git checkouts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-white/10 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
              Sprint Velocity & Deliverables
            </div>
          </div>

          <div className="bg-[#F8F9FA] dark:bg-zinc-900/30 rounded-2xl sm:rounded-3xl border border-neutral-200/70 dark:border-white/10 p-6 sm:p-8 hover:border-black dark:hover:border-white/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-800 dark:text-neutral-200 mb-4 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="font-mono text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                Commercial Statements
              </h3>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                Itemized PDF statements, payment status, and contract deliverables under strict client NDA.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-white/10 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
              Financial Transparency
            </div>
          </div>

          <div className="bg-[#F8F9FA] dark:bg-zinc-900/30 rounded-2xl sm:rounded-3xl border border-neutral-200/70 dark:border-white/10 p-6 sm:p-8 hover:border-black dark:hover:border-white/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-800 dark:text-neutral-200 mb-4 shadow-xs">
                <Sparkles className="w-5 h-5 text-[#d94e34]" />
              </div>
              <h3 className="font-mono text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                Interactive Scoping
              </h3>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                Dynamic service tier budgeting with custom machine learning systems architecture definitions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-white/10 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
              Instant Budget Calculator
            </div>
          </div>
        </div>
      </section>

      {/* 3. External Portfolio Bridge */}
      <div className="text-center pt-4">
        <div className="inline-flex items-center gap-2 p-1.5 px-4 rounded-full bg-[#F8F9FA] dark:bg-zinc-900/50 border border-neutral-200/80 dark:border-white/10 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <span>Looking for technical case studies or CV?</span>
          <a
            href={showcaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white font-semibold hover:underline inline-flex items-center gap-1 ml-1"
          >
            <span>Visit Showcase</span>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
