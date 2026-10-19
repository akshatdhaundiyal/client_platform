import React from "react";
import { CheckCircle2, Clock, GitBranch, ExternalLink, FileCode2, ShieldAlert } from "lucide-react";

export interface ProjectMilestone {
  id: string;
  title: string;
  status: "completed" | "in-progress" | "pending";
  date: string;
  deliverables: { label: string; url?: string; type: "code" | "doc" | "demo" }[];
}

interface Props {
  projectTitle: string;
  category: string;
  progressPercent: number;
  milestones: ProjectMilestone[];
}

export default function ClientMilestoneCard({
  projectTitle,
  category,
  progressPercent,
  milestones,
}: Props) {
  return (
    <div className="rounded-3xl bg-white dark:bg-[#16171b] border border-neutral-200/80 dark:border-white/10 p-6 sm:p-8 shadow-xs space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/70 dark:border-white/10 pb-5">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
            ACTIVE CONTRACT ENGAGEMENT
          </span>
          <h3 className="font-editorial text-2xl font-normal text-neutral-950 dark:text-white mt-1">
            {projectTitle}
          </h3>
          <p className="font-mono text-xs text-neutral-500 mt-0.5">{category}</p>
        </div>

        {/* Overall Progress Gauge */}
        <div className="sm:text-right">
          <div className="flex items-center sm:justify-end gap-2">
            <span className="font-mono text-xs text-neutral-500">Milestone Velocity:</span>
            <span className="font-mono text-lg font-bold text-[#d94e34] dark:text-[#f87171]">
              {progressPercent}%
            </span>
          </div>
          <div className="w-48 h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden mt-1.5">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-[#d94e34] to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Milestones Timeline */}
      <div className="space-y-4">
        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          Delivery Roadmap & Audit Checkpoints
        </h4>

        <div className="space-y-3">
          {milestones.map((m, idx) => {
            const isDone = m.status === "completed";
            const isCurrent = m.status === "in-progress";

            return (
              <div
                key={m.id}
                className={`p-4 rounded-2xl border transition-all ${
                  isCurrent
                    ? "bg-indigo-500/[0.04] border-indigo-500/30 ring-1 ring-indigo-500/20"
                    : isDone
                    ? "bg-emerald-500/[0.02] border-emerald-500/20"
                    : "bg-black/[0.01] dark:bg-white/[0.01] border-black/5 dark:border-white/5 opacity-70"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : isCurrent ? (
                      <div className="w-5 h-5 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin shrink-0" />
                    ) : (
                      <Clock className="w-5 h-5 text-neutral-400 shrink-0" />
                    )}

                    <div>
                      <div className="font-sans font-semibold text-sm text-neutral-900 dark:text-white">
                        {m.title}
                      </div>
                      <div className="font-mono text-xs text-neutral-500">
                        Target Verification: {m.date}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                      isDone
                        ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                        : isCurrent
                        ? "bg-indigo-500/10 text-indigo-600 border-indigo-500/20 animate-pulse"
                        : "bg-neutral-500/10 text-neutral-500 border-neutral-500/20"
                    }`}
                  >
                    {m.status}
                  </span>
                </div>

                {/* Deliverable Links */}
                {m.deliverables && m.deliverables.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-black/5 dark:border-white/5">
                    {m.deliverables.map((deliv, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 font-mono text-[11px] text-neutral-700 dark:text-neutral-300"
                      >
                        <FileCode2 className="w-3 h-3 text-[#d94e34]" />
                        <span>{deliv.label}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
