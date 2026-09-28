"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe2,
  GraduationCap,
  Lightbulb,
  Search,
  Sparkles,
  Target,
  Users,
  WalletCards,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ProgramCategory =
  | "All"
  | "Undergraduate"
  | "Postgraduate"
  | "+2";

type Program = {
  title: string;
  subtitle: string;
  image: string;
  type: ProgramCategory;
  description: string;
  duration: string;
  href: string;
};

type CalendarItemType = {
  title: string;
  date: string;
  description: string;
};

/* =========================================================
   PROGRAM DATA
========================================================= */

const programs: Program[] = [
  {
    title: "BBA",
    subtitle: "Bachelor of Business Administration",
    image: "/images/students.png",
    type: "Undergraduate",
    description:
      "A business-focused undergraduate programme designed around management, communication, entrepreneurship and practical learning.",
    duration: "Undergraduate",
    href: "/programs",
  },

  {
    title: "BIT",
    subtitle: "Bachelor of Information Technology",
    image: "/images/it.png",
    type: "Undergraduate",
    description:
      "An information technology programme focused on computing, software, digital systems and technology-oriented learning.",
    duration: "Undergraduate",
    href: "/programs",
  },

  {
    title: "BBS",
    subtitle: "Bachelor of Business Studies",
    image: "/images/classroom.png",
    type: "Undergraduate",
    description:
      "A business studies pathway covering management, commerce and related academic areas.",
    duration: "Undergraduate",
    href: "/programs",
  },

  {
    title: "BSc Microbiology",
    subtitle: "Bachelor of Science in Microbiology",
    image: "/images/science.png",
    type: "Undergraduate",
    description:
      "A science-focused programme providing academic exposure to microbiology and laboratory-oriented learning.",
    duration: "Undergraduate",
    href: "/programs",
  },

  {
    title: "MBS",
    subtitle: "Master of Business Studies",
    image: "/images/management.png",
    type: "Postgraduate",
    description:
      "A postgraduate business studies programme for learners seeking advanced academic and professional development.",
    duration: "Postgraduate",
    href: "/programs",
  },

  {
    title: "MIT",
    subtitle: "Master of Information Technology",
    image: "/images/it.png",
    type: "Postgraduate",
    description:
      "A postgraduate information technology pathway focused on advanced computing and technology-related studies.",
    duration: "Postgraduate",
    href: "/programs",
  },
];

/* =========================================================
   CALENDAR DATA
========================================================= */

