"use client";

import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  GraduationCap,
  Landmark,
  WalletCards,
} from "lucide-react";

const items = [
  {
    label: "Admission Process",
    icon: GraduationCap,
  },
  {
    label: "Programs & Courses",
    icon: BookOpen,
  },
  {
    label: "Fees & Scholarships",
    icon: WalletCards,
  },
  {
    label: "Campus Facilities",
    icon: Building2,
  },
  {
    label: "Events & Notices",
    icon: CalendarDays,
  },
  {
    label: "General Information",
    icon: Landmark,
  },
];

export default function AIAssistantCard() {
  return (
    <div className="w-[330px] rounded-[27px] border border-blue-400/60 bg-[#061b3b]/95 p-[14px] shadow-[0_0_35px_rgba(0,110,255,0.22)] backdrop-blur-xl">

      {/* Header */}
      <div className="flex items-center gap-3 px-2 pb-4">

        {/* Robot */}
        <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[18px] bg-blue-500/15">
          <div className="relative flex h-[48px] w-[48px] items-center justify-center rounded-[17px] border-2 border-blue-300 bg-[#071f46] shadow-[0_0_20px_rgba(40,130,255,0.45)]">

            {/* antenna */}
            <span className="absolute -top-[9px] left-[10px] h-[8px] w-[2px] rotate-[-18deg] bg-blue-300" />
            <span className="absolute -top-[9px] right-[10px] h-[8px] w-[2px] rotate-[18deg] bg-blue-300" />

            <span className="absolute -top-[12px] left-[8px] h-[5px] w-[5px] rounded-full bg-blue-300" />
            <span className="absolute -top-[12px] right-[8px] h-[5px] w-[5px] rounded-full bg-blue-300" />

            {/* eyes */}
            <div className="flex gap-3">
              <span className="h-[6px] w-[6px] rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
              <span className="h-[6px] w-[6px] rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold text-white">
            KIST AI Assistant
          </h3>

          <div className="mt-[3px] flex items-center gap-2">
            <span className="h-[8px] w-[8px] rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-[13px] font-medium text-emerald-400">
              Online
            </span>
          </div>

          <p className="mt-[3px] text-[12px] text-slate-400">
            Your Personal Guide to KIST
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="overflow-hidden rounded-[18px] border border-blue-400/20 bg-[#09254b]/85 px-3 py-1">

        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex h-[49px] w-full items-center gap-3 text-left transition hover:bg-blue-500/10 ${
                index !== items.length - 1
                  ? "border-b border-blue-300/10"
                  : ""
              }`}
            >
              <span className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                <Icon size={16} strokeWidth={2.2} />
              </span>

              <span className="text-[14px] font-medium text-slate-200">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Ask box */}
      <button className="mt-4 flex h-[58px] w-full items-center justify-between rounded-[19px] border border-blue-400/70 bg-[#071d40] px-4 shadow-[inset_0_0_15px_rgba(20,100,255,0.08)]">

        <span className="text-[12px] text-slate-400">
          Ask me anything about KIST...
        </span>

        <span className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_0_15px_rgba(40,130,255,0.45)]">
          <ArrowUpRight size={20} />
        </span>

      </button>
    </div>
  );
}