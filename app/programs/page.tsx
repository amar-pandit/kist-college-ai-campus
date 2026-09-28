"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Clock3,
  Download,
  GraduationCap,
  Lightbulb,
  Microscope,
  Search,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

/* ============================================================
   PROGRAM DATA
============================================================ */

const programs = [
  {
    title: "BBA",
    fullTitle: "Bachelor of Business Administration",
    category: "Undergraduate",
    duration: "4 Years",
    image: "/images/students.png",
    description:
      "Develop leadership, management, and entrepreneurial skills for a dynamic business world.",
  },
  {
    title: "BIT",
    fullTitle: "Bachelor of Information Technology",
    category: "Undergraduate",
    duration: "4 Years",
    image: "/images/it.png",
    description:
      "Gain practical IT skills and industry exposure to become a future-ready technology professional.",
  },
  {
    title: "BBS",
    fullTitle: "Bachelor of Business Studies",
    category: "Undergraduate",
    duration: "4 Years",
    image: "/images/management.png",
    description:
      "Build a strong foundation in business, finance, and management for a successful career.",
  },
  {
    title: "BSc Microbiology",
    fullTitle: "Bachelor of Science in Microbiology",
    category: "Undergraduate",
    duration: "4 Years",
    image: "/images/science.png",
    description:
      "Explore life sciences with hands-on laboratory experience and research-based learning.",
  },
  {
    title: "MBS",
    fullTitle: "Master of Business Studies",
    category: "Postgraduate",
    duration: "2 Years",
    image: "/images/management.png",
    description:
      "Advance your business knowledge with research, critical thinking, and real-world applications.",
  },
  {
    title: "MIT",
    fullTitle: "Master of Information Technology",
    category: "Postgraduate",
    duration: "2 Years",
    image: "/images/it.png",
    description:
      "Enhance your technical expertise and research skills for advanced career opportunities.",
  },
];

/* ============================================================
   FILTERS
============================================================ */

const filters = [
  "All Programs",
  "Undergraduate",
  "Postgraduate",
  "+2 Programs",
];