const calendarItems: CalendarItemType[] = [
  {
    title: "Admission Period",
    date: "Check latest schedule",
    description:
      "Admission dates can change. Check the latest official KIST admission information before applying.",
  },

  {
    title: "Class Commencement",
    date: "As announced by KIST",
    description:
      "Class start dates are subject to the official academic schedule.",
  },

  {
    title: "Mid-Term Examination",
    date: "As per academic calendar",
    description:
      "Mid-term examination dates should be confirmed from the latest academic notice.",
  },

  {
    title: "Final Examination",
    date: "As per academic calendar",
    description:
      "Final examination dates should be confirmed from the latest academic notice.",
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filters: ProgramCategory[] = [
  "All",
  "Undergraduate",
  "Postgraduate",
  "+2",
];

/* =========================================================
   PAGE
========================================================= */

export default function AcademicsPage() {
  const [activeFilter, setActiveFilter] =
    useState<ProgramCategory>("All");

  const [searchTerm, setSearchTerm] = useState("");

  const [calendarOpen, setCalendarOpen] =
    useState(false);

  const [selectedProgram, setSelectedProgram] =
    useState<Program | null>(null);

  /* =======================================================
     FILTER PROGRAMS
  ======================================================== */

  const filteredPrograms = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return programs.filter((program) => {
      const matchesCategory =
        activeFilter === "All" ||
        program.type === activeFilter;

      const matchesSearch =
        !query ||
        program.title.toLowerCase().includes(query) ||
        program.subtitle.toLowerCase().includes(query) ||
        program.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  /* =======================================================
     RESET FILTER
  ======================================================== */

  function resetFilters() {
    setActiveFilter("All");
    setSearchTerm("");
  }

  return (
    <main className="min-h-screen bg-white text-[#071b38]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[560px] overflow-hidden bg-[#03152f] pt-[76px]">

        {/* Background */}
        <img
          src="/images/kist-campus-hero.png"
          alt="KIST College & SS campus"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03152f]/95 via-[#03152f]/78 to-[#03152f]/15" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03152f]/90 via-transparent to-transparent" />

        {/* Glow */}
        <div className="pointer-events-none absolute right-[-150px] top-[80px] h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[120px]" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[484px] max-w-[1500px] items-center px-5 sm:px-6 lg:px-12">

          <div className="max-w-[720px]">

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-300">

              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-blue-300">
                /
              </span>

              <span className="text-white">
                Academics
              </span>

            </div>

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-300">

              <span className="h-[3px] w-8 rounded-full bg-cyan-400" />

              Academic Excellence

            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[70px]">

              Academic Excellence

              <span className="block">

                for a{" "}

                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Brighter Future
                </span>

              </span>

            </h1>

            {/* Accent */}
            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-base font-medium leading-7 text-slate-200 lg:text-lg">
              At KIST, we offer academic pathways designed to support
              knowledge, practical learning, critical thinking,
              innovation and real-world skills.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/programs"
                className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5"
              >
                Explore Programs

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <button
                type="button"
                onClick={() => setCalendarOpen(true)}
                className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-6 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                <CalendarDays size={18} />

                Academic Calendar

                <ChevronDown
                  size={15}
                  className="transition group-hover:rotate-180"
                />
              </button>

            </div>

            {/* Trust points */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-300">

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Student Focused
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Practical Learning
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Industry Relevant
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="relative z-10 mx-auto -mt-8 max-w-[1400px] px-5">

        <div className="overflow-hidden rounded-[26px] border border-blue-400/20 bg-[#061d3d] shadow-[0_25px_60px_rgba(0,20,60,0.18)]">

          <div className="grid sm:grid-cols-2 lg:grid-cols-5">

            <AcademicStat
              icon={<Users size={24} />}
              number="10,000+"
              title="Students & Alumni"
            />

            <AcademicStat
              icon={<BookOpen size={24} />}
              number="50+"
              title="Academic Programs"
            />

            <AcademicStat
              icon={<GraduationCap size={24} />}
              number="Experienced"
              title="Faculty Members"
            />

            <AcademicStat
              icon={<BarChart3 size={24} />}
              number="Outcome-Based"
              title="Learning"
            />

            <AcademicStat
              icon={<Globe2 size={24} />}
              number="Industry-Relevant"
              title="Curriculum"
              last
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          PROGRAM SECTION
      ====================================================== */}

      <section className="py-16 lg:py-20">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

          {/* Heading */}
          <SectionTitle
            eyebrow="Our Programs"
            title="Academic Programs"
            action="View All Programs"
            href="/programs"
          />

          {/* =================================================
              SEARCH + FILTER
          ================================================== */}

          <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Filters */}
            <div className="flex flex-wrap gap-2">

              {filters.map((filter) => {
                const active =
                  activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() =>
                      setActiveFilter(filter)
                    }
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    {filter === "All"
                      ? "All Programs"
                      : filter}
                  </button>
                );
              })}

            </div>

            {/* Search */}
            <div className="relative w-full lg:max-w-[320px]">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search programs..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
              />

            </div>

          </div>

          {/* Result count */}
          <div className="mb-5 flex items-center justify-between">

            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-800">
                {filteredPrograms.length}
              </span>{" "}
              program
              {filteredPrograms.length !== 1
                ? "s"
                : ""}
            </p>

            {(searchTerm ||
              activeFilter !== "All") && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Clear filters
              </button>
            )}

          </div>

          {/* =================================================
              PROGRAM CARDS
          ================================================== */}

          {filteredPrograms.length > 0 ? (

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredPrograms.map(
                (program) => (
                  <ProgramCard
                    key={program.title}
                    program={program}
                    onPreview={() =>
                      setSelectedProgram(
                        program
                      )
                    }
                  />
                )
              )}

            </div>

          ) : (

            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                <Search size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#071b38]">
                No programs found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Try another programme name or remove
                the current filters.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Reset Search
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          FEATURE STRIP
      ====================================================== */}

      <section className="border-y border-blue-100 bg-[#f5f8fc] py-14">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

          <div className="grid gap-5 md:grid-cols-3">

            <FeatureStrip
              icon={<Lightbulb size={25} />}
              title="Practical Learning"
              text="Learning experiences designed to connect academic concepts with practical application."
            />

            <FeatureStrip
              icon={<Users size={25} />}
              title="Student Support"
              text="A learning environment focused on student development, engagement and academic growth."
            />

            <FeatureStrip
              icon={<Globe2 size={25} />}
              title="Future Ready"
              text="Academic pathways that encourage innovation, technology awareness and professional development."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          ACADEMIC APPROACH
      ====================================================== */}

      <section className="py-16 lg:py-20">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

          <SectionTitle
            eyebrow="Academic Approach"
            title="Learning That Builds Futures"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <ApproachCard
              icon={<BookOpen size={25} />}
              number="01"
              title="Interactive Learning"
              text="Engaging and student-centered teaching methods that encourage participation and understanding."
            />

            <ApproachCard
              icon={<Lightbulb size={25} />}
              number="02"
              title="Practical Exposure"
              text="Hands-on experience through laboratories, projects, activities and applied learning."
            />

            <ApproachCard
              icon={<Users size={25} />}
              number="03"
              title="Industry Collaboration"
              text="Opportunities for students to understand professional environments and industry expectations."
            />

            <ApproachCard
              icon={<BarChart3 size={25} />}
              number="04"
              title="Continuous Assessment"
              text="Regular academic evaluation designed to support learning progress and improvement."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          CALENDAR + FACILITIES
      ====================================================== */}

      <section className="bg-[#f5f8fc] py-16">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">

            {/* CALENDAR */}
            <div>

              <SectionTitle
                eyebrow="Calendar"
                title="Academic Calendar"
              />

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                {calendarItems.map(
                  (item, index) => (
                    <CalendarItem
                      key={item.title}
                      title={item.title}
                      date={item.date}
                      description={
                        item.description
                      }
                      last={
                        index ===
                        calendarItems.length -
                          1
                      }
                    />
                  )
                )}

                <div className="border-t border-slate-100 p-5">

                  <button
                    type="button"
                    onClick={() =>
                      setCalendarOpen(true)
                    }
                    className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                  >
                    View Calendar Details

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                </div>

              </div>

            </div>

            {/* FACILITIES */}
            <div>

              <SectionTitle
                eyebrow="Facilities"
                title="Academic Facilities"
              />

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="relative h-[220px] overflow-hidden">

                  <img
                    src="/images/library.png"
                    alt="KIST library"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061d3d]/80 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <div className="flex items-center gap-2 text-sm font-bold text-white">

                      <BookOpen size={17} />

                      Learning Resources

                    </div>

                  </div>

                </div>

                <div className="grid gap-4 p-6 sm:grid-cols-2">

                  <FacilityItem text="Well-equipped laboratories" />

                  <FacilityItem text="Central library and digital resources" />

                  <FacilityItem text="Smart classrooms" />

                  <FacilityItem text="E-learning resources" />

                  <FacilityItem text="Research and innovation support" />

                  <FacilityItem text="Student learning spaces" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white px-5 py-16 lg:px-10">

        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#082f66] via-[#1456a0] to-[#5531c7] px-6 py-14 text-center shadow-2xl sm:px-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
            <GraduationCap size={28} />
          </div>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
            Find Your Academic Path
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-50/90 sm:text-base">
            Explore programmes, understand admission information
            and discover the academic opportunities available at
            KIST College &amp; SS.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/programs"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-xl transition hover:-translate-y-0.5"
            >
              Explore Programs

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Admission Information

              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROGRAM MODAL
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
          CALENDAR MODAL
      ====================================================== */}

      {calendarOpen && (
        <CalendarModal
          onClose={() =>
            setCalendarOpen(false)
          }
        />
      )}

    </main>
  );
}

