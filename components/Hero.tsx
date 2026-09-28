"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  GraduationCap,
  MessageCircle,
  Play,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";

/* =========================================================
   AI ASSISTANT MENU
========================================================= */

const assistantItems = [
  {
    label: "Admission Process",
    icon: GraduationCap,
    href: "/admissions",
  },
  {
    label: "Programs & Courses",
    icon: BookOpen,
    href: "/programs",
  },
  {
    label: "Fees & Scholarships",
    icon: WalletCards,
    href: "/admissions",
  },
  {
    label: "Campus Facilities",
    icon: Building2,
    href: "/campus-life",
  },
  {
    label: "Events & Notices",
    icon: CalendarDays,
    href: "/campus-life",
  },
  {
    label: "General Information",
    icon: MessageCircle,
    href: "/contact",
  },
];

/* =========================================================
   FEATURE CARDS
========================================================= */

const featureCards = [
  {
    image: "/images/students.png",
    title: "Vibrant Campus Life",
    description:
      "A dynamic learning environment with diverse activities, clubs, and a supportive community.",
    href: "/campus-life",
  },
  {
    image: "/images/classroom.png",
    title: "Quality Education",
    description:
      "Industry-relevant curriculum, experienced faculty, and modern teaching methodologies.",
    href: "/academics",
  },
  {
    image: "/images/science.png",
    title: "Modern Facilities",
    description:
      "State-of-the-art laboratories, research facilities, and modern infrastructure for hands-on learning.",
    href: "/campus-life",
  },
];

/* =========================================================
   AI ASSISTANT CARD
========================================================= */

