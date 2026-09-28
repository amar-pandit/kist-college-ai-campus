"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Microscope,
  Network,
  Search,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

/* ============================================================
   RESEARCH AREAS
============================================================ */

const researchAreas = [
  {
    id: "science-technology",
    title: "Science & Technology",
    shortTitle: "Science",
    description:
      "Explore scientific learning, laboratory work, technology and practical innovation through hands-on academic activities.",
    image: "/images/science.png",
    icon: FlaskConical,
    accent: "blue",
    points: [
      "Scientific learning",
      "Laboratory activities",
      "Technology exploration",
      "Practical innovation",
    ],
  },
  {
    id: "information-technology",
    title: "Information Technology",
    shortTitle: "IT",
    description:
      "Encouraging students to explore software, computing, digital technologies and emerging areas of information technology.",
    image: "/images/it.png",
    icon: Network,
    accent: "violet",
    points: [
      "Software exploration",
      "Computing concepts",
      "Digital technologies",
      "Emerging IT areas",
    ],
  },
  {
    id: "applied-research",
    title: "Applied Research",
    shortTitle: "Applied",
    description:
      "Connecting classroom knowledge with practical problems, projects and real-world applications.",
    image: "/images/clalaboratory.png",
    icon: Microscope,
    accent: "cyan",
    points: [
      "Practical problems",
      "Academic projects",
      "Real-world applications",
      "Hands-on exploration",
    ],
  },
  {
    id: "academic-innovation",
    title: "Academic Innovation",
    shortTitle: "Innovation",
    description:
      "Supporting creative ideas, collaborative learning and new approaches to education and problem solving.",
    image: "/images/classroom.png",
    icon: Lightbulb,
    accent: "fuchsia",
    points: [
      "Creative ideas",
      "Collaborative learning",
      "New approaches",
      "Problem solving",
    ],
  },
];

/* ============================================================
   RESEARCH STEPS
============================================================ */

const researchSteps = [
  {
    number: "01",
    title: "Identify",
    description:
      "Students identify meaningful academic questions and real-world problems.",
    icon: Search,
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Research ideas are explored through study, discussion, experimentation and collaboration.",
    icon: Microscope,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Students transform ideas into projects, prototypes, reports and practical solutions.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Share",
    description:
      "Research outcomes can be presented, discussed and shared with the wider academic community.",
    icon: Users,
  },
];

