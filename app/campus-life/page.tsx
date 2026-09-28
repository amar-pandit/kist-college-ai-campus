import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Dumbbell,
  Heart,
  Music,
  Users,
  Trophy,
  Palette,
  BookOpen,
} from "lucide-react";

const activities = [
  {
    title: "Student Clubs",
    description:
      "Connect with students who share your interests and passions.",
    image: "/images/students.png",
    icon: Users,
  },
  {
    title: "Sports & Fitness",
    description:
      "Stay active through sports, fitness activities, and friendly competition.",
    image: "/images/sports.png",
    icon: Dumbbell,
  },
  {
    title: "Cultural Events",
    description:
      "Celebrate creativity, culture, talent, and student achievements.",
    image: "/images/cultural.png",
    icon: Palette,
  },
  {
    title: "Student Activities",
    description:
      "Participate in events and activities that make campus life memorable.",
    image: "/images/orientation.png",
    icon: Music,
  },
];

const gallery = [
  "/images/kist-campus-1.png",
  "/images/kist-campus-2.png",
  "/images/kist-campus-3.png",
  "/images/students.png",
  "/images/sports.png",
  "/images/cultural.png",
];

export default function CampusLifePage() {
  return (
    <main className="min-h-screen bg-white text-[#071b38]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[510px] overflow-hidden bg-[#03152f] pt-[76px]">
        <img
          src="/images/kist-campus-1.png"
          alt="KIST campus life"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03152f]/95 via-[#03152f]/65 to-[#03152f]/10" />

        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#03152f]/60 to-transparent" />

        <div className="relative mx-auto flex min-h-[434px] max-w-[1500px] items-center px-6 lg:px-12">
          <div className="max-w-[680px]">

            {/* Breadcrumb */}
            <div className="mb-7 flex items-center gap-2 text-sm text-slate-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <span>›</span>

              <span className="text-white">
                Campus Life
              </span>
            </div>

            {/* Label */}
            <div className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-300">
              <span className="h-[2px] w-8 bg-blue-400" />
              Campus Life
            </div>

            <h1 className="text-5xl font-bold leading-[1.04] text-white sm:text-6xl">
              Life Beyond
              <span className="block">
                the <span className="text-blue-400">Classroom</span>
              </span>
            </h1>

            <p className="mt-5 max-w-[610px] text-base leading-7 text-slate-200 lg:text-lg">
              Discover a vibrant campus community where students learn,
              connect, compete, create, and build memories beyond academics.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#activities"
                className="flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Explore Campus Life
                <ArrowRight size={18} />
              </a>

              <a
                href="#gallery"
                className="flex items-center gap-3 rounded-xl border border-blue-300/70 bg-[#071d3c]/60 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <Camera size={18} />
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO STATS
      ====================================================== */}
      <section className="relative z-10 mx-auto -mt-1 max-w-[1400px] px-5">
        <div className="grid overflow-hidden rounded-[24px] border border-blue-400/20 bg-[#061d3d] shadow-xl sm:grid-cols-2 lg:grid-cols-4">

          <CampusStat
            icon={<Users size={25} />}
            number="Active"
            title="Student Community"
          />

          <CampusStat
            icon={<Trophy size={25} />}
            number="Sports"
            title="Activities"
          />

          <CampusStat
            icon={<Music size={25} />}
            number="Cultural"
            title="Events"
          />

          <CampusStat
            icon={<Heart size={25} />}
            number="Student"
            title="Clubs & Activities"
          />

        </div>
      </section>

      {/* =====================================================
          ACTIVITIES
      ====================================================== */}
      <section
        id="activities"
        className="py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="mb-8 max-w-2xl">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
              <span className="h-[2px] w-7 bg-blue-500" />
              Student Experience
            </div>

            <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
              Experience Campus Life
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              At KIST, learning continues beyond the classroom through
              activities that encourage teamwork, creativity, leadership,
              and personal growth.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.title}
                activity={activity}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAMPUS EXPERIENCE
      ====================================================== */}
      <section className="bg-[#f5f8fc] py-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Image */}
            <div className="relative min-h-[430px] overflow-hidden rounded-[24px]">
              <img
                src="/images/kist-campus-2.png"
                alt="KIST campus"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#031b38]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-white/20 bg-black/25 p-5 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">
                    KIST Campus
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    A Place to Learn, Connect & Grow
                  </h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">

              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                <span className="h-[2px] w-7 bg-blue-500" />
                Student Experience
              </div>

              <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
                More Than
                <span className="text-blue-600">
                  {" "}Just a College
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Campus life gives students opportunities to develop
                communication, teamwork, leadership, creativity, and
                confidence while building meaningful friendships.
              </p>

              <div className="mt-7 space-y-4">
                <Benefit
                  icon={<Users size={21} />}
                  title="Build Connections"
                  text="Meet people, work in teams, and become part of a supportive community."
                />

                <Benefit
                  icon={<Trophy size={21} />}
                  title="Discover Your Talent"
                  text="Explore sports, cultural activities, clubs, and other interests."
                />

                <Benefit
                  icon={<BookOpen size={21} />}
                  title="Learn Beyond Class"
                  text="Turn classroom knowledge into practical experiences."
                />
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Discover KIST
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}
      <section
        id="gallery"
        className="bg-[#031b38] py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-300">
                <span className="h-[2px] w-7 bg-blue-400" />
                Gallery
              </div>

              <h2 className="mt-2 text-3xl font-bold text-white lg:text-4xl">
                Life at KIST
              </h2>
            </div>

            <div className="hidden items-center gap-2 text-sm text-slate-400 md:flex">
              <Camera size={17} />
              Campus moments
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((image, index) => (
              <div
                key={image}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                <img
                  src={image}
                  alt={`KIST campus gallery ${index + 1}`}
                  className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                    index === 0
                      ? "h-[420px] md:h-[520px]"
                      : "h-[200px] md:h-[250px]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 opacity-0 transition group-hover:opacity-100">
                  <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    KIST Campus
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#061b38] py-12">
        <img
          src="/images/cultural.png"
          alt="KIST cultural event"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[#03152f]/85" />

        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-300">
              Be Part of the Community
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white lg:text-4xl">
              Your KIST Journey
              <span className="text-blue-400">
                {" "}Starts Here
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Explore academics, activities, events, and opportunities
              available to students at KIST.
            </p>
          </div>

          <Link
            href="/admissions"
            className="flex shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-400"
          >
            Explore Admissions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   STAT
========================================================= */

function CampusStat({
  icon,
  number,
  title,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
        {icon}
      </div>

      <div>
        <div className="text-lg font-bold text-white">
          {number}
        </div>

        <div className="mt-1 text-xs text-slate-300">
          {title}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ACTIVITY CARD
========================================================= */

function ActivityCard({
  activity,
}: {
  activity: {
    title: string;
    description: string;
    image: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const Icon = activity.icon;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative h-[220px] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#031b38]/85 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg">
          <Icon size={21} />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">
          {activity.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {activity.description}
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
        >
          Explore
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

/* =========================================================
   BENEFIT
========================================================= */

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
        {icon}
      </div>

      <div>
        <h3 className="font-bold">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          {text}
        </p>
      </div>
    </div>
  );
}