/* =========================================================
   ACADEMIC STAT
========================================================= */

function AcademicStat({
  icon,
  number,
  title,
  last = false,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  last?: boolean;
}) {
  return (
    <div
      className={`group flex min-h-[112px] items-center gap-3 px-5 py-5 transition hover:bg-blue-500/[0.06] ${
        !last
          ? "border-b border-white/10 lg:border-b-0 lg:border-r"
          : ""
      }`}
    >

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 transition group-hover:scale-105 group-hover:bg-blue-500/25">
        {icon}
      </div>

      <div>

        <div className="text-sm font-black text-white">
          {number}
        </div>

        <div className="mt-1 text-xs font-medium text-slate-300">
          {title}
        </div>

      </div>

    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  eyebrow,
  title,
  action,
  href,
}: {
  eyebrow: string;
  title: string;
  action?: string;
  href?: string;
}) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4">

      <div>

        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-blue-600">

          <span className="h-[3px] w-8 rounded-full bg-blue-500" />

          {eyebrow}

        </div>

        <h2 className="mt-2 text-3xl font-black tracking-tight text-[#071b38] sm:text-4xl">
          {title}
        </h2>

      </div>

      {action && href && (
        <Link
          href={href}
          className="group hidden items-center gap-2 text-sm font-bold text-blue-600 sm:flex"
        >
          {action}

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}

    </div>
  );
}