/* ============================================================
   PAGE
============================================================ */

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] =
    useState("All Programs");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedProgram, setSelectedProgram] =
    useState<(typeof programs)[number] | null>(
      null,
    );

  const [showBrochure, setShowBrochure] =
    useState(false);

  /* ==========================================================
     FILTER PROGRAMS
  ========================================================== */

  const filteredPrograms = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    return programs.filter((program) => {
      const matchesFilter =
        activeFilter === "All Programs"
          ? true
          : activeFilter === "+2 Programs"
            ? false
            : program.category ===
              activeFilter;

      const matchesSearch =
        !search ||
        program.title
          .toLowerCase()
          .includes(search) ||
        program.fullTitle
          .toLowerCase()
          .includes(search) ||
        program.description
          .toLowerCase()
          .includes(search);

      return (
        matchesFilter &&
        matchesSearch
      );
    });
  }, [activeFilter, searchTerm]);

  /* ==========================================================
     ESC CLOSE
  ========================================================== */

  useEffect(() => {
    function handleEscape(
      event: KeyboardEvent,
    ) {
      if (event.key !== "Escape") {
        return;
      }

      setSelectedProgram(null);
      setShowBrochure(false);
    }

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  /* ==========================================================
     BODY LOCK WHEN MODAL OPEN
  ========================================================== */

  useEffect(() => {
    const modalOpen =
      Boolean(selectedProgram) ||
      showBrochure;

    if (modalOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [
    selectedProgram,
    showBrochure,
  ]);

  /* ==========================================================
     RESET FILTER
  ========================================================== */

  function resetPrograms() {
    setActiveFilter("All Programs");
    setSearchTerm("");
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071b38]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[560px] overflow-hidden bg-[#03152f] pt-[76px]">
        <img
          src="/images/kist-campus-hero.png"
          alt="KIST College & SS campus"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03152f]/95 via-[#03152f]/75 to-[#03152f]/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03152f]/70 via-transparent to-transparent" />

        {/* RGB glows */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[110px]" />

        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-500/15 blur-[110px]" />

        <div className="relative mx-auto flex min-h-[484px] max-w-[1500px] items-center px-6 py-16 lg:px-12">
          <div className="max-w-[720px]">
            {/* Breadcrumb */}
            <div className="mb-7 flex items-center gap-2 text-sm text-slate-300">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-slate-500">
                /
              </span>

              <span className="font-medium text-white">
                Programs
              </span>
            </div>

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
              <span className="h-[2px] w-9 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

              Academic Programs
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              Programs for
              <span className="block">
                Your{" "}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Brighter Future
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-base font-medium leading-7 text-slate-200 lg:text-lg">
              Discover industry-relevant programs designed to build
              your skills, expand your opportunities, and shape your
              future at KIST College & SS.
            </p>

            {/* Hero buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#program-list"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-900/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Programs

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <button
                type="button"
                onClick={() =>
                  setShowBrochure(true)
                }
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
              >
                <Download
                  size={18}
                  className="transition group-hover:-translate-y-0.5"
                />

                Program Brochure
              </button>
            </div>

            {/* Hero mini stats */}
            <div className="mt-10 flex flex-wrap gap-3">
              <HeroPill text="Undergraduate" />

              <HeroPill text="Postgraduate" />

              <HeroPill text="Student-focused" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTER BAR
      ====================================================== */}

      <section className="sticky top-[76px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => {
              const active =
                activeFilter === filter;

              const disabled =
                filter === "+2 Programs";

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() =>
                    setActiveFilter(filter)
                  }
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    active
                      ? "bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-blue-500/15"
                      : disabled
                        ? "border border-slate-200 bg-slate-50 text-slate-400"
                        : "border border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="flex h-11 w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50 lg:w-[340px]">
            <Search
              size={18}
              className="shrink-0 text-slate-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value,
                )
              }
              placeholder="Search programs..."
              className="w-full bg-transparent text-sm font-medium text-[#071b38] outline-none placeholder:text-slate-400"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() =>
                  setSearchTerm("")
                }
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAM LIST
      ====================================================== */}

      <section
        id="program-list"
        className="scroll-mt-28 bg-white py-14 lg:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Section heading */}
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.15em] text-blue-600">
                <span className="h-[2px] w-7 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

                Our Academic Programs
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071b38] lg:text-4xl">
                Find the Right Program
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Explore available study options and open a program
                to view more information.
              </p>
            </div>

            {/* Result count */}
            <div className="flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600 md:self-auto">
              <CheckCircle2
                size={15}
                className="text-emerald-500"
              />

              {filteredPrograms.length}{" "}
              {filteredPrograms.length === 1
                ? "program"
                : "programs"}{" "}
              found
            </div>
          </div>

          {/* Search active */}
          {(searchTerm ||
            activeFilter !==
              "All Programs") && (
            <div className="mb-7 flex flex-wrap items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3">
              <span className="text-xs font-bold text-slate-500">
                Showing:
              </span>

              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
                {activeFilter}
              </span>

              {searchTerm && (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-700 shadow-sm">
                  Search: &quot;
                  {searchTerm}&quot;
                </span>
              )}

              <button
                type="button"
                onClick={resetPrograms}
                className="ml-auto text-xs font-bold text-blue-600 hover:text-violet-600"
              >
                Reset
              </button>
            </div>
          )}

          {/* Cards */}
          {filteredPrograms.length >
          0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPrograms.map(
                (program) => (
                  <ProgramCard
                    key={program.title}
                    program={program}
                    onOpen={() =>
                      setSelectedProgram(
                        program,
                      )
                    }
                  />
                ),
              )}
            </div>
          ) : (
            <EmptyPrograms
              searchTerm={searchTerm}
              activeFilter={activeFilter}
              onReset={resetPrograms}
            />
          )}
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE KIST
      ====================================================== */}

      <section className="border-y border-slate-100 bg-[#f7f9fc] py-14 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:gap-14">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.15em] text-blue-600">
                <span className="h-[2px] w-7 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

                Why Choose KIST Programs?
              </div>

              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#071b38] lg:text-4xl">
                Learning Designed for
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  {" "}
                  Real-World Success
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Explore the learning qualities represented across the
                program experience.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <WhyCard
                  icon={
                    <BookOpen size={23} />
                  }
                  title="Industry-Relevant Curriculum"
                  text="Designed with practical and real-world needs in mind."
                />

                <WhyCard
                  icon={
                    <Users size={23} />
                  }
                  title="Experienced Faculty"
                  text="Learn from experienced educators and practitioners."
                />

                <WhyCard
                  icon={
                    <Lightbulb size={23} />
                  }
                  title="Practical Learning"
                  text="Labs, projects and opportunities for hands-on learning."
                />

                <WhyCard
                  icon={
                    <BriefcaseBusiness
                      size={23}
                    />
                  }
                  title="Career Opportunities"
                  text="Develop skills that support future career opportunities."
                />

                <WhyCard
                  icon={
                    <Microscope size={23} />
                  }
                  title="Research & Innovation"
                  text="Explore research and innovation opportunities."
                />

                <WhyCard
                  icon={
                    <Sparkles size={23} />
                  }
                  title="Supportive Environment"
                  text="A student-focused community for learning and growth."
                />
              </div>
            </div>

            {/* Right */}
            <div className="overflow-hidden rounded-[28px] bg-[#061d3d] shadow-2xl">
              <div className="relative h-[290px]">
                <img
                  src="/images/classroom.png"
                  alt="KIST classroom"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061d3d] via-[#061d3d]/10 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
                    Academic Experience
                  </span>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    Program Highlights
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <div className="grid grid-cols-2 gap-6">
                  <Highlight
                    number="50+"
                    text="Academic Programs"
                  />

                  <Highlight
                    number="Experienced"
                    text="Faculty"
                  />

                  <Highlight
                    number="Industry"
                    text="Collaboration"
                  />

                  <Highlight
                    number="Research"
                    text="Opportunities"
                  />
                </div>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-xs leading-6 text-slate-400">
                    Explore the available program information above and
                    contact KIST for current official admission details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#031b38] py-14 lg:py-16">
        <img
          src="/images/students.png"
          alt="KIST students"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#03152f]/90" />

        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />

        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-300">
              Find Your Path
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black text-white lg:text-4xl">
              Choose a Program That
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                {" "}
                Fits Your Future
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Explore programs, understand your options, and take the next
              step toward your academic journey.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ai-assistant"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-950/20 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Talk to AI Assistant

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/admissions"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Admissions

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAM DETAIL MODAL
      ====================================================== */}

      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() =>
            setSelectedProgram(null)
          }
        />
      )}

      {/* =====================================================
          BROCHURE MODAL
      ====================================================== */}

      {showBrochure && (
        <BrochureModal
          onClose={() =>
            setShowBrochure(false)
          }
        />
      )}
    </main>
  );
}

