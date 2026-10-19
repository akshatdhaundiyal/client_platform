"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Send,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  Compass,
  ArrowRight,
  ShieldCheck,
  Calendar,
  DollarSign,
  Briefcase,
} from "lucide-react";

interface ServiceOption {
  id: string;
  title: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  typicalRoi: string;
}

const SERVICES: ServiceOption[] = [
  {
    id: "actuarial-glm",
    title: "Applied ML & Actuarial GLM Architecture",
    badge: "+$12M Proven Impact",
    icon: Cpu,
    description: "Statistically sound compound Generalized Linear Models (Poisson × Gamma) for commercial pricing, loss-cost estimation, and auditable regulatory compliance.",
    typicalRoi: "+10-15% margin optimization; 100% auditable regulatory filings.",
  },
  {
    id: "vertex-nlp",
    title: "Google Vertex AI & NLP Underwriting Pipelines",
    badge: "70% Triage Acceleration",
    icon: Layers,
    description: "Enterprise transformer pipelines on Google Cloud to extract, parse, and score unstructured text, claims data, and commercial records with low hallucination risk.",
    typicalRoi: "70% reduction in manual review cycle times.",
  },
  {
    id: "edge-vision",
    title: "On-Device Edge AI & Computer Vision",
    badge: "<100ms Inference",
    icon: Activity,
    description: "Quantized YOLOv8 and localized embedding architectures running directly on client edge hardware with zero recurring cloud API egress cost.",
    typicalRoi: "$0 cloud API bills; sub-100ms real-time throughput.",
  },
  {
    id: "fractional-pm",
    title: "Fractional AI Product Management & Unit Economics",
    badge: "MBA Strategy Rigor",
    icon: Compass,
    description: "Strategic discovery, PRD authoring, unit-cost calibration, and GTM execution bridging raw engineering models with commercial bottom-line outcomes.",
    typicalRoi: "Elimination of black-box vanity spend; cloud compute ROI validation.",
  },
];

export default function InquiryEstimator() {
  const [selectedService, setSelectedService] = useState<string>("actuarial-glm");
  const [timeline, setTimeline] = useState<string>("2-4 weeks");
  const [budgetTier, setBudgetTier] = useState<string>("$10k - $25k");

  // Form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !details.trim()) {
      setError("Please fill in your name, contact email, and project scope summary.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || "Independent / Startup",
          serviceType: selectedService,
          timeline,
          budgetTier,
          details: details.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white dark:bg-[#16171b] border border-black/10 dark:border-white/10 p-8 sm:p-12 text-center space-y-6 shadow-2xl transition-all">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
            Project Proposal Scoping Received
          </h3>
          <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-neutral-900 dark:text-white">{name}</span>. Your scoping submission has been routed directly to Akshat Dhaundiyal. Expect an executive feasibility analysis and meeting invitation within 24 business hours.
          </p>
        </div>

        <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 dark:bg-[#1f2026] border border-black/5 dark:border-white/5 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <span>Priority Scope Reference:</span>
          <span className="font-bold text-[#d94e34]">#INQ-{Date.now().toString().slice(-6)}</span>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white underline cursor-pointer"
          >
            Submit another project inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      
      {/* 1. Service Selection Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <span>01 // SELECT CORE SERVICE ENGAGEMENT</span>
          </div>
          <span className="font-mono text-xs text-neutral-500">Pick Primary Focus</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            const isSelected = selectedService === srv.id;
            return (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? "bg-white dark:bg-[#1d1f26] border-[#d94e34] shadow-md ring-2 ring-[#d94e34]/20"
                    : "bg-white/60 dark:bg-[#16171b]/80 border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl ${isSelected ? "bg-[#d94e34] text-white" : "bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-neutral-300"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-sans font-bold text-sm text-neutral-900 dark:text-white">
                      {srv.title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                    {srv.badge}
                  </span>
                </div>

                <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                  {srv.description}
                </p>

                <div className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400 border-t border-black/5 dark:border-white/5 pt-2">
                  <span className="text-neutral-400">Target Outcome:</span> {srv.typicalRoi}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Timeline & Budget Estimation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            02 // Expected Delivery Horizon
          </label>
          <div className="grid grid-cols-3 gap-2">
            {["1-2 weeks (Sprint)", "2-4 weeks", "1-3 months"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTimeline(t)}
                className={`py-2.5 px-3 rounded-xl font-mono text-xs border text-center transition-all cursor-pointer ${
                  timeline === t
                    ? "bg-[#d94e34] text-white border-[#d94e34] font-bold shadow-sm"
                    : "bg-white dark:bg-[#16171b] border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-black/5"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            03 // Budget Allocation Tier
          </label>
          <div className="grid grid-cols-3 gap-2">
            {["$5k - $10k", "$10k - $25k", "$25k+"].map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBudgetTier(b)}
                className={`py-2.5 px-3 rounded-xl font-mono text-xs border text-center transition-all cursor-pointer ${
                  budgetTier === b
                    ? "bg-[#d94e34] text-white border-[#d94e34] font-bold shadow-sm"
                    : "bg-white dark:bg-[#16171b] border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-black/5"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Client & Project Details */}
      <div className="space-y-4">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-black/10 dark:border-white/10 pb-2">
          04 // COMMERCIAL CONTACT & PROBLEM SPECIFICATION
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Elena Rostova"
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#16171b] border border-black/10 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#d94e34]/30"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-1">
              Work Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="elena@enterprise.com"
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#16171b] border border-black/10 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#d94e34]/30"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-1">
              Organization / Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Apex Underwriting Labs"
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#16171b] border border-black/10 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#d94e34]/30"
            />
          </div>
        </div>

        <div>
          <label className="block font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-1">
            Problem Description & System Objectives *
          </label>
          <textarea
            required
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Briefly describe the business problem, current bottlenecks, data constraints, or key metrics your team is targeting..."
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#16171b] border border-black/10 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#d94e34]/30 font-sans leading-relaxed"
          />
        </div>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 font-mono text-xs">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/10 dark:border-white/10">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Direct response from Akshat Dhaundiyal within 24h</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl bg-[#d94e34] hover:bg-[#c43f27] text-white font-mono text-xs font-bold tracking-wider uppercase shadow-lg transition-all cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <span>Transmitting Scope...</span>
          ) : (
            <>
              <span>Submit Project Scope</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

    </form>
  );
}