function AIAssistantCard() {
  return (
    <div className="group relative w-[318px]">
      {/* Glow */}
      <div className="absolute -inset-3 rounded-[34px] bg-blue-500/10 blur-2xl transition duration-500 group-hover:bg-blue-500/20" />

      <div className="relative overflow-hidden rounded-[28px] border border-blue-300/30 bg-[#061b3d]/95 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
        {/* Top shine */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex items-center gap-3 px-2 pb-4 pt-2">
          <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            {/* Robot */}
            <div className="relative flex h-[43px] w-[43px] items-center justify-center rounded-[14px] border-2 border-cyan-300 bg-[#071d42] shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              {/* Antennas */}
              <span className="absolute -top-[9px] left-[8px] h-[7px] w-[2px] rotate-[-18deg] bg-cyan-300" />
              <span className="absolute -top-[9px] right-[8px] h-[7px] w-[2px] rotate-[18deg] bg-cyan-300" />

              <span className="absolute -top-[11px] left-[6px] h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
              <span className="absolute -top-[11px] right-[6px] h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />

              {/* Eyes */}
              <div className="flex gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
                <span className="h-[6px] w-[6px] rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-[15px] font-bold text-white">
              KIST AI Assistant
            </h3>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.7)]" />

              <span className="text-[12px] font-semibold text-emerald-400">
                Online
              </span>
            </div>

            <p className="mt-1 text-[11px] font-medium text-slate-400">
              Your Personal Guide to KIST
            </p>
          </div>
        </div>

        {/* =====================================================
            MENU
        ====================================================== */}

        <div className="overflow-hidden rounded-[19px] border border-blue-300/15 bg-[#09254b]/90 px-3">
          {assistantItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group/item flex h-[48px] w-full items-center gap-3 text-left transition-all duration-200 hover:bg-blue-500/10 focus:bg-blue-500/10 focus:outline-none ${
                  index !== assistantItems.length - 1
                    ? "border-b border-blue-300/10"
                    : ""
                }`}
              >
                <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-200 transition group-hover/item:bg-blue-500/25 group-hover/item:text-cyan-200">
                  <Icon size={15} />
                </span>

                <span className="flex-1 text-[12px] font-medium text-slate-200">
                  {item.label}
                </span>

                <ArrowRight
                  size={13}
                  className="mr-1 text-slate-600 opacity-0 transition group-hover/item:translate-x-0.5 group-hover/item:text-blue-300 group-hover/item:opacity-100"
                />
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            ASK AI
        ====================================================== */}

        <Link
          href="/ai-assistant"
          className="group/ask mt-4 flex h-[56px] items-center justify-between rounded-[18px] border border-blue-400/40 bg-[#071d40] px-3.5 transition-all duration-300 hover:border-blue-300/70 hover:bg-[#0a2850] focus:outline-none focus:ring-2 focus:ring-blue-400/40"
        >
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-400">
              AI Assistant
            </div>

            <span className="mt-0.5 block text-[11px] font-medium text-slate-300">
              Ask me anything about KIST
            </span>
          </div>

          <span className="flex h-[37px] w-[37px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/20 transition group-hover/ask:scale-105">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </div>
    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  number,
  title,
  subtitle,
}: {
  icon: ReactNode;
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="group flex min-h-[120px] items-center gap-4 px-6 py-6 transition-all duration-300 hover:bg-blue-500/[0.06]">
      <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-200 ring-1 ring-blue-400/10 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/20">
        {icon}
      </div>

      <div className="min-w-0">
        <div className="text-[25px] font-black leading-none tracking-tight text-white">
          {number}
        </div>

        <div className="mt-1.5 text-[13px] font-bold text-white">
          {title}
        </div>

        <div className="mt-0.5 text-[11px] font-medium text-slate-400">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  image,
  title,
  description,
  href,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`Open ${title}`}
      className="group relative block overflow-hidden rounded-[20px] border border-blue-300/20 bg-[#071d3c] shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-300/50 hover:shadow-[0_25px_60px_rgba(0,40,100,0.35)] focus:outline-none focus:ring-2 focus:ring-blue-400/60"
    >
      {/* Image */}
      <div className="relative h-[195px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071d3c] via-transparent to-transparent" />

        {/* RGB hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-fuchsia-500/0 transition duration-500 group-hover:from-blue-500/10 group-hover:via-violet-500/10 group-hover:to-fuchsia-500/15" />
      </div>

      {/* Content */}
      <div className="flex min-h-[145px] items-end justify-between gap-4 p-5">
        <div>
          <h3 className="text-[19px] font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 max-w-[300px] text-[12px] leading-5 text-slate-300">
            {description}
          </p>

          {/* Working label */}
          <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-blue-300 transition group-hover:text-white">
            Explore

            <ArrowRight
              size={13}
              className="transition group-hover:translate-x-1"
            />
          </div>
        </div>

        {/* Working Arrow Button */}
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/60 text-white transition-all duration-300 group-hover:border-blue-400 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-violet-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">
          <ArrowRight
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#03152f] pt-[76px]">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">
        <img
          src="/images/kist-campus-hero.png"
          alt="KIST College & SS Campus"
          className="h-full min-h-[820px] w-full object-cover object-center"
        />
      </div>

      {/* =====================================================
          PREMIUM OVERLAYS
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#03152f]/95 via-[#03152f]/72 via-[45%] to-[#03152f]/15" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#03152f] via-[#03152f]/20 to-[#03152f]/10" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.14),transparent_32%)]" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="relative min-h-[590px]">
          {/* =================================================
              HERO CONTENT
          ================================================== */}

          <div className="flex min-h-[590px] max-w-[700px] items-center">
            <div className="pt-6 sm:pt-10">
              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[3px] w-8 rounded-full bg-cyan-400" />

                <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-blue-200 sm:text-[13px]">
                  Kathmandu&apos;s Leading College
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-[720px] text-[46px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[58px] lg:text-[68px] xl:text-[72px]">
                KIST College &amp; SS

                <span className="mt-1 block text-white">
                  Kathmandu
                </span>
              </h1>

              {/* Accent */}
              <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />

              {/* Subtitle */}
              <h2 className="mt-5 text-[21px] font-bold text-white sm:text-[24px]">
                Education for a Better Tomorrow
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[590px] text-[15px] font-medium leading-7 text-slate-200 sm:text-[16px]">
                Nurturing talent, building character, and shaping future
                leaders through quality education, innovation and real-world
                learning.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/programs"
                  className="group flex h-[54px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 text-[14px] font-bold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-blue-500 hover:shadow-blue-500/30"
                >
                  Explore Programs

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/campus-life"
                  className="group flex h-[54px] items-center justify-center gap-3 rounded-xl border border-blue-300/60 bg-white/[0.04] px-6 text-[14px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                >
                  Take a Campus Tour

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70 transition group-hover:bg-white group-hover:text-[#092a59]">
                    <Play
                      size={10}
                      fill="currentColor"
                    />
                  </span>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-medium text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Student Focused
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Modern Learning
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  AI Powered
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              AI ASSISTANT
          ================================================== */}

          <div className="absolute right-0 top-[72px] hidden xl:block">
            <AIAssistantCard />
          </div>

          {/* Floating badge */}
          <div className="absolute right-[350px] top-[120px] hidden 2xl:block">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-xl">
              <Sparkles
                size={13}
                className="text-cyan-300"
              />

              Smart Campus
            </div>
          </div>
        </div>

        {/* ===================================================
            STATS BAR
        ==================================================== */}

        <div className="relative z-20 overflow-hidden rounded-[28px] border border-blue-400/30 bg-[#061b3c]/95 shadow-[0_30px_70px_rgba(0,15,50,0.38)] backdrop-blur-2xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
              <StatCard
                icon={
                  <GraduationCap
                    size={27}
                    strokeWidth={1.8}
                  />
                }
                number="30+"
                title="Years of Excellence"
                subtitle="Since 1995"
              />
            </div>

            <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
              <StatCard
                icon={
                  <Users
                    size={27}
                    strokeWidth={1.8}
                  />
                }
                number="10,000+"
                title="Students & Alumni"
                subtitle="Growing Community"
              />
            </div>

            <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
              <StatCard
                icon={
                  <BookOpen
                    size={27}
                    strokeWidth={1.8}
                  />
                }
                number="50+"
                title="Programs Offered"
                subtitle="+2, Bachelor's & Master's"
              />
            </div>

            <div>
              <StatCard
                icon={
                  <Building2
                    size={27}
                    strokeWidth={1.8}
                  />
                }
                number="Modern Campus"
                title="In the Heart of"
                subtitle="Kamalpokhari, Kathmandu"
              />
            </div>
          </div>
        </div>

        {/* ===================================================
            FEATURE CARDS
        ==================================================== */}

        <div className="relative z-10 grid gap-5 py-7 md:grid-cols-3">
          {featureCards.map((card) => (
            <FeatureCard
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}