/* ============================================================
   HERO PILL
============================================================ */

function HeroPill({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

      {text}
    </div>
  );
}

/* ============================================================
   PROGRAM CARD
============================================================ */

function ProgramCard({
  program,
  onOpen,
}: {
  program: (typeof programs)[number];
  onOpen: () => void;
}) {
  return (
    <article className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl">
      {/* Image */}
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
      >
        <div className="relative h-[220px] overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#031b38]/95 via-[#031b38]/10 to-transparent" />

          {/* Category */}
          <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md">
            {program.category}
          </span>

          {/* Program */}
          <div className="absolute bottom-5 left-5">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

              {program.duration}
            </div>

            <h3 className="text-3xl font-black tracking-tight text-white">
              {program.title}
            </h3>
          </div>
        </div>
      </button>

      {/* Content */}
      <div className="p-5">
        <h4 className="text-base font-black leading-6 text-[#071b38]">
          {program.fullTitle}
        </h4>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
          {program.description}
        </p>

        {/* Meta */}
        <div className="mt-5 flex items-center gap-5 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clock3
              size={15}
              className="text-blue-500"
            />

            {program.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <GraduationCap
              size={15}
              className="text-violet-500"
            />

            Degree
          </span>
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={onOpen}
            className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-xs font-black text-white transition hover:shadow-lg"
          >
            View Program

            <ArrowRight
              size={15}
              className="transition group-hover/btn:translate-x-1"
            />
          </button>

          <Link
            href="/contact"
            className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   EMPTY STATE
============================================================ */

function EmptyPrograms({
  searchTerm,
  activeFilter,
  onReset,
}: {
  searchTerm: string;
  activeFilter: string;
  onReset: () => void;
}) {
  const isPlusTwo =
    activeFilter === "+2 Programs";

  return (
    <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
        {isPlusTwo ? (
          <GraduationCap size={28} />
        ) : (
          <Search size={28} />
        )}
      </div>

      <h3 className="mt-5 text-xl font-black text-[#071b38]">
        {isPlusTwo
          ? "No +2 programs in the current program list"
          : "No programs found"}
      </h3>

      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
        {isPlusTwo
          ? "The current program data supplied for this page contains undergraduate and postgraduate programs only."
          : searchTerm
            ? `We couldn't find a program matching "${searchTerm}".`
            : "Try another program category."}
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
      >
        Show All Programs

        <ArrowRight size={17} />
      </button>
    </div>
  );
}

/* ============================================================
   WHY CARD
============================================================ */

function WhyCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600 transition group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-4 font-black text-[#071b38]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   HIGHLIGHT
============================================================ */

function Highlight({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div>
      <div className="text-xl font-black text-white">
        {number}
      </div>

      <div className="mt-1 text-xs font-medium text-slate-400">
        {text}
      </div>
    </div>
  );
}

/* ============================================================
   PROGRAM MODAL
============================================================ */

function ProgramModal({
  program,
  onClose,
}: {
  program: (typeof programs)[number];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white shadow-2xl">
        {/* Header image */}
        <div className="relative h-[230px] overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#031b38]/90 via-transparent to-transparent" />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur transition hover:bg-black/40"
            aria-label="Close program details"
          >
            <X size={19} />
          </button>

          <div className="absolute bottom-5 left-6">
            <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
              {program.category}
            </span>

            <h2 className="mt-3 text-3xl font-black text-white">
              {program.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-600">
                Program Overview
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#071b38]">
                {program.fullTitle}
              </h3>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600">
              <Clock3
                size={15}
                className="text-blue-600"
              />

              {program.duration}
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
            {program.description}
          </p>

          {/* Info cards */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <GraduationCap
                  size={16}
                  className="text-blue-600"
                />

                Level
              </div>

              <p className="mt-2 font-black text-[#071b38]">
                {program.category}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <Clock3
                  size={16}
                  className="text-violet-600"
                />

                Duration
              </div>

              <p className="mt-2 font-black text-[#071b38]">
                {program.duration}
              </p>
            </div>
          </div>

          {/* Notice */}
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <div className="flex gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-blue-600"
              />

              <p className="text-xs font-medium leading-6 text-blue-900/70">
                For current admission requirements, eligibility, fees,
                deadlines, and other official details, contact KIST or
                check the current admissions information.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/admissions"
              onClick={onClose}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-5 py-3.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Explore Admissions

              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-[#071b38] transition hover:border-blue-300 hover:text-blue-600"
            >
              Contact KIST

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   BROCHURE MODAL
============================================================ */

function BrochureModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] bg-white shadow-2xl">
        {/* Gradient header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-violet-600 to-fuchsia-600 p-7 text-white">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            aria-label="Close brochure dialog"
          >
            <X size={18} />
          </button>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <BookOpen size={27} />
          </div>

          <h2 className="mt-5 text-2xl font-black">
            Program Brochure
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
            Explore the available program information and continue to
            the official KIST channels for current details.
          </p>
        </div>

        {/* Body */}
        <div className="p-7">
          <div className="space-y-3">
            <BrochureItem
              icon={<GraduationCap size={18} />}
              text="Undergraduate programs"
            />

            <BrochureItem
              icon={<BriefcaseBusiness size={18} />}
              text="Postgraduate programs"
            />

            <BrochureItem
              icon={<Clock3 size={18} />}
              text="Program duration information"
            />

            <BrochureItem
              icon={<Sparkles size={18} />}
              text="Program descriptions and highlights"
            />
          </div>

          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-xs font-medium leading-6 text-amber-900/70">
              A downloadable brochure file has not been connected to
              this page yet. This button is intentionally kept as a
              working information dialog instead of linking to a
              fabricated file.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Request Information

              <ArrowRight size={17} />
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   BROCHURE ITEM
============================================================ */

function BrochureItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600">
        {icon}
      </div>

      <span className="text-sm font-bold text-[#071b38]">
        {text}
      </span>

      <Check
        size={16}
        className="ml-auto text-emerald-500"
      />
    </div>
  );
}