import React from "react";
import { Receipt, CheckCircle, Clock, AlertCircle, Download, CreditCard } from "lucide-react";
import type { InvoiceItem } from "@/lib/data/invoices";

interface Props {
  invoices: InvoiceItem[];
}

export default function ClientInvoiceCard({ invoices }: Props) {
  const totalBilled = invoices.reduce((acc, inv) => acc + inv.totalAmount, 0);
  const pendingAmount = invoices
    .filter((inv) => inv.status === "pending" || inv.status === "overdue")
    .reduce((acc, inv) => acc + inv.totalAmount, 0);

  return (
    <div className="rounded-3xl bg-white dark:bg-[#16171b] border border-black/10 dark:border-white/10 p-6 sm:p-8 shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-5">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#d94e34] dark:text-[#f87171] font-bold">
            COMMERCIAL FINOPS & BILLING
          </span>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white mt-1">
            Statements & Milestone Invoices
          </h3>
          <p className="font-mono text-xs text-neutral-500 mt-0.5">
            USDT / ACH / International Wire Settlement Supported
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-neutral-50 dark:bg-[#1f2026] border border-black/5 dark:border-white/5 text-right">
            <div className="font-mono text-xs text-neutral-500">Pending Settlement</div>
            <div className="font-mono text-lg font-bold text-amber-600 dark:text-amber-400">
              ${pendingAmount.toLocaleString()}
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-neutral-50 dark:bg-[#1f2026] border border-black/5 dark:border-white/5 text-right">
            <div className="font-mono text-xs text-neutral-500">Total Contract Value</div>
            <div className="font-mono text-lg font-bold text-neutral-900 dark:text-white">
              ${totalBilled.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Invoices List */}
      <div className="space-y-3">
        {invoices.length === 0 ? (
          <div className="text-center py-8 font-mono text-xs text-neutral-500">
            No active billing statements found for this account.
          </div>
        ) : (
          invoices.map((inv) => {
            const isPaid = inv.status === "paid";
            const isOverdue = inv.status === "overdue";

            return (
              <div
                key={inv.id}
                className="p-4 sm:p-5 rounded-2xl bg-neutral-50/50 dark:bg-[#1a1b20]/50 border border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-black/15 dark:hover:border-white/15"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-xl ${isPaid ? "bg-emerald-500/10 text-emerald-600" : isOverdue ? "bg-red-500/10 text-red-600" : "bg-amber-500/10 text-amber-600"}`}>
                    <Receipt className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-neutral-900 dark:text-white">
                        {inv.invoiceNumber}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                          isPaid
                            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                            : isOverdue
                            ? "bg-red-500/10 text-red-600 border-red-500/20"
                            : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                        }`}
                      >
                        {inv.status}
                      </span>
                    </div>

                    <div className="font-sans text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                      {inv.description} · <span className="font-mono text-neutral-500">Due {inv.dueDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="font-mono text-base font-bold text-neutral-900 dark:text-white">
                    ${inv.totalAmount.toLocaleString()}
                  </div>

                  <a
                    href={`mailto:akshatdhaundiyal@gmail.com?subject=Payment%20Verification%20${inv.invoiceNumber}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 font-mono text-xs text-neutral-800 dark:text-neutral-200 transition-colors"
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Pay / Wire</span>
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
