import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Diamond,
  GraduationCap,
  Play,
  Rocket,
  Target,
  Users,
} from "lucide-react";

const values = [
  "Quality Education",
  "Integrity",
  "Innovation",
  "Inclusiveness",
  "Student Success",
  "Social Responsibility",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#071b38]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[570px] overflow-hidden bg-[#03152f] pt-[76px]">
        <img
          src="/images/kist-campus-hero.png"
          alt="KIST College & SS campus"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Main overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03152f]/95 via-[#03152f]/75 to-[#03152f]/20" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03152f]/80 via-transparent to-transparent" />

        {/* Glow */}
        <div className="pointer-events-none absolute right-[-100px] top-20 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[494px] max-w-[1500px] items-center px-5 sm:px-6 lg:px-12">
          <div className="max-w-[720px]">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-300">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-blue-300">/</span>

              <span className="text-white">About Us</span>
            </div>

            {/* Label */}
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
              <span className="h-[3px] w-8 rounded-full bg-cyan-400" />

              About KIST
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[70px]">
              A Legacy of
              <span className="block">
                Excellence{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Since 1995
                </span>
              </span>
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />

            <p className="mt-6 max-w-[650px] text-base font-medium leading-7 text-slate-200 lg:text-lg">
              KIST College &amp; SS is a premier educational institution in
              Kathmandu, committed to providing quality education, fostering
              innovation, and shaping future leaders.
            </p>

            {/* Hero buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/academics"
                className="group inline-flex h-13 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
              >
                Explore Academics

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/campus-life"
                className="group inline-flex h-13 items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Explore Campus Life

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/60 transition group-hover:bg-white group-hover:text-[#092a59]">
                  <Play size={10} fill="currentColor" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY / VISION / MISSION / VALUES
      ====================================================== */}

      <section className="bg-[#031b38] py-12 lg:py-16">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
            {/* STORY */}
            <div className="group rounded-2xl border border-blue-400/20 bg-[#061f40] p-7 shadow-lg transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-8 rounded-full bg-blue-400" />

                <h2 className="text-2xl font-bold text-white">
                  Our Story
                </h2>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                Established in 1995, KIST College &amp; SS has been at the
                forefront of higher education in Nepal. Over the years,
                we have built a strong academic reputation by combining
                quality education with practical learning, industry
                relevance, and a student-centered approach.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Our commitment is to nurture talent, build character, and
                empower students to become responsible global citizens
                who contribute meaningfully to society.
              </p>

              <Link
                href="/academics"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-400"
              >
                Explore Our Journey

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* VISION */}
            <InfoCard
              icon={<Target size={25} />}
              title="Our Vision"
              text="To be a leading academic institution recognized for excellence, innovation, and social impact."
            />

            {/* MISSION */}
            <InfoCard
              icon={<Rocket size={25} />}
              title="Our Mission"
              text="To provide quality education, promote research and innovation, and develop competent and ethical professionals for a better tomorrow."
            />

            {/* VALUES */}
            <div className="group rounded-2xl border border-blue-400/20 bg-[#061f40] p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 transition group-hover:bg-blue-500/25">
                <Diamond size={24} />
              </div>

              <h3 className="text-xl font-bold text-white">
                Our Values
              </h3>

              <div className="mt-5 space-y-2.5">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-blue-400"
                    />

                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              PHILOSOPHY
          ================================================== */}

          <div className="mt-5 overflow-hidden rounded-2xl border border-blue-400/20 bg-[#061f40] shadow-xl">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              <div className="relative min-h-[300px] overflow-hidden">
                <img
                  src="/images/students.png"
                  alt="KIST students"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#061f40]/10 via-[#061f40]/20 to-[#061f40]/90" />

                <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  Student-Centered Learning
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-[3px] w-8 rounded-full bg-blue-400" />

                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
                    Our Philosophy
                  </span>
                </div>

                <h2 className="text-3xl font-black text-white sm:text-4xl">
                  Education
                  <span className="block text-blue-400">
                    Empowers Lives
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                  At KIST, we believe in creating opportunities, inspiring
                  minds, and building a brighter future for generations to
                  come.
                </p>

                <div className="mt-7">
                  <Link
                    href="/campus-life"
                    className="group inline-flex items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/10 px-5 py-3 text-sm font-bold text-blue-200 transition hover:bg-blue-500 hover:text-white"
                  >
                    Discover Campus Life

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              STATS
          ================================================== */}

          <div className="mt-5 overflow-hidden rounded-2xl border border-blue-400/25 bg-[#061f40] shadow-lg">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <AboutStat
                icon={<GraduationCap size={25} />}
                number="30+"
                title="Years of Excellence"
                subtitle="Since 1995"
              />

              <AboutStat
                icon={<Users size={25} />}
                number="10,000+"
                title="Students & Alumni"
                subtitle="Growing Community"
              />

              <AboutStat
                icon={<BookOpen size={25} />}
                number="50+"
                title="Programs Offered"
                subtitle="+2, Bachelor's & Master's"
              />

              <AboutStat
                icon={<Building2 size={25} />}
                number="Modern Campus"
                title="In the Heart of"
                subtitle="Kamalpokhari, Kathmandu"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ====================================================== */}

      <section className="bg-[#f6f9fd] py-16">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            {/* TEXT */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-8 rounded-full bg-blue-500" />

                <span className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
                  Leadership
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight text-[#092a59]">
                Guided by
                <span className="block text-blue-600">
                  Visionary Leadership
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                Our dedicated leadership team works tirelessly to ensure
                academic excellence, institutional growth, and a supportive
                environment for all students.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/15 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Meet Our Leadership

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* CARDS */}
            <div className="grid gap-5 md:grid-cols-3">
              <LeadershipCard
                image="/images/management.png"
                name="Chairperson"
                role="KIST College & SS"
                href="/contact"
              />

              <LeadershipCard
                image="/images/orientation.png"
                name="Principal"
                role="KIST College & SS"
                href="/contact"
              />

              <LeadershipCard
                image="/images/classroom.png"
                name="Campus Culture"
                role="A glimpse into life at KIST"
                href="/campus-life"
                play
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#082f66] via-[#1456a0] to-[#5531c7] px-6 py-12 text-center shadow-2xl sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
            <Building2 size={27} />
          </div>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
            Explore KIST College &amp; SS
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-50/90 sm:text-base">
            Discover academic programmes, admissions, campus life,
            facilities and the KIST community.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
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
    </main>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-blue-400/20 bg-[#061f40] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-2xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 transition duration-300 group-hover:bg-blue-500/25 group-hover:text-cyan-300">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {text}
      </p>

      <div className="mt-5 flex items-center gap-2 text-xs font-bold text-blue-300">
        Learn more
        <ArrowRight size={14} />
      </div>
    </div>
  );
}

/* =========================================================
   STATS
========================================================= */

function AboutStat({
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
    <div className="group flex min-h-[120px] items-center gap-4 border-b border-white/10 px-6 py-6 transition duration-300 hover:bg-blue-500/[0.06] lg:border-b-0 lg:border-r">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 transition group-hover:scale-105 group-hover:bg-blue-500/25">
        {icon}
      </div>

      <div>
        <div className="text-xl font-black text-white">
          {number}
        </div>

        <div className="mt-0.5 text-sm font-bold text-white">
          {title}
        </div>

        <div className="mt-1 text-xs font-medium text-slate-400">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   LEADERSHIP CARD
========================================================= */

function LeadershipCard({
  image,
  name,
  role,
  href,
  play = false,
}: {
  image: string;
  name: string;
  role: string;
  href: string;
  play?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#061f40] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-[230px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061f40]/90 via-transparent to-transparent" />

        {play && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-blue-500/85 text-white shadow-xl transition group-hover:scale-110">
              <Play size={19} fill="currentColor" />
            </div>
          </div>
        )}

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur transition group-hover:bg-blue-500">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white">
          {name}
        </h3>

        <p className="mt-1 text-xs font-medium text-blue-200">
          {role}
        </p>
      </div>
    </Link>
  );
}