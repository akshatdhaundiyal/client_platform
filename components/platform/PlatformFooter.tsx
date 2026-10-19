import React from "react";
import Link from "next/link";
import { ShieldCheck, Activity, Terminal } from "lucide-react";

export default function PlatformFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#090a0d] text-neutral-400 py-8 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Security and Uptime Indicator */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-neutral-300 font-semibold">Systems Operational</span>
          </div>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-500">256-Bit SSL Encrypted Session</span>
        </div>

        {/* Center: Legal & NDA */}
        <div className="text-neutral-500 text-center sm:text-left">
          Commercial Confidentiality & Mutual NDA Bound
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-4 text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">
            Portfolio & Resume
          </Link>
          <Link href="/inquiry" className="hover:text-white transition-colors">
            Project Scope
          </Link>
          <Link href="/portal" className="hover:text-white transition-colors">
            Client Portal
          </Link>
        </div>

      </div>
    </footer>
  );
}
