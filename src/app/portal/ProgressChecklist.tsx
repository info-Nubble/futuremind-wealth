"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "fmw-portal-checklist-v1";

type ChecklistState = {
  starter: boolean;
  toolkit: boolean;
  website: boolean;
  templates: boolean;
  launch: boolean;
};

const DEFAULT_STATE: ChecklistState = {
  starter: false,
  toolkit: false,
  website: false,
  templates: false,
  launch: false,
};

export default function ProgressChecklist() {
  const [checked, setChecked] = useState<ChecklistState>(DEFAULT_STATE);

  // Load saved progress
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setChecked(JSON.parse(raw));
  }, []);

  // Save progress
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggle = (key: keyof ChecklistState) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const items = [
    {
      key: "starter",
      label: "Download the AI Income Starter Kit",
      desc: "Your 165-page roadmap — begin here.",
    },
    {
      key: "toolkit",
      label: "Download the AI Money Toolkit",
      desc: "Your plug-and-play execution worksheets.",
    },
    {
      key: "website",
      label: "Review the Blueprint & Website Guide",
      desc: "Get your offer and structure aligned.",
    },
    {
      key: "templates",
      label: "Choose a Website Template",
      desc: "Universal, Local, Coach, or Creator.",
    },
    {
      key: "launch",
      label: "Launch your first $27–$97 offer",
      desc: "Publish, post, and send real traffic.",
    },
  ];

  const total = items.length;
  const completed = items.filter((i) => checked[i.key]).length;
  const percent = Math.round((completed / total) * 100);

  return (
    <section className="mt-8 rounded-3xl border border-emerald-500/30 bg-[#0c0f12]/80 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.7)] backdrop-blur-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-emerald-300 sm:text-xl drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]">
            Your Launch Checklist
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Tick these off in order to move from “learning” to “live.”
          </p>
        </div>

        <div className="text-right text-xs sm:text-sm">
          <p className="font-medium text-emerald-300 drop-shadow-[0_0_6px_rgba(16,185,129,0.4)]">
            {completed} of {total} steps complete
          </p>
          <p className="text-slate-500">{percent}% done</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-800/60">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.7)] transition-all duration-300"
          style={{ width: `${Math.max(percent, 4)}%` }}
        />
      </div>

      {/* Items */}
      <ul className="mt-5 space-y-3">
        {items.map((item) => {
          const isDone = checked[item.key];
          return (
            <li
              key={item.key}
              className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-[#0d1115]/90 p-3 shadow-[0_0_25px_rgba(16,185,129,0.15)] transition hover:border-emerald-400/40 hover:bg-[#14181c]/90"
            >
              <button
                onClick={() => toggle(item.key)}
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-semibold transition
                ${
                  isDone
                    ? "border-emerald-400 bg-emerald-500 text-slate-900 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                    : "border-emerald-500/30 bg-[#0d1115] text-emerald-500/70 hover:border-emerald-400/50"
                }`}
              >
                {isDone ? "✓" : "•"}
              </button>

              <div>
                <p
                  className={`text-sm font-medium transition ${
                    isDone
                      ? "text-emerald-300 drop-shadow-[0_0_4px_rgba(16,185,129,0.5)]"
                      : "text-slate-100"
                  }`}
                >
                  {item.label}
                </p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-4 text-[0.7rem] text-slate-500 sm:text-xs">
        One step is progress. Don’t underestimate momentum.
      </p>
    </section>
  );
}