/* ============================================================
   MAIN PAGE
============================================================ */

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedArea, setSelectedArea] =
    useState<
      (typeof researchAreas)[number] | null
    >(null);

  const [activeStep, setActiveStep] =
    useState(0);

  const [showAllAreas, setShowAllAreas] =
    useState(true);

  /* ==========================================================
     FILTER
  ========================================================== */

  const filteredAreas = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    if (!search) {
      return researchAreas;
    }

    return researchAreas.filter(
      (area) =>
        area.title
          .toLowerCase()
          .includes(search) ||
        area.description
          .toLowerCase()
          .includes(search) ||
        area.points.some((point) =>
          point
            .toLowerCase()
            .includes(search),
        ),
    );
  }, [searchTerm]);

  /* ==========================================================
     ESC CLOSE
  ========================================================== */

  useEffect(() => {
    function handleEscape(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        setSelectedArea(null);
      }
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
     BODY LOCK
  ========================================================== */

  useEffect(() => {
    if (selectedArea) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArea]);

  /* ==========================================================
     SCROLL TO AREAS
  ========================================================== */

  function scrollToAreas() {
    document
      .getElementById("research-areas")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  /* ==========================================================
     RESET SEARCH
  ========================================================== */

  function resetSearch() {
    setSearchTerm("");
    setShowAllAreas(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7faff] text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#041a39] pt-[76px]">
        <img
          src="/images/kist-campus-3.png"
          alt="KIST campus"
          className="absolute inset-0 h-[610px] w-full object-cover object-center opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03152f]/95 via-[#03152f]/80 to-[#03152f]/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#041a39] via-transparent to-transparent" />

        {/* RGB glows */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[130px]" />

        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-500/15 blur-[130px]" />

        <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex min-h-[540px] items-center">
            <div className="max-w-[820px] py-20">
              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

                <span className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
                  Research & Innovation
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Discover.
                <span className="block bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Create. Innovate.
                </span>
              </h1>

              <p className="mt-7 max-w-[690px] text-base font-medium leading-8 text-slate-200 sm:text-lg">
                Building a culture of curiosity, experimentation and
                innovation where students can turn ideas into meaningful
                academic and real-world projects.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToAreas}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Explore Research

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  Connect With Us

                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Hero indicators */}
              <div className="mt-9 flex flex-wrap gap-3">
                <HeroPill
                  icon={
                    <FlaskConical
                      size={14}
                    />
                  }
                  text="Science"
                />

                <HeroPill
                  icon={
                    <Network size={14} />
                  }
                  text="Technology"
                />

                <HeroPill
                  icon={
                    <Lightbulb
                      size={14}
                    />
                  }
                  text="Innovation"
                />

                <HeroPill
                  icon={
                    <Users size={14} />
                  }
                  text="Collaboration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1250px] gap-14 px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

              <span className="text-sm font-black uppercase tracking-[0.15em] text-blue-600">
                A Culture of Curiosity
              </span>
            </div>

            <h2 className="max-w-[700px] text-4xl font-black leading-tight tracking-tight text-[#071d3c] sm:text-5xl">
              Learning goes beyond the classroom.
            </h2>

            <p className="mt-6 max-w-[680px] text-[16px] leading-8 text-slate-600">
              Research encourages students to ask questions, investigate
              possibilities and apply what they learn to practical situations.
              Through projects, laboratory activities, technology and
              collaboration, students can develop the skills needed to solve
              problems and create new ideas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <IntroCard
                icon={<Search size={21} />}
                title="Explore Questions"
                text="Develop curiosity and investigate meaningful questions."
              />

              <IntroCard
                icon={<Lightbulb size={21} />}
                title="Build Ideas"
                text="Turn ideas into projects, experiments and practical work."
              />
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] shadow-2xl">
              <img
                src="/images/clalaboratory.png"
                alt="KIST laboratory"
                className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600">
                  <Microscope size={23} />
                </div>

                <div>
                  <div className="font-black text-[#071d3c]">
                    Practical Learning
                  </div>

                  <div className="text-xs font-medium text-slate-500">
                    Learn through exploration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESEARCH AREAS
      ====================================================== */}

      <section
        id="research-areas"
        className="scroll-mt-24 bg-[#f4f8fd] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1250px] px-6">
          {/* Heading */}
          <div className="mx-auto max-w-[760px] text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

              <span className="text-sm font-black uppercase tracking-[0.15em] text-blue-600">
                Research Areas
              </span>

              <span className="h-[3px] w-9 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600" />
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#071d3c] sm:text-5xl">
              Areas of Exploration
            </h2>

            <p className="mt-5 text-[16px] leading-7 text-slate-600">
              Explore academic areas where students can develop knowledge,
              practical skills and innovative thinking.
            </p>
          </div>

          {/* Search bar */}
          <div className="mx-auto mt-10 max-w-[650px]">
            <div className="flex h-13 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">
              <Search
                size={19}
                className="shrink-0 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(
                    event.target.value,
                  );
                  setShowAllAreas(false);
                }}
                placeholder="Search research areas..."
                className="w-full bg-transparent py-3 text-sm font-medium text-[#071d3c] outline-none placeholder:text-slate-400"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={resetSearch}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Result */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold text-slate-500">
            <CheckCircle2
              size={15}
              className="text-emerald-500"
            />

            {filteredAreas.length} research{" "}
            {filteredAreas.length === 1
              ? "area"
              : "areas"}{" "}
            available
          </div>

          {/* Cards */}
          {filteredAreas.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {filteredAreas.map(
                (area) => {
                  const Icon = area.icon;

                  return (
                    <ResearchAreaCard
                      key={area.id}
                      area={area}
                      Icon={Icon}
                      onOpen={() =>
                        setSelectedArea(
                          area,
                        )
                      }
                    />
                  );
                },
              )}
            </div>
          ) : (
            <div className="mt-12 rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Search size={27} />
              </div>

              <h3 className="mt-5 text-xl font-black text-[#071d3c]">
                No research area found
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Try another keyword.
              </p>

              <button
                type="button"
                onClick={resetSearch}
                className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Show All Areas
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          RESEARCH PROCESS
      ====================================================== */}

      <section className="bg-[#071d3c] py-20 lg:py-24">
        <div className="mx-auto max-w-[1250px] px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Left */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

                <span className="text-sm font-black uppercase tracking-[0.15em] text-blue-300">
                  From Idea to Impact
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                A simple path from curiosity to creation.
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-300">
                Research-based learning gives students opportunities to
                investigate, create, test and communicate their ideas.
              </p>

              <Link
                href="/academics"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Academics

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Right interactive steps */}
            <div className="grid gap-4 sm:grid-cols-2">
              {researchSteps.map(
                (step, index) => {
                  const Icon = step.icon;

                  const active =
                    activeStep === index;

                  return (
                    <button
                      type="button"
                      key={step.number}
                      onClick={() =>
                        setActiveStep(
                          index,
                        )
                      }
                      className={`group rounded-2xl border p-6 text-left backdrop-blur-sm transition duration-300 ${
                        active
                          ? "border-blue-400/50 bg-gradient-to-br from-blue-500/15 to-violet-500/10 shadow-xl shadow-blue-950/20"
                          : "border-white/10 bg-white/[0.06] hover:border-white/20 hover:bg-white/[0.09]"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                            active
                              ? "bg-gradient-to-br from-blue-500 to-violet-500 text-white"
                              : "bg-white/10 text-blue-300"
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        <span
                          className={`text-sm font-black ${
                            active
                              ? "text-blue-300"
                              : "text-slate-500"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-black text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {step.description}
                      </p>

                      <div
                        className={`mt-5 h-1 rounded-full transition-all ${
                          active
                            ? "w-full bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400"
                            : "w-8 bg-white/10 group-hover:w-14"
                        }`}
                      />
                    </button>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACTIVE STEP DETAIL
      ====================================================== */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[950px] px-6">
          <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                {(() => {
                  const Icon =
                    researchSteps[
                      activeStep
                    ].icon;

                  return <Icon size={27} />;
                })()}
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                  Current Research Step
                </p>

                <h3 className="mt-1 text-2xl font-black text-[#071d3c]">
                  {researchSteps[
                    activeStep
                  ].number}{" "}
                  —{" "}
                  {researchSteps[
                    activeStep
                  ].title}
                </h3>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
              {
                researchSteps[
                  activeStep
                ].description
              }
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Curiosity",
                "Exploration",
                "Practical Work",
                "Communication",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDENT RESEARCH
      ====================================================== */}

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1250px] px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
              <img
                src="/images/students.png"
                alt="KIST students"
                className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071d3c]/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <div className="text-sm font-black text-[#071d3c]">
                      Student Engagement
                    </div>

                    <div className="text-xs font-medium text-slate-500">
                      Learning through exploration
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

                <span className="text-sm font-black uppercase tracking-[0.15em] text-blue-600">
                  Student Engagement
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-[#071d3c] sm:text-5xl">
                Students at the centre of innovation.
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                Research-oriented activities can help students strengthen
                critical thinking, teamwork, communication, creativity and
                problem-solving skills.
              </p>

              <div className="mt-8 space-y-4">
                <StudentPoint
                  icon={
                    <GraduationCap
                      size={19}
                    />
                  }
                  title="Academic Development"
                  text="Apply classroom concepts through practical exploration."
                />

                <StudentPoint
                  icon={<Users size={19} />}
                  title="Collaboration"
                  text="Work together, exchange ideas and learn from different perspectives."
                />

                <StudentPoint
                  icon={
                    <BookOpen size={19} />
                  }
                  title="Knowledge Sharing"
                  text="Present findings and communicate ideas clearly."
                />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/academics"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Explore Academics

                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-[#071d3c] transition hover:border-blue-300 hover:text-blue-600"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#f4f8fd] px-6 py-16 lg:py-20">
        <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[30px] bg-gradient-to-r from-[#061b3d] via-[#092d61] to-[#351d78] px-8 py-12 text-center shadow-2xl sm:px-14">
          <div className="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
              <Lightbulb size={28} />
            </div>

            <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
              Have an idea worth exploring?
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-sm leading-7 text-slate-300 sm:text-base">
              Discover academic opportunities, connect with the KIST community
              and take the next step in your learning journey.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 px-6 py-3.5 text-sm font-black text-white shadow-xl transition hover:-translate-y-1"
              >
                Contact KIST

                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESEARCH AREA MODAL
      ====================================================== */}

      {selectedArea && (
        <ResearchAreaModal
          area={selectedArea}
          onClose={() =>
            setSelectedArea(null)
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
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
      <span className="text-blue-300">
        {icon}
      </span>

      {text}
    </div>
  );
}

/* ============================================================
   INTRO CARD
============================================================ */

function IntroCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-blue-100 bg-blue-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-sm">
        {icon}
      </div>

      <h3 className="mt-4 font-black text-[#071d3c]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   RESEARCH AREA CARD
============================================================ */

function ResearchAreaCard({
  area,
  Icon,
  onOpen,
}: {
  area: (typeof researchAreas)[number];
  Icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
  onOpen: () => void;
}) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl">
      {/* Image */}
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
      >
        <div className="relative h-[260px] overflow-hidden">
          <img
            src={area.image}
            alt={area.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#041a39]/90 via-transparent to-transparent" />

          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white shadow-lg backdrop-blur-md">
            <Icon size={22} />
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <div className="mb-2 text-[11px] font-black uppercase tracking-[0.14em] text-blue-200">
              Research Area
            </div>

            <h3 className="text-2xl font-black text-white">
              {area.title}
            </h3>
          </div>
        </div>
      </button>

      {/* Content */}
      <div className="p-7">
        <p className="text-[15px] leading-7 text-slate-600">
          {area.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {area.points.slice(0, 3).map(
            (point) => (
              <span
                key={point}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-600"
              >
                {point}
              </span>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="group/btn mt-6 flex items-center gap-2 text-sm font-black text-blue-600"
        >
          Explore Area

          <ArrowRight
            size={17}
            className="transition group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
}

/* ============================================================
   STUDENT POINT
============================================================ */

function StudentPoint({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-blue-100 hover:bg-white hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600">
        {icon}
      </div>

      <div>
        <h3 className="font-black text-[#071d3c]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   RESEARCH AREA MODAL
============================================================ */

function ResearchAreaModal({
  area,
  onClose,
}: {
  area: (typeof researchAreas)[number];
  onClose: () => void;
}) {
  const Icon = area.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[30px] bg-white shadow-2xl">
        {/* Header */}
        <div className="relative h-[250px] overflow-hidden">
          <img
            src={area.image}
            alt={area.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#041a39]/95 via-[#041a39]/20 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur transition hover:bg-black/40"
            aria-label="Close"
          >
            <X size={19} />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
                <Icon size={22} />
              </div>

              <div>
                <div className="text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                  Research Area
                </div>

                <h2 className="mt-1 text-3xl font-black text-white">
                  {area.title}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-600">
            {area.description}
          </p>

          <div className="mt-7">
            <h3 className="text-lg font-black text-[#071d3c]">
              Exploration focus
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {area.points.map(
                (point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Check size={15} />
                    </div>

                    <span className="text-sm font-bold text-[#071d3c]">
                      {point}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
            <div className="flex gap-3">
              <Sparkles
                size={19}
                className="mt-0.5 shrink-0 text-blue-600"
              />

              <p className="text-sm leading-6 text-blue-950/70">
                This section describes the research and innovation areas
                represented on this prototype page. For current official
                research opportunities or specific projects, contact KIST.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academics"
              onClick={onClose}
              className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Explore Academics

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-[#071d3c] transition hover:border-blue-300 hover:text-blue-600"
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