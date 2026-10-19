import React from "react";
import Link from "next/link";
import { ShieldCheck, Activity, Terminal } from "lucide-react";

export default function PlatformFooter() {
  return (
    <footer className="bg-[#FAFAFA] dark:bg-[#0c0c0e] border-t border-neutral-200/70 dark:border-white/10 text-neutral-600 dark:text-neutral-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10">
        
        {/* Col 1: Platform Summary */}
        <div className="space-y-3">
          <span className="font-semibold text-neutral-950 dark:text-white text-xs tracking-tight block uppercase font-mono">
            AKSHAT DHAUNDIYAL // PLATFORM
          </span>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            Gallery-grade engineering deliverable tracking, commercial milestone verification, and encrypted billing statements curated for high-velocity teams.
          </p>
        </div>

        {/* Col 2: Portals & Links */}
        <div className="space-y-3 font-sans">
          <span className="font-mono text-[11px] font-semibold text-neutral-950 dark:text-white uppercase tracking-wider block">
            Portals & Access
          </span>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/inquiry" className="hover:text-black dark:hover:text-white transition-colors">
                Commercial Scope Intake →
              </Link>
            </li>
            <li>
              <Link href="/portal" className="hover:text-black dark:hover:text-white transition-colors">
                Client Delivery Dashboard →
              </Link>
            </li>
            <li>
              <Link href="/admin/clients" className="hover:text-black dark:hover:text-white transition-colors">
                Studio CRM Admin →
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: SLA & Governance */}
        <div className="space-y-3 font-sans">
          <span className="font-mono text-[11px] font-semibold text-neutral-950 dark:text-white uppercase tracking-wider block">
            Delivery SLA & Trust
          </span>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            All enterprise client deliverables are bound under strict Mutual NDA with 24-hour response SLAs.
          </p>
          <div className="flex items-center gap-2 pt-1 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-neutral-800 dark:text-neutral-200 font-semibold">Systems 99.9% Uptime</span>
          </div>
        </div>

        {/* Col 4: Studio Engineering */}
        <div className="space-y-3">
          <span className="font-mono text-[11px] font-semibold text-neutral-950 dark:text-white uppercase tracking-wider block">
            Studio Engineering
          </span>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-mono">
            Architected by Akshat Dhaundiyal // Applied AI & Distributed Systems // 2026
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-200/60 dark:border-white/10 py-5 text-center font-mono text-[11px] text-neutral-400">
        © 2026 AKSHAT DHAUNDIYAL // ALL RIGHTS RESERVED. CONFIDENTIAL & PROPRIETARY.
      </div>
    </footer>
  );
}
