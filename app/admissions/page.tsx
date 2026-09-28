"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileCheck2,
  FileText,
  GraduationCap,
  HelpCircle,
  Info,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserRound,
  Users,
  X,
} from "lucide-react";

const admissionSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Online Application",
    description:
      "Fill out the application form with the required details.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Document Submission",
    description:
      "Submit the necessary academic and supporting documents.",
  },
  {
    number: "03",
    icon: Users,
    title: "Entrance / Interview",
    description:
      "Appear for an entrance test or interview where applicable.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Admission Decision",
    description:
      "Receive the admission decision after the evaluation process.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Enrollment",
    description:
      "Complete the required enrollment and fee process.",
  },
];

const programs = [
  "BBA",
  "BIT",
  "BBS",
  "BSc Microbiology",
  "MBS",
  "MIT",
  "+2 Science",
  "+2 Management",
];

const documents = [
  "Academic transcripts and certificates",
  "Citizenship or passport copy where applicable",
  "Recent passport-size photographs",
  "Completed application information",
  "Other documents required for the selected program",
];

const faqs = [
  {
    question: "How do I start my admission application?",
    answer:
      "Start by selecting your intended program and preparing the required academic and supporting documents. You can also use the application form on this page as a prototype application flow.",
  },
  {
    question: "Are the requirements the same for every program?",
    answer:
      "Not necessarily. Academic requirements and admission procedures may vary by program. Check the requirements for your selected program and confirm current details with the admission office.",
  },
  {
    question: "Can I ask the AI Assistant about admission?",
    answer:
      "Yes. The KIST AI Assistant is available to help explain available admission information. For information that requires current official confirmation, contact KIST directly.",
  },
  {
    question: "What documents should I prepare?",
    answer:
      "Academic transcripts and certificates, identification documents where applicable, photographs, and other documents required for your selected program may be needed.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Scholarship opportunities may include merit-based, need-based, or program-specific support. Conditions can vary, so current scholarship information should be confirmed with the admission office.",
  },
];