/* =========================================================
   PROGRAM CARD
========================================================= */

function ProgramCard({
  program,
  onPreview,
}: {
  program: Program;
  onPreview: () => void;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-[190px] overflow-hidden">

        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061d3d]/90 via-transparent to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
          {program.type}
        </div>

        {/* Open */}
        <button
          type="button"
          onClick={onPreview}
          aria-label={`View ${program.title}`}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-blue-500"
        >
          <ArrowUpRight size={16} />
        </button>

        {/* Program title */}
        <div className="absolute bottom-4 left-4">

          <div className="text-2xl font-black text-white">
            {program.title}
          </div>

        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-[17px] font-bold leading-6 text-[#071b38]">
          {program.subtitle}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {program.description}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <GraduationCap size={14} />
            {program.duration}
          </span>

          <button
            type="button"
            onClick={onPreview}
            className="group/link inline-flex items-center gap-2 text-xs font-bold text-blue-600"
          >
            View Details

            <ArrowRight
              size={14}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </button>

        </div>

      </div>

    </article>
  );
}

/* =========================================================
   FEATURE STRIP
========================================================= */

function FeatureStrip({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#071b38]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {text}
      </p>

    </div>
  );
}

/* =========================================================
   APPROACH CARD
========================================================= */

function ApproachCard({
  icon,
  number,
  title,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>

        <span className="text-xs font-black text-blue-200">
          {number}
        </span>

      </div>

      <h3 className="mt-5 font-bold text-[#071b38]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {text}
      </p>

    </div>
  );
}

/* =========================================================
   CALENDAR ITEM
========================================================= */

