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
    <header className="sticky top-0 z-50 w-full bg-[#090a0d]/90 backdrop-blur-md border-b border-white/[0.08] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Enterprise Brand & Breadcrumb */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            title="Platform Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#d94e34] flex items-center justify-center font-mono font-bold text-sm text-white shadow-sm group-hover:scale-105 transition-transform">
              AD
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold tracking-wider text-white">
                PLATFORM <span className="text-[#d94e34]">//</span> ENTERPRISE
              </span>
              <span className="font-mono text-[10px] text-neutral-400">
                Applied AI & Machine Learning Systems
              </span>
            </div>
          </Link>

          <span className="hidden sm:inline-block text-neutral-600">/</span>

          {/* Breadcrumb Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-neutral-400">
            {isPortal && (
              <span className="text-white font-medium flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                <span>Client Delivery Dashboard</span>
              </span>
            )}
            {isInquiry && (
              <span className="text-white font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d94e34]" />
                <span>Commercial Project Scoping</span>
              </span>
            )}
            {isAdmin && (
              <span className="text-white font-medium flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Studio Operations Workbench</span>
              </span>
            )}
          </div>
        </div>

        {/* Center / Right: Clean B2B Tabs */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <Link
            href="/inquiry"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              isInquiry
                ? "bg-white/10 text-white font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Scope Project
          </Link>

          <Link
            href="/portal"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              isPortal
                ? "bg-white/10 text-white font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Client Portal
          </Link>

          {user && (user.role === "admin" || user.role === "superadmin") && (
            <Link
              href="/admin/clients"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isAdmin
                  ? "bg-white/10 text-white font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              CRM Admin
            </Link>
          )}

          <div className="h-4 w-px bg-white/10 mx-1" />

          {/* Return to Showcase Link */}
          <a
            href={showcaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
          >
            <span>Showcase & Resume</span>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </a>

          {user && (
            <button
              type="button"
              onClick={handleLogout}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Sign out of Platform"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