export default function AdmissionsPage() {
  const [showApplication, setShowApplication] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");

  const [applicationError, setApplicationError] = useState("");

  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const [search, setSearch] = useState("");

  const [educationLevel, setEducationLevel] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [eligibilityResult, setEligibilityResult] = useState("");

  const filteredFaqs = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return faqs;

    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(value) ||
        faq.answer.toLowerCase().includes(value),
    );
  }, [search]);

  function openApplication() {
    setShowApplication(true);
    setSubmitted(false);
    setApplicationError("");
  }

  function closeApplication() {
    setShowApplication(false);
    setSubmitted(false);
    setApplicationError("");
  }

  function handleApplicationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim() || !program) {
      setApplicationError("Please complete all required fields.");
      return;
    }

    if (!email.includes("@")) {
      setApplicationError("Please enter a valid email address.");
      return;
    }

    if (phone.trim().length < 7) {
      setApplicationError("Please enter a valid phone number.");
      return;
    }

    setApplicationError("");
    setSubmitted(true);
  }

  function checkEligibility() {
    if (!educationLevel || !selectedProgram) {
      setEligibilityResult("Please select your education level and program.");
      return;
    }

    if (educationLevel === "school") {
      setEligibilityResult(
        "For school-level applicants, the exact eligibility requirements depend on the selected program. Please confirm the current official requirement with KIST.",
      );
      return;
    }

    if (educationLevel === "undergraduate") {
      setEligibilityResult(
        "Your selected category may require previous academic qualifications. Please verify the current program-specific requirement with KIST.",
      );
      return;
    }

    setEligibilityResult(
      "Program-specific eligibility applies. Please confirm the current official requirement with KIST.",
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#071b38]">
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

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#03152f]/80 to-transparent" />

        <div className="relative mx-auto flex min-h-[484px] max-w-[1500px] items-center px-6 lg:px-12">
          <div className="max-w-[700px]">
            <div className="mb-7 flex items-center gap-2 text-sm text-slate-300">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <span>›</span>

              <span className="text-white">Admissions</span>
            </div>

            <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              <span className="h-[2px] w-9 bg-blue-400" />
              Admissions
            </div>

            <h1 className="text-5xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
              Begin Your Future
              <span className="block">
                at <span className="text-blue-400">KIST</span>
              </span>
            </h1>

            <p className="mt-6 max-w-[620px] text-base leading-7 text-slate-200 lg:text-lg">
              Explore the admission process, programs, eligibility,
              scholarships, documents and support available to prospective
              students.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openApplication}
                className="flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Apply Online
                <ArrowRight size={18} />
              </button>

              <Link
                href="/ai-assistant"
                className="flex items-center gap-3 rounded-xl border border-blue-300/70 bg-[#071d3c]/70 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Ask AI Assistant
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <ShieldCheck size={14} />
                Student-focused
              </span>

              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Sparkles size={14} />
                AI-assisted guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK STATS
      ====================================================== */}
      <section className="relative z-10 mx-auto -mt-2 max-w-[1400px] px-5">
        <div className="grid overflow-hidden rounded-[24px] border border-blue-400/20 bg-[#061d3d] shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
          <AdmissionStat
            icon={<Users size={25} />}
            number="10,000+"
            title="Students & Alumni"
          />

          <AdmissionStat
            icon={<GraduationCap size={25} />}
            number="50+"
            title="Academic Programs"
          />

          <AdmissionStat
            icon={<ShieldCheck size={25} />}
            number="Student"
            title="Support"
          />

          <AdmissionStat
            icon={<Trophy size={25} />}
            number="Multiple"
            title="Scholarship Opportunities"
          />
        </div>
      </section>

      {/* =====================================================
          ADMISSION PROCESS
      ====================================================== */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Admission Process"
            title="A Simple Path to Join KIST"
            description="Understand the typical admission journey from application to enrollment."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              const active = activeStep === index;

              return (
                <button
                  type="button"
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className="group relative text-left"
                >
                  <div
                    className={`h-full rounded-2xl border p-5 transition ${
                      active
                        ? "border-blue-500 bg-blue-50 shadow-xl shadow-blue-500/10"
                        : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          active
                            ? "bg-blue-500 text-white"
                            : "bg-blue-500/10 text-blue-600"
                        }`}
                      >
                        <Icon size={23} />
                      </div>

                      <span className="text-3xl font-bold text-slate-200">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>

                    <div
                      className={`mt-5 flex items-center gap-2 text-xs font-bold ${
                        active ? "text-blue-600" : "text-slate-400"
                      }`}
                    >
                      {active ? (
                        <>
                          <Check size={15} />
                          Selected
                        </>
                      ) : (
                        "View step"
                      )}
                    </div>
                  </div>

                  {index !== admissionSteps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <ArrowRight size={22} className="text-blue-400" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <div className="flex gap-3">
              <Info className="mt-0.5 shrink-0 text-blue-600" size={19} />

              <div>
                <p className="font-semibold text-blue-900">
                  Step {admissionSteps[activeStep].number}:{" "}
                  {admissionSteps[activeStep].title}
                </p>

                <p className="mt-1 text-sm leading-6 text-blue-800/80">
                  {admissionSteps[activeStep].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ELIGIBILITY CHECKER
      ====================================================== */}
      <section className="bg-[#f5f8fc] py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <SectionHeading
                eyebrow="Eligibility"
                title="Check Your Admission Path"
                description="Use this interactive guide to understand what you should verify before applying."
              />

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                      Education level
                    </span>

                    <select
                      value={educationLevel}
                      onChange={(event) =>
                        setEducationLevel(event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="">Select level</option>
                      <option value="school">School / +2</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="postgraduate">Postgraduate</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                      Interested program
                    </span>

                    <select
                      value={selectedProgram}
                      onChange={(event) =>
                        setSelectedProgram(event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="">Select program</option>

                      {programs.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <button
                  type="button"
                  onClick={checkEligibility}
                  className="mt-6 flex items-center gap-2 rounded-xl bg-[#061d3d] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Check Eligibility
                  <ArrowRight size={17} />
                </button>

                {eligibilityResult && (
                  <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                    <div className="flex gap-3">
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />

                      <p className="text-sm leading-6 text-blue-900">
                        {eligibilityResult}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#061d3d] p-7 text-white shadow-xl lg:p-9">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <GraduationCap size={25} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Program-specific requirements
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Eligibility can vary depending on the program and applicant
                  category. Always confirm the latest official requirements
                  before submitting an application.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Check your academic qualification",
                    "Select the correct program",
                    "Prepare supporting documents",
                    "Confirm current admission instructions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-blue-300"
                      />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/ai-assistant"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-white"
                >
                  Ask AI Assistant
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMS
      ====================================================== */}
      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Programs"
              title="Choose Your Academic Direction"
              description="Explore the program categories shown in this admissions prototype."
            />

            <Link
              href="/programs"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              View all programs
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setProgram(item);
                  openApplication();
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                    <GraduationCap size={21} />
                  </div>

                  <span className="text-xs font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071b38]">
                  {item}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Explore this academic pathway and start your application.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Apply
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENTS + SCHOLARSHIPS
      ====================================================== */}
      <section className="bg-[#f5f8fc] py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <InfoPanel
              icon={<GraduationCap size={25} />}
              title="Eligibility Criteria"
              items={[
                "Completion of the required school-level qualification.",
                "Minimum academic requirements may vary by program.",
                "Some programs may require an entrance test or interview.",
                "Applicants should meet the requirements of their selected program.",
              ]}
            />

            <InfoPanel
              icon={<FileText size={25} />}
              title="Required Documents"
              items={documents}
            />

            <InfoPanel
              icon={<Trophy size={25} />}
              title="Scholarships & Financial Aid"
              items={[
                "Merit-based scholarship opportunities.",
                "Need-based support may be available.",
                "Program-specific scholarship opportunities.",
                "Scholarship conditions may vary.",
                "Contact the admission office for current details.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENT CHECKLIST
      ====================================================== */}
      <section className="py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
              <FileCheck2 size={24} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Before You Apply
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#071b38] lg:text-4xl">
              Document Checklist
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Prepare the documents relevant to your selected program and
              confirm the current official requirements before submission.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {documents.map((document, index) => (
              <div
                key={document}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-600">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-[#071b38]">
                    {document}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Confirm whether this document applies to your selected
                    program.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPORTANT INFORMATION
      ====================================================== */}
      <section className="bg-[#031b38] py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.65fr]">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-blue-400" />

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-300">
                    Important Information
                  </p>

                  <h2 className="mt-1 text-3xl font-bold text-white">
                    Admission Updates
                  </h2>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-blue-400/20 bg-[#061f40]">
                <AdmissionDate
                  month="01"
                  label="Application Opens"
                  description="Check the latest official admission announcement."
                />

                <AdmissionDate
                  month="02"
                  label="Application Deadline"
                  description="Confirm the current deadline before applying."
                />

                <AdmissionDate
                  month="03"
                  label="Entrance / Interview"
                  description="Applicable to selected programs."
                />

                <AdmissionDate
                  month="04"
                  label="Admission Results"
                  description="Follow official KIST communication channels."
                />

                <AdmissionDate
                  month="05"
                  label="Enrollment & Fee Payment"
                  description="Complete enrollment according to official instructions."
                  last
                />
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-blue-400/20 bg-blue-500/5 p-4">
                <Info size={18} className="mt-0.5 shrink-0 text-blue-300" />

                <p className="text-xs leading-5 text-slate-400">
                  The dates above are presented as an admission-flow guide,
                  not as specific official calendar dates. Confirm current
                  dates directly with KIST.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-blue-400/30 bg-[#09254b]">
              <div className="relative h-[230px]">
                <img
                  src="/images/admission.png"
                  alt="KIST admission"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#09254b] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                  <HelpCircle size={24} />
                </div>

                <h2 className="text-2xl font-bold text-white">
                  Need Help with Admission?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Get guidance about programs, eligibility, applications,
                  scholarships and the admission process.
                </p>

                <Link
                  href="/ai-assistant"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  Ask AI Assistant
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-blue-300/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Admission Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
              <HelpCircle size={24} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              FAQ
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#071b38] lg:text-4xl">
              Admission Questions
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Search the common admission questions below.
            </p>
          </div>

          <div className="relative mt-8">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search admission questions..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="mt-5 space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 p-8 text-center">
                <p className="font-semibold">No matching question found.</p>
                <p className="mt-2 text-sm text-slate-500">
                  Try another search term or ask the AI Assistant.
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const originalIndex = faqs.findIndex(
                  (item) => item.question === faq.question,
                );

                const isOpen = activeFaq === originalIndex;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : originalIndex)
                      }
                      className="flex w-full items-center justify-between gap-5 p-5 text-left"
                    >
                      <span className="font-semibold text-[#071b38]">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={19}
                        className={`shrink-0 text-blue-600 transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                        <p className="text-sm leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-7 rounded-2xl bg-blue-50 p-5 text-center">
            <p className="text-sm text-blue-900">
              Still have a question?
            </p>

            <Link
              href="/ai-assistant"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              Ask KIST AI Assistant
              <MessageCircle size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#061b38] py-16">
        <img
          src="/images/students.png"
          alt="KIST students"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[#03152f]/85" />

        <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-10">
          <div>
            <div className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-300">
              <span className="h-[2px] w-7 bg-blue-400" />
              Join KIST
            </div>

            <h2 className="text-3xl font-bold text-white lg:text-5xl">
              Your Future
              <span className="text-blue-400"> Starts Here</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Explore your academic opportunities and take the next step toward
              your future at KIST College & SS.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openApplication}
              className="flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Apply Now
              <ArrowRight size={17} />
            </button>

            <Link
              href="/ai-assistant"
              className="flex items-center gap-2 rounded-xl border border-blue-300/60 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ask AI Assistant
              <MessageCircle size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATION MODAL
      ====================================================== */}
      {showApplication && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b18]/75 p-4 backdrop-blur-sm">
          <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeApplication}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              aria-label="Close application form"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div className="bg-[#061d3d] p-7 text-white sm:p-9">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Send size={23} />
                  </div>

                  <h2 className="mt-5 text-3xl font-bold">
                    Start Your Application
                  </h2>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
                    Enter your basic details to begin the application flow.
                    This prototype does not submit data to KIST yet.
                  </p>
                </div>

                <form
                  onSubmit={handleApplicationSubmit}
                  className="space-y-5 p-7 sm:p-9"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <UserRound size={15} />
                        Full Name
                      </span>

                      <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Email
                      </span>

                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number
                    </span>

                    <input
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                      Interested Program
                    </span>

                    <select
                      value={program}
                      onChange={(event) => setProgram(event.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="">Select a program</option>

                      {programs.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  {applicationError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      {applicationError}
                    </div>
                  )}

                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-xs leading-5 text-slate-500">
                      This is a frontend prototype application flow. No
                      application has been officially submitted to KIST.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    Continue Application
                    <ArrowRight size={17} />
                  </button>
                </form>
              </>
            ) : (
              <div className="p-8 text-center sm:p-12">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={42} />
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                  Application Started
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#071b38]">
                  You're Ready to Continue
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600">
                  Your basic application details have been validated in this
                  prototype. The next step would be connecting this form to a
                  real admission backend.
                </p>

                <div className="mt-7 rounded-2xl bg-slate-50 p-5 text-left">
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-3">
                    <span className="text-sm text-slate-500">Applicant</span>
                    <span className="text-sm font-semibold">{name}</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-slate-200 py-3">
                    <span className="text-sm text-slate-500">Program</span>
                    <span className="text-sm font-semibold">{program}</span>
                  </div>

                  <div className="flex justify-between gap-4 pt-3">
                    <span className="text-sm text-slate-500">Email</span>
                    <span className="max-w-[220px] truncate text-sm font-semibold">
                      {email}
                    </span>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/ai-assistant"
                    onClick={closeApplication}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
                  >
                    Ask AI Assistant
                    <MessageCircle size={17} />
                  </Link>

                  <button
                    type="button"
                    onClick={closeApplication}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

/* =========================================================
   STAT
========================================================= */

function AdmissionStat({
  icon,
  number,
  title,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-white/10 px-6 py-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
        {icon}
      </div>

      <div>
        <div className="text-lg font-bold text-white">{number}</div>

        <div className="mt-1 text-xs text-slate-300">{title}</div>
      </div>
    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
        <span className="h-[2px] w-7 bg-blue-500" />
        {eyebrow}
      </div>

      <h2 className="mt-2 text-3xl font-bold text-[#071b38] lg:text-4xl">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

/* =========================================================
   INFO PANEL
========================================================= */

function InfoPanel({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
          {icon}
        </div>

        <h2 className="text-xl font-bold text-[#071b38]">{title}</h2>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-blue-500"
            />

            <p className="text-sm leading-6 text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ADMISSION DATE
========================================================= */

function AdmissionDate({
  month,
  label,
  description,
  last,
}: {
  month: string;
  label: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex gap-5 px-6 py-5 ${
        !last ? "border-b border-white/10" : ""
      }`}
    >
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
        <CalendarDays size={17} />

        <span className="mt-1 text-xs font-bold">{month}</span>
      </div>

      <div>
        <h3 className="font-semibold text-white">{label}</h3>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}