function CalendarItem({
  title,
  date,
  description,
  last = false,
}: {
  title: string;
  date: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex gap-4 p-5 ${
        !last
          ? "border-b border-slate-200"
          : ""
      }`}
    >

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
        <CalendarDays size={18} />
      </div>

      <div className="min-w-0">

        <h3 className="text-sm font-bold text-[#071b38]">
          {title}
        </h3>

        <p className="mt-1 text-xs font-semibold text-blue-600">
          {date}
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   FACILITY ITEM
========================================================= */

function FacilityItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-start gap-2">

      <CheckCircle2
        size={17}
        className="mt-0.5 shrink-0 text-blue-500"
      />

      <span className="text-sm leading-6 text-slate-600">
        {text}
      </span>

    </div>
  );
}

/* =========================================================
   PROGRAM MODAL
========================================================= */

function ProgramModal({
  program,
  onClose,
}: {
  program: Program;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >

      <div className="relative max-h-[90vh] w-full max-w-[650px] overflow-y-auto rounded-3xl bg-white shadow-2xl">

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur transition hover:bg-black/50"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="relative h-[240px] overflow-hidden">

          <img
            src={program.image}
            alt={program.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061d3d]/90 to-transparent" />

          <div className="absolute bottom-6 left-6">

            <div className="text-sm font-bold uppercase tracking-wider text-blue-200">
              {program.type}
            </div>

            <h2 className="mt-1 text-4xl font-black text-white">
              {program.title}
            </h2>

          </div>

        </div>

        {/* Content */}
        <div className="p-7">

          <h3 className="text-2xl font-black text-[#071b38]">
            {program.subtitle}
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {program.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            <InfoBox
              icon={<GraduationCap size={18} />}
              title="Level"
              value={program.type}
            />

            <InfoBox
              icon={<BookOpen size={18} />}
              title="Programme"
              value={program.title}
            />

            <InfoBox
              icon={<Clock3 size={18} />}
              title="Academic Information"
              value="Check official source"
            />

            <InfoBox
              icon={<WalletCards size={18} />}
              title="Fees"
              value="Check official source"
            />

          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <Link
              href={program.href}
              onClick={onClose}
              className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              View Programs

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/admissions"
              onClick={onClose}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-[#071b38] transition hover:bg-slate-50"
            >
              Admission Information

              <ArrowUpRight size={16} />
            </Link>

          </div>

          <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
            Programme-specific eligibility, fees, deadlines and admission
            requirements should be confirmed from the latest official KIST
            information.
          </p>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

      <div className="flex items-center gap-2 text-blue-600">
        {icon}

        <span className="text-xs font-bold">
          {title}
        </span>
      </div>

      <div className="mt-2 text-sm font-semibold text-[#071b38]">
        {value}
      </div>

    </div>
  );
}

/* =========================================================
   CALENDAR MODAL
========================================================= */

function CalendarModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >

      <div className="relative max-h-[90vh] w-full max-w-[680px] overflow-y-auto rounded-3xl bg-white shadow-2xl">

        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#082f66] to-[#5531c7] p-7 text-white">

          <button
            type="button"
            onClick={onClose}
            aria-label="Close calendar"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <X size={18} />
          </button>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
            <CalendarDays size={24} />
          </div>

          <h2 className="mt-5 text-2xl font-black">
            Academic Calendar
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-6 text-blue-50/80">
            Important academic periods and schedules are subject to
            official KIST announcements.
          </p>

        </div>

        {/* Items */}
        <div className="p-6">

          <div className="space-y-3">

            {calendarItems.map(
              (item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >

                  <div className="flex gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                      <span className="text-sm font-black">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </div>

                    <div>

                      <h3 className="font-bold text-[#071b38]">
                        {item.title}
                      </h3>

                      <div className="mt-1 text-xs font-bold text-blue-600">
                        {item.date}
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

          {/* Notice */}
          <div className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">

            <Sparkles
              size={18}
              className="mt-0.5 shrink-0 text-amber-600"
            />

            <p className="text-xs leading-5 text-amber-800">
              Dates shown here are intentionally general. Always verify
              the latest academic schedule through official KIST
              announcements before making plans.
            </p>

          </div>

          <div className="mt-6 flex justify-end">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-[#071b38] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-900"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}