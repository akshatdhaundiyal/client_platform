import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Sparkles, Briefcase, FileCheck, ExternalLink } from "lucide-react";

export default function PlatformHomePage() {
  const showcaseUrl = process.env.NEXT_PUBLIC_SHOWCASE_URL || "https://akshatdhaundiyal.com";

  return (
    <div className="py-12 sm:py-20 flex flex-col items-center justify-center text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>ENTERPRISE CLIENT ENGAGEMENTS // ACTIVE</span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
        High-Velocity Applied AI & Systems Engineering Platform
      </h1>

      <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-mono text-sm leading-relaxed">
        Commercial scoping, active production milestones, encrypted delivery tracking, and transparent billing statements.
      </p>

      {/* Dual Primary Actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/portal"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
        >
          <Briefcase className="w-4 h-4 text-indigo-600" />
          <span>Access Client Portal</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/inquiry"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Interactive Scoping Estimator</span>
        </Link>
      </div>

      {/* Grid of Key Features */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full text-left font-mono">
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
          <FileCheck className="w-5 h-5 text-indigo-400 mb-3" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Milestone Tracking</h3>
          <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
            Real-time delivery progress bars, commit verification, and artifact handoffs.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-3" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Commercial Transparency</h3>
          <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
            Itemized PDF statements, payment status, and contract deliverables under strict NDA.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
          <Sparkles className="w-5 h-5 text-[#d94e34] mb-3" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Rapid Scoping Intake</h3>
          <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
            Dynamic service tier budgeting with custom engineering architecture definitions.
          </p>
        </div>
      </div>

      <div className="mt-12 text-xs font-mono text-neutral-500">
        Looking for case studies, writing, or resume?{" "}
        <a
          href={showcaseUrl}
          className="text-white hover:underline inline-flex items-center gap-1"
        >
          <span>Visit Main Portfolio</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
