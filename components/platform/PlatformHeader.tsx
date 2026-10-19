"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layers,
  LogOut,
  Sparkles,
  Briefcase,
  ExternalLink,
} from "lucide-react";

export default function PlatformHeader() {
  const pathname = usePathname();
  const [user, setUser] = useState<{ displayName: string; role: string; badge: string } | null>(null);
  const showcaseUrl = process.env.NEXT_PUBLIC_SHOWCASE_URL || "https://akshatdhaundiyal.com";

  useEffect(() => {
    fetch("/api/auth")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setUser(data.user);
        }
      })
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    window.location.href = "/";
  };

  const isPortal = pathname.startsWith("/portal");
  const isInquiry = pathname.startsWith("/inquiry");
  const isAdmin = pathname.startsWith("/admin");

  return (
    <header className="sticky top-0 z-50 w-full glass-header transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Left: Enterprise Brand & Breadcrumb */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex items-center group cursor-pointer shrink-0"
            title="Platform Home"
          >
            <div className="bg-black dark:bg-neutral-900 px-3 py-1.5 rounded-xl flex items-center gap-2 border border-neutral-800/80 group-hover:opacity-90 transition-all shadow-xs">
              <span className="w-5 h-5 rounded-md bg-[#d94e34] flex items-center justify-center font-mono font-bold text-[10px] text-white">
                AD
              </span>
              <span className="font-mono text-xs font-semibold text-white/90 tracking-wider uppercase whitespace-nowrap">
                PLATFORM <span className="text-[#d94e34]">//</span> 2026
              </span>
            </div>
          </Link>

          <span className="hidden sm:inline-block text-neutral-300 dark:text-neutral-700">/</span>

          {/* Breadcrumb Indicator */}
          <div className="hidden md:flex items-center gap-1.5 font-mono text-xs text-neutral-500 dark:text-neutral-400">
            {isPortal && (
              <span className="status-pill gap-1.5">
                <Briefcase className="w-3 h-3 text-indigo-500" />
                <span>Client Delivery</span>
              </span>
            )}
            {isInquiry && (
              <span className="status-pill gap-1.5">
                <Sparkles className="w-3 h-3 text-[#d94e34]" />
                <span>Project Scoping</span>
              </span>
            )}
            {isAdmin && (
              <span className="status-pill gap-1.5">
                <Layers className="w-3 h-3 text-cyan-500" />
                <span>Studio Admin</span>
              </span>
            )}
          </div>
        </div>

        {/* Center / Right: Clean Pill Tabs */}
        <div className="flex items-center gap-2 sm:gap-2.5 font-sans text-xs">
          <Link
            href="/inquiry"
            className={
              isInquiry
                ? "bg-black text-white dark:bg-white dark:text-black px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs transition-all"
                : "pill-btn-secondary px-3.5 py-1.5 text-xs font-medium cursor-pointer"
            }
          >
            Scope Inquiry
          </Link>

          <Link
            href="/portal"
            className={
              isPortal
                ? "bg-black text-white dark:bg-white dark:text-black px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs transition-all"
                : "pill-btn-secondary px-3.5 py-1.5 text-xs font-medium cursor-pointer"
            }
          >
            Client Portal
          </Link>

          {user && (user.role === "admin" || user.role === "superadmin") && (
            <Link
              href="/admin/clients"
              className={
                isAdmin
                  ? "bg-black text-white dark:bg-white dark:text-black px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs transition-all"
                  : "pill-btn-secondary px-3.5 py-1.5 text-xs font-medium cursor-pointer"
              }
            >
              CRM Admin
            </Link>
          )}

          <div className="h-4 w-px bg-neutral-200 dark:bg-white/10 mx-1 hidden sm:block" />

          {/* Return to Showcase Link */}
          <a
            href={showcaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex pill-btn-secondary px-3.5 py-1.5 text-xs font-medium items-center gap-1.5 cursor-pointer"
          >
            <span>Showcase</span>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </a>

          {user && (
            <button
              type="button"
              onClick={handleLogout}
              className="p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
              title="Sign out of Platform"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
