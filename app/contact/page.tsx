"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Clock3,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Phone,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  }

  return (
    <main className="min-h-screen bg-[#f6f9fd] text-slate-900">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#041a39] pt-[76px]">
        <div className="absolute inset-0">
          <img
            src="/images/kist-campus-1.png"
            alt="KIST College & SS campus"
            className="h-full min-h-[420px] w-full object-cover object-center opacity-45"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#03152f]/95 via-[#03152f]/80 to-[#03152f]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041a39] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1250px] px-6 py-20 lg:px-10">
          <div className="max-w-[700px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                Contact KIST
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl">
              Let&apos;s Start a
              <span className="block text-blue-400">
                Conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-[620px] text-base leading-8 text-slate-300 sm:text-lg">
              Have a question about admissions, programs, campus life or
              anything else? Get in touch with the KIST College & SS team.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                Send an Enquiry
                <ArrowRight size={18} />
              </a>

              <Link
                href="/ai-assistant"
                className="flex items-center gap-3 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Ask AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CARDS
      ========================================================= */}

      <section className="relative z-10 mx-auto -mt-8 max-w-[1150px] px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl md:grid-cols-3">
          <div className="border-b border-slate-100 p-6 md:border-b-0 md:border-r">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Phone size={22} />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#071d3c]">
              Call Us
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              For enquiries and general assistance.
            </p>

            <a
              href="tel:+9770000000000"
              className="mt-4 block text-sm font-bold text-blue-600 hover:text-blue-500"
            >
              +977 000 000 0000
            </a>
          </div>

          <div className="border-b border-slate-100 p-6 md:border-b-0 md:border-r">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Mail size={22} />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#071d3c]">
              Email Us
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Send your question and our team can assist you.
            </p>

            <a
              href="mailto:info@example.com"
              className="mt-4 block break-all text-sm font-bold text-blue-600 hover:text-blue-500"
            >
              info@example.com
            </a>
          </div>

          <div className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <MapPin size={22} />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#071d3c]">
              Visit Us
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Visit the KIST campus for in-person enquiries and assistance.
            </p>

            <div className="mt-4 text-sm font-bold text-blue-600">
              Kathmandu, Nepal
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT SECTION
      ========================================================= */}

      <section
        id="contact-form"
        className="mx-auto max-w-[1250px] px-6 py-20 lg:px-10"
      >
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* LEFT INFO */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-blue-600" />

              <span className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#071d3c] sm:text-5xl">
              We&apos;re here to help.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              Whether you are a prospective student, parent, current student,
              visitor or partner, you can use this page to send an enquiry.
            </p>

            {/* Info */}
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Building2 size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-[#071d3c]">
                    KIST College & SS
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Clock3 size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-[#071d3c]">
                    Enquiry Hours
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Contact the college for current office and enquiry hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-[#071d3c]">
                    AI Assistant
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Get quick answers to common KIST questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-9">
              <h3 className="text-sm font-bold text-[#071d3c]">
                Follow KIST
              </h3>

              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Globe size={18} />
                </button>

                <button
                  type="button"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Camera size={18} />
                </button>

                <button
                  type="button"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  <MessageSquareText size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-[#071d3c]">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Fill in the form below and submit your enquiry.
              </p>
            </div>

            {submitted ? (
              <div className="flex min-h-[390px] flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#071d3c]">
                  Message Ready!
                </h3>

                <p className="mt-3 max-w-[420px] text-sm leading-6 text-slate-600">
                  Your enquiry has been captured in this demo interface.
                  Connect this form to your backend or email service to send
                  real enquiries.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl bg-[#071d3c] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#071d3c]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#071d3c]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#071d3c]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-[#071d3c]"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      defaultValue=""
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="admission">Admissions</option>
                      <option value="programs">Programs</option>
                      <option value="fees">Fees & Scholarships</option>
                      <option value="campus">Campus Facilities</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#071d3c]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-500 hover:to-blue-400"
                >
                  Send Message
                  <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP / CAMPUS SECTION
      ========================================================= */}

      <section className="bg-[#071d3c] py-16">
        <div className="mx-auto grid max-w-[1150px] gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-blue-400" />

              <span className="text-sm font-bold uppercase tracking-[0.15em] text-blue-300">
                Find Us
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white">
              Visit the KIST Campus
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Explore the campus and connect with the college team for
              admissions, academics, student services and other enquiries.
            </p>

            <div className="mt-7 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                <MapPin size={21} />
              </div>

              <div>
                <div className="font-bold text-white">
                  KIST College & SS
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  Kathmandu, Nepal
                </div>
              </div>
            </div>

            <Link
              href="/campus-life"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/10 px-5 py-3 text-sm font-bold text-blue-200 transition hover:bg-blue-500/20"
            >
              Explore Campus Life
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-blue-400/20">
            <img
              src="/images/kist-campus-1.png"
              alt="KIST campus"
              className="h-[330px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#041a39]/70 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-[#041a39]/80 px-4 py-3 backdrop-blur-md">
              <div className="text-sm font-bold text-white">
                KIST College & SS
              </div>

              <div className="mt-1 text-xs text-slate-300">
                Kathmandu, Nepal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#f6f9fd] px-6 py-12">
        <div className="mx-auto max-w-[900px] rounded-[25px] bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-10 text-center shadow-xl sm:px-12">
          <h2 className="text-3xl font-bold text-white">
            Have a quick question?
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-sm leading-6 text-blue-100">
            Try the KIST AI Assistant for quick answers about admissions,
            programs, facilities and other common questions.
          </p>

          <Link
            href="/ai-assistant"
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Open AI Assistant
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}