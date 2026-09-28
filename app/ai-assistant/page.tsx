"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  BadgeDollarSign,
  Bot,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Copy,
  FileText,
  GraduationCap,
  Languages,
  MessageCircle,
  Mic,
  Paperclip,
  PlayCircle,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Wifi,
  X,
} from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

type FeedbackState = "up" | "down" | null;

type MessageFeedback = Record<string, FeedbackState>;

/* ============================================================
   CONSTANTS
============================================================ */

const STORAGE_KEY = "kist-ai-chat-history-v1";

const initialMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hello! 👋\nI'm the KIST AI Assistant.\n\nAsk me about admissions, academic programs, campus facilities, scholarships, campus life, or other KIST-related questions.\n\nHow can I help you today?",
};

const quickQuestions = [
  {
    title: "Admissions",
    question: "How can I apply to KIST College & SS?",
    icon: FileText,
  },
  {
    title: "Programs",
    question:
      "Tell me about academic programs at KIST College & SS.",
    icon: GraduationCap,
  },
  {
    title: "Scholarships",
    question:
      "Tell me about scholarships at KIST College & SS.",
    icon: ShieldCheck,
  },
  {
    title: "Facilities",
    question:
      "What facilities are available at KIST College & SS?",
    icon: Building2,
  },
  {
    title: "Campus Life",
    question:
      "Tell me about campus life at KIST College & SS.",
    icon: Sparkles,
  },
  {
    title: "Contact",
    question:
      "What are the contact details of KIST College & SS?",
    icon: MessageCircle,
  },
];

const supportedTopics = [
  "Admissions",
  "Academic Programs",
  "Scholarships",
  "Campus Facilities",
  "Campus Life",
  "Contact Information",
  "Student Services",
  "General Queries",
];

const languages = ["English", "Nepali", "Hindi"];

const languageInstructions: Record<string, string> = {
  English: "Answer in clear, simple English.",
  Nepali: "Answer in clear and natural Nepali.",
  Hindi: "Answer in clear and natural Hindi.",
};

