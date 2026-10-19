"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, FileText, Briefcase, ArrowLeft, LogOut, Menu, X, ShieldCheck } from "lucide-react";

export interface StudioNavbarProps {
  user?: { displayName: string; role: string; badge: string } | null;
  activeRoute?: string;
  badgeCounts?: {
    clients?: number;
    invoices?: number;
    blogs?: number;
    projects?: number;
  };
}

export default function StudioNavbar({ user, activeRoute = "", badgeCounts = {} }: StudioNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    window.location.href = "/";
  };

  const navLinks = [
    { href: "/admin/clients", label: "Clients", icon: Users, count: badgeCounts.clients },
    { href: "/admin/invoices", label: "Invoices", icon: FileText, count: badgeCounts.invoices },
    { href: "/portal", label: "Client Portal", icon: Briefcase },
  ];

  return (
    <>
      {/* Mobile Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#121215] border-b border-white/10 mb-6 rounded-xl">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-white">CRM & FinOps Console</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 rounded-lg bg-white/5 text-neutral-400 hover:text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Desktop & Collapsible Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen md:h-[calc(100vh-8rem)] w-64 bg-[#121215] border-r md:border border-white/10 p-5 flex flex-col justify-between rounded-none md:rounded-2xl transition-transform duration-200 shrink-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Platform Home</span>
            </Link>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="pt-4 pb-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#d94e34] font-semibold">
              Management Suite
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight mt-0.5">
              Client & Billing Ops
            </h2>
          </div>

          {/* Links */}
          <nav className="mt-6 space-y-1 font-mono text-xs">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeRoute.startsWith(item.href) || item.href === activeRoute;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-neutral-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>

                  {typeof item.count === "number" && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isActive ? "bg-black/10 text-black font-bold" : "bg-white/10 text-neutral-300"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info / Logout */}
        <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs">
          {user && (
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-semibold text-white truncate">{user.displayName}</span>
                <span className="text-[10px] text-emerald-400 uppercase tracking-wider">{user.role}</span>
              </div>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
          )}

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
