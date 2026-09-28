"use client";

import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ChevronUp,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Phone,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Programs", href: "/programs" },
  { name: "Admissions", href: "/admissions" },
];

const exploreLinks = [
  { name: "Campus Life", href: "/campus-life" },
  { name: "Research", href: "/research" },
  { name: "AI Assistant", href: "/ai-assistant" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative overflow-hidden bg-[#03162f] text-white">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/5 blur-[120px]" />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1450px] px-6 pb-8 pt-16 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_0.7fr_1fr]">
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-4"
            >
              {/* Logo */}
              <div className="flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-1.5 shadow-lg transition duration-300 group-hover:scale-105">
                <img
                  src="/images/kist-logo.png"
                  alt="KIST College & SS"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Name */}
              <div>
                <div className="text-xl font-black tracking-tight text-white">
                  KIST College & SS
                </div>

                <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-blue-300">
                  <MapPin size={12} />
                  Kathmandu, Nepal
                </div>
              </div>
            </Link>

            <p className="mt-7 max-w-[480px] text-sm leading-7 text-slate-400">
              A modern digital campus experience connecting students,
              parents and visitors with academic information, admissions,
              campus life and AI-powered assistance.
            </p>

            {/* CTA */}
            <Link
              href="/ai-assistant"
              className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageCircle size={18} />

              Ask KIST AI

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <FooterHeading title="Quick Links" />

            <nav className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  name={link.name}
                />
              ))}
            </nav>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <div>
            <FooterHeading title="Explore" />

            <nav className="mt-6 space-y-3.5">
              {exploreLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  name={link.name}
                />
              ))}
            </nav>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <FooterHeading title="Contact" />

            <div className="mt-6 space-y-5">
              <ContactItem
                icon={<MapPin size={18} />}
                title="Location"
                text="KIST College & SS"
                subText="Kathamandu, Nepal"
              />

              <ContactItem
                icon={<Phone size={18} />}
                title="College Contact"
                text="Contact KIST"
                href="/contact"
              />

              <ContactItem
                icon={<Mail size={18} />}
                title="Official Enquiry"
                text="Send an enquiry"
                href="/contact"
              />

              <ContactItem
                icon={<Globe2 size={18} />}
                title="Campus"
                text="Kathmandu, Nepal"
              />
            </div>
          </div>
        </div>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ===================================================
            BOTTOM ROW
        ==================================================== */}

        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          {/* Copyright */}
          <div className="text-xs font-medium text-slate-500">
            © {currentYear} KIST College & SS.
            <span className="ml-1">
              All rights reserved.
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <SocialButton
              href="#"
              label="Facebook"
            >
              <Globe2 size={17} />
            </SocialButton>

            <SocialButton
              href="#"
              label="Instagram"
            >
              <Camera size={17} />
            </SocialButton>

            <SocialButton
              href="#"
              label="LinkedIn"
            >
              <MessageSquareText size={17} />
            </SocialButton>
          </div>

          {/* Prototype */}
          <div className="text-xs font-medium text-slate-500 lg:text-right">
            Independent Prototype
          </div>
        </div>

        {/* ===================================================
            AI DISCLAIMER
        ==================================================== */}

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-center backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center gap-1 text-xs leading-5 text-slate-500 sm:flex-row sm:gap-2">
            <span className="font-semibold text-slate-400">
              KIST AI Campus Assistant
            </span>

            <span className="hidden text-slate-700 sm:block">
              —
            </span>

            <span>
              Independent Prototype. Not an official KIST system.
            </span>
          </div>
        </div>

        {/* ===================================================
            BACK TO TOP
        ==================================================== */}

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group absolute bottom-7 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300 lg:right-10"
        >
          <ChevronUp
            size={19}
            className="transition group-hover:-translate-y-0.5"
          />
        </button>
      </div>

      {/* =====================================================
          BOTTOM RGB LINE
      ====================================================== */}

      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 opacity-80" />
    </footer>
  );
}

/* ============================================================
   FOOTER HEADING
============================================================ */

function FooterHeading({
  title,
}: {
  title: string;
}) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">
        {title}
      </h3>

      <div className="mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
    </div>
  );
}

/* ============================================================
   FOOTER LINK
============================================================ */

function FooterLink({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition duration-200 hover:translate-x-1 hover:text-white"
    >
      <span className="h-1 w-1 rounded-full bg-slate-700 transition group-hover:bg-blue-400" />

      {name}

      <ArrowRight
        size={13}
        className="opacity-0 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100"
      />
    </Link>
  );
}

/* ============================================================
   CONTACT ITEM
============================================================ */

function ContactItem({
  icon,
  title,
  text,
  subText,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  subText?: string;
  href?: string;
}) {
  const content = (
    <div className="group flex gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-400 transition group-hover:border-blue-400/20 group-hover:bg-blue-500/10">
        {icon}
      </div>

      <div className="min-w-0">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          {title}
        </div>

        <div className="mt-1 text-sm font-semibold text-slate-300 transition group-hover:text-white">
          {text}
        </div>

        {subText && (
          <div className="mt-0.5 text-xs text-slate-500">
            {subText}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }

  return content;
}

/* ============================================================
   SOCIAL BUTTON
============================================================ */

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      onClick={(event) => {
        if (href === "#") {
          event.preventDefault();
        }
      }}
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-violet-500/20 hover:text-white"
    >
      {children}
    </a>
  );
}