/* ============================================================
   MAIN PAGE
============================================================ */

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    initialMessage,
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [chatSearch, setChatSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [feedback, setFeedback] =
    useState<MessageFeedback>({});

  const [copiedMessage, setCopiedMessage] =
    useState<string | null>(null);

  const [language, setLanguage] =
    useState("English");

  const [showLanguage, setShowLanguage] =
    useState(false);

  const [showHowItWorks, setShowHowItWorks] =
    useState(false);

  const [selectedFile, setSelectedFile] =
    useState("");

  const [historyLoaded, setHistoryLoaded] =
    useState(false);

  /*
   * Chat scroll refs
   */
  const chatContainerRef =
    useRef<HTMLDivElement | null>(null);

  const bottomRef =
    useRef<HTMLDivElement | null>(null);

  /*
   * File input
   */
  const fileInputRef =
    useRef<HTMLInputElement | null>(null);

  /*
   * Prevent unwanted auto-scroll when user is
   * intentionally reading old messages.
   */
  const userScrolledUpRef =
    useRef(false);

  /*
   * Used to know when a new message was created.
   */
  const previousMessageCountRef =
    useRef(messages.length);

  /* ==========================================================
     LOAD PREVIOUS CHAT
  ========================================================== */

  useEffect(() => {
    try {
      const savedChat =
        window.localStorage.getItem(
          STORAGE_KEY,
        );

      if (savedChat) {
        const parsed = JSON.parse(savedChat);

        if (
          Array.isArray(parsed) &&
          parsed.length > 0
        ) {
          setMessages(parsed);
        }
      }
    } catch (error) {
      console.error(
        "KIST CHAT HISTORY LOAD ERROR:",
        error,
      );
    } finally {
      setHistoryLoaded(true);
    }
  }, []);

  /* ==========================================================
     SAVE CHAT
  ========================================================== */

  useEffect(() => {
    if (!historyLoaded) {
      return;
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(messages),
      );
    } catch (error) {
      console.error(
        "KIST CHAT HISTORY SAVE ERROR:",
        error,
      );
    }
  }, [messages, historyLoaded]);

  /* ==========================================================
     CHECK WHETHER USER IS NEAR BOTTOM
  ========================================================== */

  function isUserNearBottom() {
    const container =
      chatContainerRef.current;

    if (!container) {
      return true;
    }

    const distanceFromBottom =
      container.scrollHeight -
      container.scrollTop -
      container.clientHeight;

    return distanceFromBottom < 180;
  }

  /* ==========================================================
     HANDLE MANUAL SCROLL
  ========================================================== */

  function handleChatScroll() {
    const nearBottom = isUserNearBottom();

    userScrolledUpRef.current =
      !nearBottom;
  }

  /* ==========================================================
     SCROLL TO BOTTOM
  ========================================================== */

  function scrollToBottom(
    behavior: ScrollBehavior = "smooth",
  ) {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({
        behavior,
        block: "end",
      });
    });
  }

  /* ==========================================================
     INITIAL CHAT SCROLL
  ========================================================== */

  useEffect(() => {
    if (!historyLoaded) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToBottom("auto");
    }, 80);

    return () => {
      window.clearTimeout(timer);
    };
  }, [historyLoaded]);

  /* ==========================================================
     AUTO SCROLL WHEN MESSAGE / LOADING CHANGES
  ========================================================== */

  useEffect(() => {
    if (!historyLoaded) {
      return;
    }

    const messageCountChanged =
      previousMessageCountRef.current !==
      messages.length;

    previousMessageCountRef.current =
      messages.length;

    /*
     * If user is reading old messages,
     * don't force them to bottom.
     */
    if (
      userScrolledUpRef.current &&
      !messageCountChanged
    ) {
      return;
    }

    /*
     * New message should always go into view
     * if user wasn't intentionally reading history.
     */
    if (
      userScrolledUpRef.current &&
      messageCountChanged
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToBottom("smooth");
    }, 60);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    messages,
    loading,
    historyLoaded,
  ]);

  /* ==========================================================
     FILTER CHAT SEARCH
  ========================================================== */

  const filteredMessages = useMemo(() => {
    const search =
      chatSearch.trim().toLowerCase();

    if (!search) {
      return messages;
    }

    return messages.filter((message) =>
      message.content
        .toLowerCase()
        .includes(search),
    );
  }, [chatSearch, messages]);

  /* ==========================================================
     SEND MESSAGE
  ========================================================== */

  async function sendMessage(
    customMessage?: string,
  ) {
    const rawText = (
      customMessage ?? input
    ).trim();

    if (!rawText || loading) {
      return;
    }

    /*
     * Whenever user sends a new question,
     * the newest response should be visible.
     */
    userScrolledUpRef.current = false;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: rawText,
    };

    /*
     * Add user message immediately.
     */
    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInput("");
    setLoading(true);
    setChatSearch("");

    /*
     * Give browser time to render user's message.
     */
    window.setTimeout(() => {
      scrollToBottom("smooth");
    }, 30);

    try {
      /*
       * Send conversation history too.
       *
       * Your API can use this later for true
       * multi-turn memory.
       */
      const historyForAPI = [
        ...messages,
        userMessage,
      ]
        .slice(-20)
        .map((message) => ({
          role: message.role,
          content: message.content,
        }));

      const messageForAI =
        language === "English"
          ? rawText
          : `${rawText}

Language preference:
${languageInstructions[language]}`;

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: messageForAI,
            history: historyForAPI,
            language,
          }),
        },
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Unable to connect to the AI assistant.",
        );
      }

      const answer =
        data?.answer ||
        data?.message ||
        data?.response ||
        "I couldn't generate a response right now.";

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: answer,
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);

      /*
       * Answer has arrived.
       * Force newest answer into view.
       */
      userScrolledUpRef.current = false;

      window.setTimeout(() => {
        scrollToBottom("smooth");
      }, 80);
    } catch (error) {
      console.error(
        "KIST CHAT ERROR:",
        error,
      );

      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          "Sorry, I couldn't connect to the KIST AI service right now. Please try again.",
      };

      setMessages((current) => [
        ...current,
        errorMessage,
      ]);

      userScrolledUpRef.current = false;

      window.setTimeout(() => {
        scrollToBottom("smooth");
      }, 80);
    } finally {
      setLoading(false);
    }
  }

  /* ==========================================================
     CLEAR CHAT
  ========================================================== */

  function clearChat() {
    if (loading) {
      return;
    }

    const confirmed =
      window.confirm(
        "Clear the complete KIST AI conversation?",
      );

    if (!confirmed) {
      return;
    }

    const freshChat = [initialMessage];

    setMessages(freshChat);
    setInput("");
    setChatSearch("");
    setFeedback({});
    setCopiedMessage(null);
    setSelectedFile("");

    userScrolledUpRef.current = false;

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(freshChat),
      );
    } catch (error) {
      console.error(
        "CHAT CLEAR ERROR:",
        error,
      );
    }

    window.setTimeout(() => {
      scrollToBottom("auto");
    }, 100);
  }

  /* ==========================================================
     FORM SUBMIT
  ========================================================== */

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    sendMessage();
  }

  /* ==========================================================
     PAGE SCROLL TO CHAT
  ========================================================== */

  function scrollPageToChat() {
    document
      .getElementById("ai-chat")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }

  /* ==========================================================
     FEEDBACK
  ========================================================== */

  function handleFeedback(
    messageId: string,
    value: "up" | "down",
  ) {
    setFeedback((current) => ({
      ...current,
      [messageId]:
        current[messageId] === value
          ? null
          : value,
    }));
  }

  /* ==========================================================
     COPY
  ========================================================== */

  async function copyMessage(
    message: ChatMessage,
  ) {
    try {
      await navigator.clipboard.writeText(
        message.content,
      );

      setCopiedMessage(message.id);

      window.setTimeout(() => {
        setCopiedMessage((current) =>
          current === message.id
            ? null
            : current,
        );
      }, 1500);
    } catch (error) {
      console.error(
        "COPY ERROR:",
        error,
      );
    }
  }

  /* ==========================================================
     FILE
  ========================================================== */

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedFile(file.name);

    setInput((current) =>
      current
        ? `${current} [Attached: ${file.name}]`
        : `Please help me with this file: ${file.name}`,
    );
  }

  function removeSelectedFile() {
    if (!selectedFile) {
      return;
    }

    setInput((current) =>
      current
        .replace(
          ` [Attached: ${selectedFile}]`,
          "",
        )
        .replace(
          `Please help me with this file: ${selectedFile}`,
          "",
        ),
    );

    setSelectedFile("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  /* ==========================================================
     VOICE
  ========================================================== */

  function startVoiceInput() {
    type RecognitionResult = {
      transcript: string;
    };

    type RecognitionEvent = {
      results: ArrayLike<
        ArrayLike<RecognitionResult>
      >;
    };

    type Recognition = {
      lang: string;
      start: () => void;
      onresult:
        | ((event: RecognitionEvent) => void)
        | null;
      onerror: (() => void) | null;
    };

    type RecognitionConstructor =
      new () => Recognition;

    const browserWindow =
      window as typeof window & {
        SpeechRecognition?: RecognitionConstructor;
        webkitSpeechRecognition?: RecognitionConstructor;
      };

    const SpeechRecognition =
      browserWindow.SpeechRecognition ||
      browserWindow.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setInput(
        "Voice input is not supported in this browser.",
      );

      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang =
      language === "Nepali"
        ? "ne-NP"
        : language === "Hindi"
          ? "hi-IN"
          : "en-US";

    recognition.onresult = (
      event,
    ) => {
      const transcript =
        event.results[0]?.[0]
          ?.transcript || "";

      setInput(transcript);
    };

    recognition.onerror = () => {
      console.error(
        "VOICE INPUT ERROR",
      );
    };

    recognition.start();
  }

  /* ==========================================================
     RETURN
  ========================================================== */

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#092a59]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white pt-[76px]">
        {/* Campus image */}
        <div className="absolute inset-0">
          <img
            src="/images/kist-campus-hero.png"
            alt="KIST College & SS campus"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-white/90" />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/75" />

          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
        </div>

        {/* RGB glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-[1450px] px-5 py-12 sm:py-16 lg:px-8 lg:py-20 xl:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(460px,560px)] xl:gap-14">
            {/* =================================================
                LEFT
            ================================================== */}

            <div className="min-w-0">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

                <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 sm:text-sm">
                  AI Campus Assistant
                </span>
              </div>

              <h1 className="max-w-[760px] text-5xl font-black leading-[0.94] tracking-[-0.045em] text-[#092a59] sm:text-6xl lg:text-[64px] xl:text-[72px]">
                Your Smart
                <br />
                Campus
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Companion
                </span>
              </h1>

              <p className="mt-7 max-w-[670px] text-base font-medium leading-7 text-slate-600 sm:text-lg">
                Get simple answers about KIST College & SS through an
                AI-powered campus assistant designed for students,
                applicants, and visitors.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollPageToChat}
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-7 text-base font-bold text-white shadow-xl shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Start Chatting

                  <ArrowRight
                    size={19}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowHowItWorks(true)
                  }
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 text-base font-semibold text-[#12345f] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <PlayCircle
                    size={19}
                    className="text-blue-600 transition group-hover:scale-110"
                  />

                  How It Works
                </button>
              </div>

              {/* Trust */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
                <TrustItem text="KIST-focused" />

                <TrustItem text="Student friendly" />

                <TrustItem text="Multilingual" />
              </div>

              {/* AI Status */}
              <div className="mt-9 max-w-[650px] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5 sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 text-white shadow-lg">
                      <Bot size={28} />

                      <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-black text-[#092a59]">
                          KIST AI Assistant
                        </h3>

                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                          ONLINE
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Ready to answer your KIST-related questions.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={scrollPageToChat}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-50 to-violet-50 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:from-blue-100 hover:to-violet-100"
                  >
                    Open Assistant
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* =================================================
                CHAT
            ================================================== */}

            <div
              id="ai-chat"
              className="w-full min-w-0"
            >
              <ChatPanel
                messages={messages}
                input={input}
                loading={loading}
                showSearch={showSearch}
                chatSearch={chatSearch}
                filteredMessages={
                  filteredMessages
                }
                feedback={feedback}
                copiedMessage={copiedMessage}
                language={language}
                showLanguage={showLanguage}
                selectedFile={selectedFile}
                chatContainerRef={
                  chatContainerRef
                }
                bottomRef={bottomRef}
                fileInputRef={
                  fileInputRef
                }
                setInput={setInput}
                setShowSearch={
                  setShowSearch
                }
                setChatSearch={
                  setChatSearch
                }
                setShowLanguage={
                  setShowLanguage
                }
                sendMessage={sendMessage}
                clearChat={clearChat}
                handleSubmit={
                  handleSubmit
                }
                handleFeedback={
                  handleFeedback
                }
                copyMessage={copyMessage}
                selectLanguage={(value) => {
                  setLanguage(value);
                  setShowLanguage(false);
                }}
                handleFileChange={
                  handleFileChange
                }
                removeSelectedFile={
                  removeSelectedFile
                }
                startVoiceInput={
                  startVoiceInput
                }
                handleChatScroll={
                  handleChatScroll
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE STRIP
      ====================================================== */}

      <section className="relative z-10 bg-white px-5 pb-16 lg:px-8 xl:px-10">
        <div className="mx-auto grid max-w-[1450px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.07)] md:grid-cols-2 lg:grid-cols-5">
          <FeatureItem
            icon={<MessageCircle size={22} />}
            title="Instant Answers"
            subtitle="24/7 Support"
            color="blue"
          />

          <FeatureItem
            icon={<FileText size={22} />}
            title="KIST Information"
            subtitle="Source-aware"
            color="cyan"
          />

          <FeatureItem
            icon={<Sparkles size={22} />}
            title="Multiple Topics"
            subtitle="Admissions to Facilities"
            color="green"
          />

          <FeatureItem
            icon={<Languages size={22} />}
            title="Multilingual"
            subtitle="English | Nepali | Hindi"
            color="violet"
          />

          <FeatureItem
            icon={<Wifi size={22} />}
            title="AI Powered"
            subtitle="Connected Assistant"
            color="orange"
          />
        </div>
      </section>

      {/* =====================================================
          EXPLORE KIST
      ====================================================== */}

      <section className="bg-white px-5 py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-[1250px]">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
              Explore KIST
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#092a59] sm:text-4xl">
              Need information fast?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Use these shortcuts to explore the main areas of the KIST
              website.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <QuickLinkCard
              href="/admissions"
              icon={<GraduationCap size={23} />}
              title="Admissions"
              description="Application, eligibility and admission guidance."
            />

            <QuickLinkCard
              href="/programs"
              icon={<FileText size={23} />}
              title="Programs"
              description="Explore academic programs and pathways."
            />

            <QuickLinkCard
              href="/campus-life"
              icon={<Building2 size={23} />}
              title="Campus Life"
              description="Discover facilities and student life."
            />

            <QuickLinkCard
              href="/contact"
              icon={<MessageCircle size={23} />}
              title="Contact"
              description="Find contact and support information."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY AI
      ====================================================== */}

      <section className="border-y border-slate-100 bg-slate-50/40 px-5 py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-[1250px]">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
              Why use KIST AI?
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#092a59] sm:text-4xl">
              Your Digital Campus Companion
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              A simple AI experience designed to make finding campus
              information easier.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={<GraduationCap size={23} />}
              title="Academic Help"
              description="Ask about programs, admissions and academic areas."
            />

            <InfoCard
              icon={<BadgeDollarSign size={23} />}
              title="Scholarships"
              description="Ask about scholarship information and guidance."
            />

            <InfoCard
              icon={<Building2 size={23} />}
              title="Campus Information"
              description="Learn about facilities, services and campus life."
            />

            <InfoCard
              icon={<CircleHelp size={23} />}
              title="Quick Answers"
              description="Ask naturally and receive simple responses."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          TOPICS
      ====================================================== */}

      <section className="bg-white px-5 py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-[1250px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
                Explore
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#092a59] sm:text-4xl">
                Ask about KIST
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
                Select a topic and send a ready-made question to the AI
                Assistant.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {supportedTopics.map(
                  (topic) => (
                    <button
                      type="button"
                      key={topic}
                      onClick={() =>
                        sendMessage(
                          `Tell me about ${topic} at KIST College & SS.`,
                        )
                      }
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
                    >
                      {topic}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <img
                src="/images/students.png"
                alt="KIST students"
                className="h-[360px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#092a59]/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/95 p-5 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                    <Bot size={23} />
                  </div>

                  <div>
                    <div className="font-bold text-[#092a59]">
                      KIST AI Campus Assistant
                    </div>

                    <div className="mt-1 text-xs font-medium text-slate-500">
                      Ask. Explore. Learn.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white px-5 pb-20 pt-4 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-700 via-violet-600 to-fuchsia-600 px-6 py-14 text-center shadow-2xl sm:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
            <Bot size={32} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
            Have a question about KIST?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85">
            Ask the KIST AI Assistant and explore information about
            admissions, programs, facilities, campus life and more.
          </p>

          <button
            type="button"
            onClick={scrollPageToChat}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
          >
            Start Asking
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS MODAL
      ====================================================== */}

      {showHowItWorks && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() =>
                setShowHowItWorks(false)
              }
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close"
            >
              <X size={19} />
            </button>

            <div className="bg-gradient-to-br from-blue-700 via-violet-700 to-fuchsia-700 p-8 text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Bot size={28} />
              </div>

              <h2 className="mt-5 text-3xl font-black">
                How KIST AI Works
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/80">
                A simple three-step experience for students and visitors.
              </p>
            </div>

            <div className="space-y-4 p-7">
              <HowStep
                number="01"
                title="Ask"
                description="Type your question naturally in the chat box."
              />

              <HowStep
                number="02"
                title="AI Processes"
                description="Your question is sent to the connected AI service."
              />

              <HowStep
                number="03"
                title="Get Guidance"
                description="Receive a simple response and verify important official information when needed."
              />

              <button
                type="button"
                onClick={() => {
                  setShowHowItWorks(false);

                  window.setTimeout(() => {
                    scrollPageToChat();
                  }, 100);
                }}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3.5 text-sm font-bold text-white transition hover:shadow-lg"
              >
                Start Chatting
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ============================================================
   CHAT PANEL
============================================================ */

function ChatPanel({
  messages,
  input,
  loading,
  showSearch,
  chatSearch,
  filteredMessages,
  feedback,
  copiedMessage,
  language,
  showLanguage,
  selectedFile,
  chatContainerRef,
  bottomRef,
  fileInputRef,
  setInput,
  setShowSearch,
  setChatSearch,
  setShowLanguage,
  sendMessage,
  clearChat,
  handleSubmit,
  handleFeedback,
  copyMessage,
  selectLanguage,
  handleFileChange,
  removeSelectedFile,
  startVoiceInput,
  handleChatScroll,
}: {
  messages: ChatMessage[];
  input: string;
  loading: boolean;
  showSearch: boolean;
  chatSearch: string;
  filteredMessages: ChatMessage[];
  feedback: MessageFeedback;
  copiedMessage: string | null;
  language: string;
  showLanguage: boolean;
  selectedFile: string;
  chatContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  bottomRef: React.MutableRefObject<HTMLDivElement | null>;
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
  setInput: React.Dispatch<
    React.SetStateAction<string>
  >;
  setShowSearch: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setChatSearch: React.Dispatch<
    React.SetStateAction<string>
  >;
  setShowLanguage: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  sendMessage: (
    customMessage?: string,
  ) => Promise<void>;
  clearChat: () => void;
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
  ) => void;
  handleFeedback: (
    messageId: string,
    value: "up" | "down",
  ) => void;
  copyMessage: (
    message: ChatMessage,
  ) => Promise<void>;
  selectLanguage: (value: string) => void;
  handleFileChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  removeSelectedFile: () => void;
  startVoiceInput: () => void;
  handleChatScroll: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.14)]">
      {/* ======================================================
          CHAT HEADER
      ======================================================= */}

      <div className="border-b border-slate-100 bg-white px-4 py-4 sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md">
              <Bot size={23} />

              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="truncate text-base font-black text-[#092a59]">
                  KIST AI Assistant
                </h2>

                <span className="hidden text-[11px] font-bold text-emerald-600 sm:inline">
                  Online
                </span>
              </div>

              <p className="mt-0.5 truncate text-xs font-medium text-slate-500">
                Ask about KIST College & SS
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {/* Language */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setShowLanguage(
                    (current) => !current,
                  )
                }
                className="flex h-9 items-center gap-1.5 rounded-lg px-2 text-xs font-bold text-slate-500 transition hover:bg-slate-50 hover:text-blue-600"
              >
                <Languages size={15} />

                <span className="hidden sm:inline">
                  {language}
                </span>

                <ChevronDown size={13} />
              </button>

              {showLanguage && (
                <div className="absolute right-0 top-11 z-50 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
                  {languages.map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          selectLanguage(item)
                        }
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-semibold transition ${
                          language === item
                            ? "bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {item}

                        {language === item && (
                          <Check size={14} />
                        )}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* Search */}
            <button
              type="button"
              onClick={() => {
                setShowSearch(
                  (current) => !current,
                );

                setChatSearch("");
              }}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-50 hover:text-blue-600"
              aria-label="Search chat"
            >
              <Search size={17} />
            </button>

            {/* Clear */}
            <button
              type="button"
              onClick={clearChat}
              disabled={loading}
              className="flex h-9 items-center justify-center gap-1.5 rounded-lg px-2 text-slate-500 transition hover:bg-slate-50 hover:text-blue-600 disabled:opacity-40"
            >
              <RotateCcw size={16} />

              <span className="hidden text-xs font-semibold sm:inline">
                Clear
              </span>
            </button>
          </div>
        </div>

        {/* Search */}
        {showSearch && (
          <div className="relative mt-4">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={chatSearch}
              onChange={(event) =>
                setChatSearch(
                  event.target.value,
                )
              }
              autoFocus
              placeholder="Search messages..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-9 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            {chatSearch && (
              <button
                type="button"
                onClick={() =>
                  setChatSearch("")
                }
                className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X size={15} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* ======================================================
          NOTICE
      ======================================================= */}

      <div className="border-b border-slate-100 bg-white px-4 py-3">
        <div className="flex items-start gap-2.5">
          <ShieldCheck
            size={17}
            className="mt-0.5 shrink-0 text-blue-600"
          />

          <p className="text-[11px] font-medium leading-5 text-slate-500">
            AI-generated answers may require verification. Confirm
            important current information with KIST.
          </p>
        </div>
      </div>

      {/* ======================================================
          CHAT MESSAGES
      ======================================================= */}

      <div
        ref={chatContainerRef}
        onScroll={handleChatScroll}
        className="h-[390px] overflow-y-auto bg-white px-4 py-5 scroll-smooth"
      >
        <div className="space-y-5">
          {filteredMessages.length === 0 ? (
            <div className="flex min-h-[280px] items-center justify-center text-center">
              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600">
                  <Search size={24} />
                </div>

                <h3 className="mt-4 font-bold text-[#092a59]">
                  No messages found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try another search term.
                </p>
              </div>
            </div>
          ) : (
            filteredMessages.map(
              (message) => {
                const isUser =
                  message.role ===
                  "user";

                const messageFeedback =
                  feedback[
                    message.id
                  ];

                return (
                  <div
                    key={message.id}
                    className={`flex ${
                      isUser
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {/* Assistant icon */}
                    {!isUser && (
                      <div className="mr-3 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-sm">
                        <Bot size={17} />
                      </div>
                    )}

                    {/* User icon is intentionally omitted
                        for cleaner ChatGPT-style UI */}

                    <div
                      className={`max-w-[86%] ${
                        isUser
                          ? "rounded-2xl rounded-tr-md bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-4 py-3.5 text-sm font-medium leading-6 text-white shadow-lg shadow-blue-500/15"
                          : "rounded-2xl rounded-tl-md border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium leading-6 text-[#183b68] shadow-sm"
                      }`}
                    >
                      <div className="whitespace-pre-line">
                        {message.content}
                      </div>

                      {/* Assistant actions */}
                      {!isUser &&
                        message.id !==
                          "welcome" && (
                          <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5">
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() =>
                                  handleFeedback(
                                    message.id,
                                    "up",
                                  )
                                }
                                className={`flex h-7 items-center gap-1 rounded-lg px-2 text-[11px] font-semibold transition ${
                                  messageFeedback ===
                                  "up"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "text-slate-500 hover:bg-slate-50"
                                }`}
                              >
                                <ThumbsUp
                                  size={13}
                                />

                                <span className="hidden sm:inline">
                                  Helpful
                                </span>
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  handleFeedback(
                                    message.id,
                                    "down",
                                  )
                                }
                                className={`flex h-7 items-center gap-1 rounded-lg px-2 text-[11px] font-semibold transition ${
                                  messageFeedback ===
                                  "down"
                                    ? "bg-red-50 text-red-700"
                                    : "text-slate-500 hover:bg-slate-50"
                                }`}
                              >
                                <ThumbsDown
                                  size={13}
                                />

                                <span className="hidden sm:inline">
                                  Not helpful
                                </span>
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                copyMessage(
                                  message,
                                )
                              }
                              className="flex h-7 items-center gap-1 rounded-lg px-2 text-[11px] font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-blue-600"
                            >
                              {copiedMessage ===
                              message.id ? (
                                <>
                                  <Check
                                    size={13}
                                  />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy
                                    size={13}
                                  />
                                  Copy
                                </>
                              )}
                            </button>
                          </div>
                        )}
                    </div>
                  </div>
                );
              },
            )
          )}

          {/* Thinking */}
          {loading && (
            <div className="flex justify-start">
              <div className="mr-3 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                <Bot size={17} />
              </div>

              <div className="rounded-2xl rounded-tl-md border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500" />

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-violet-500"
                    style={{
                      animationDelay:
                        "120ms",
                    }}
                  />

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-fuchsia-500"
                    style={{
                      animationDelay:
                        "240ms",
                    }}
                  />

                  <span className="ml-2 text-xs font-semibold text-slate-500">
                    Thinking...
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              IMPORTANT AUTO-SCROLL TARGET
          =================================================== */}

          <div
            ref={bottomRef}
            className="h-px w-full"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ======================================================
          QUICK QUESTIONS
      ======================================================= */}

      <div className="border-t border-slate-100 bg-white px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles
              size={15}
              className="text-violet-600"
            />

            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
              Quick Questions
            </span>
          </div>

          <span className="text-[10px] font-semibold text-slate-400">
            Tap to ask
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {quickQuestions.map(
            (question) => {
              const Icon =
                question.icon;

              return (
                <button
                  key={
                    question.question
                  }
                  type="button"
                  onClick={() =>
                    sendMessage(
                      question.question,
                    )
                  }
                  disabled={loading}
                  className="group flex min-h-[50px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-xs font-bold text-[#183b68] transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Icon
                    size={16}
                    className="shrink-0 text-blue-600 transition group-hover:text-violet-600"
                  />

                  <span className="truncate">
                    {question.title}
                  </span>
                </button>
              );
            },
          )}
        </div>
      </div>

      {/* ======================================================
          INPUT
      ======================================================= */}

      <form
        onSubmit={handleSubmit}
        className="border-t border-slate-100 bg-white p-4"
      >
        {/* Selected file */}
        {selectedFile && (
          <div className="mb-2 flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
            <span className="truncate">
              📎 {selectedFile}
            </span>

            <button
              type="button"
              onClick={
                removeSelectedFile
              }
              className="ml-2 text-blue-500 hover:text-red-500"
            >
              <X size={14} />
            </button>
          </div>
        )}

        <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-2.5 py-2 shadow-sm transition focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
          {/* File input */}
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
            onChange={
              handleFileChange
            }
          />

          {/* Attachment */}
          <button
            type="button"
            onClick={() =>
              fileInputRef.current?.click()
            }
            disabled={loading}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40"
            title="Attach file"
          >
            <Paperclip size={18} />
          </button>

          {/* Text */}
          <input
            value={input}
            onChange={(event) =>
              setInput(
                event.target.value,
              )
            }
            disabled={loading}
            placeholder="Ask anything about KIST..."
            className="min-w-0 flex-1 bg-transparent py-3 text-sm font-medium text-[#12345f] outline-none placeholder:text-slate-400"
          />

          {/* Voice */}
          <button
            type="button"
            onClick={
              startVoiceInput
            }
            disabled={loading}
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-violet-50 hover:text-violet-600 sm:flex"
            title="Voice input"
          >
            <Mic size={18} />
          </button>

          {/* Send */}
          <button
            type="submit"
            disabled={
              !input.trim() ||
              loading
            }
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 transition duration-200 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40"
            title="Send"
          >
            <Send size={18} />
          </button>
        </div>

        <div className="mt-2 flex items-center justify-between px-1">
          <span className="text-[10px] font-medium text-slate-400">
            AI responses can contain mistakes.
          </span>

          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
            <Wifi size={11} />
            Connected
          </span>
        </div>
      </form>
    </div>
  );
}

/* ============================================================
   TRUST ITEM
============================================================ */

function TrustItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2
        size={17}
        className="text-emerald-500"
      />

      {text}
    </div>
  );
}

/* ============================================================
   FEATURE ITEM
============================================================ */

function FeatureItem({
  icon,
  title,
  subtitle,
  color,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  color:
    | "blue"
    | "cyan"
    | "green"
    | "violet"
    | "orange";
}) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    cyan: "bg-cyan-50 text-cyan-600",
    green: "bg-emerald-50 text-emerald-600",
    violet: "bg-violet-50 text-violet-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <div className="flex items-center gap-3 border-b border-slate-100 bg-white px-5 py-5 md:border-r lg:border-b-0">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${colorClasses[color]}`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <div className="truncate text-sm font-bold text-[#092a59]">
          {title}
        </div>

        <div className="mt-1 truncate text-xs font-medium text-slate-500">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   QUICK LINK CARD
============================================================ */

function QuickLinkCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600 transition group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white">
          {icon}
        </div>

        <ArrowRight
          size={18}
          className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
        />
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#092a59]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </Link>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600 transition group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#092a59]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   HOW STEP
============================================================ */

function HowStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-black text-white">
        {number}
      </div>

      <div>
        <h3 className="font-bold text-[#092a59]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}