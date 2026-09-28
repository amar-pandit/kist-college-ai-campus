"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Programs", href: "/programs" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Research", href: "/research" },
  { name: "AI Assistant", href: "/ai-assistant" },
  { name: "Contact", href: "/contact" },
];

const searchItems = [
  {
    name: "Home",
    description: "KIST College & SS homepage",
    href: "/",
  },
  {
    name: "About",
    description: "Learn more about KIST College & SS",
    href: "/about",
  },
  {
    name: "Academics",
    description: "Academic information and learning",
    href: "/academics",
  },
  {
    name: "Admissions",
    description: "Admission process and information",
    href: "/admissions",
  },
  {
    name: "Programs",
    description: "Explore academic programs",
    href: "/programs",
  },
  {
    name: "Campus Life",
    description: "Campus activities and facilities",
    href: "/campus-life",
  },
  {
    name: "Research",
    description: "Research and innovation",
    href: "/research",
  },
  {
    name: "AI Assistant",
    description: "Ask the KIST AI Assistant",
    href: "/ai-assistant",
  },
  {
    name: "Contact",
    description: "Contact and enquiry information",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const [language, setLanguage] = useState<"EN" | "NE">("EN");
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  function closeMenu() {
    setMobileOpen(false);
  }

  /* =========================================================
     OPEN SEARCH
  ========================================================= */

  function openSearch() {
    setSearchOpen(true);
    setLanguageOpen(false);
    setMobileOpen(false);

    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  }

  /* =========================================================
     CLOSE SEARCH
  ========================================================= */

  function closeSearch() {
    setSearchOpen(false);
    setSearchQuery("");
  }

  /* =========================================================
     TOGGLE LANGUAGE
  ========================================================= */

  function toggleLanguage() {
    setLanguageOpen((current) => !current);
    setSearchOpen(false);
  }

  /* =========================================================
     SELECT LANGUAGE
  ========================================================= */

  function selectLanguage(value: "EN" | "NE") {
    setLanguage(value);
    setLanguageOpen(false);
  }

  /* =========================================================
     KEYBOARD EVENTS
  ========================================================= */

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setLanguageOpen(false);
        setMobileOpen(false);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        openSearch();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =========================================================
     CLOSE LANGUAGE WHEN CLICKING OUTSIDE
  ========================================================= */

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* =========================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setLanguageOpen(false);
    setSearchQuery("");
  }, [pathname]);

  /* =========================================================
     SEARCH RESULTS
  ========================================================= */

  const filteredResults = searchItems.filter((item) => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return true;

    return (
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fixed left-0 top-0 z-[100] w-full border-b border-white/10 bg-[#061a38]/95 shadow-[0_4px_25px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-4 sm:px-5 lg:px-8 xl:px-10">
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 shrink-0 items-center gap-3"
          >
            <div className="flex h-[56px] w-[62px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-md shadow-black/10 transition duration-300 hover:scale-[1.03]">
              <img
                src="/images/kist-logo.png"
                alt="KIST College & SS logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden min-w-0 sm:block">
              <div className="whitespace-nowrap text-[17px] font-extrabold leading-tight tracking-[-0.01em] text-white">
                KIST College & SS
              </div>

              <div className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                Kathmandu, Nepal
              </div>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-3 xl:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative whitespace-nowrap rounded-lg px-2 py-3 text-[13px] font-semibold transition-all duration-200 ${
                    active
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-violet-500 transition-all duration-300 ${
                      active
                        ? "w-[70%]"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-2.5 xl:flex">
            {/* SEARCH */}
            <button
              type="button"
              aria-label="Open search"
              onClick={openSearch}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/25 bg-blue-500/10 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-blue-500/20"
            >
              <Search
                size={18}
                className="transition-transform duration-200 group-hover:scale-110"
              />
            </button>

            {/* LANGUAGE */}
            <div
              ref={languageRef}
              className="relative"
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={languageOpen}
                onClick={toggleLanguage}
                className="flex h-11 items-center gap-2 rounded-full border border-blue-300/20 bg-white/[0.04] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                <span className="text-base">
                  🌐
                </span>

                <span>{language}</span>

                <ChevronDown
                  size={14}
                  className={`text-slate-300 transition-transform duration-200 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* LANGUAGE DROPDOWN */}
              {languageOpen && (
                <div className="absolute right-0 top-[52px] w-[175px] overflow-hidden rounded-2xl border border-blue-200/20 bg-[#071d3d] p-1.5 shadow-2xl shadow-black/30">
                  <button
                    type="button"
                    onClick={() => selectLanguage("EN")}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-white transition hover:bg-blue-500/10"
                  >
                    <span className="flex items-center gap-2">
                      🇬🇧 English
                    </span>

                    {language === "EN" && (
                      <Check
                        size={16}
                        className="text-blue-400"
                      />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => selectLanguage("NE")}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-white transition hover:bg-blue-500/10"
                  >
                    <span className="flex items-center gap-2">
                      🇳🇵 नेपाली
                    </span>

                    {language === "NE" && (
                      <Check
                        size={16}
                        className="text-blue-400"
                      />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* APPLY */}
            <Link
              href="/admissions"
              className="group flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Apply Now

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={
              mobileOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((current) => !current);
              setSearchOpen(false);
              setLanguageOpen(false);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/25 bg-blue-500/10 text-white transition hover:bg-blue-500/20 xl:hidden"
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        {mobileOpen && (
          <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-white/10 bg-[#061a38]/98 px-4 pb-6 pt-4 shadow-2xl backdrop-blur-xl xl:hidden">
            <nav className="mx-auto max-w-[700px]">
              <div className="space-y-1">
                {navigation.map((item, index) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                        active
                          ? "bg-blue-500/15 text-white"
                          : "text-slate-200 hover:bg-blue-500/10 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`w-6 text-[10px] font-bold ${
                            active
                              ? "text-cyan-300"
                              : "text-blue-400"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {item.name}
                      </span>

                      <ArrowRight
                        size={15}
                        className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-300"
                      />
                    </Link>
                  );
                })}
              </div>

              {/* MOBILE ACTIONS */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={openSearch}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl border border-blue-300/20 bg-white/[0.04] text-sm font-semibold text-white transition hover:bg-blue-500/10"
                >
                  <Search size={17} />

                  Search
                </button>

                <Link
                  href="/admissions"
                  onClick={closeMenu}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-sm font-bold text-white transition hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Apply Now

                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* MOBILE LANGUAGE */}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => selectLanguage("EN")}
                  className={`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition ${
                    language === "EN"
                      ? "border-blue-400/40 bg-blue-500/15 text-white"
                      : "border-white/10 bg-white/[0.03] text-slate-300"
                  }`}
                >
                  🇬🇧 English
                </button>

                <button
                  type="button"
                  onClick={() => selectLanguage("NE")}
                  className={`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition ${
                    language === "NE"
                      ? "border-blue-400/40 bg-blue-500/15 text-white"
                      : "border-white/10 bg-white/[0.03] text-slate-300"
                  }`}
                >
                  🇳🇵 नेपाली
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={closeMenu}
          className="fixed inset-0 z-[90] bg-black/50 xl:hidden"
        />
      )}

      {/* =====================================================
          SEARCH OVERLAY
      ====================================================== */}

      {searchOpen && (
        <div className="fixed inset-0 z-[200] bg-[#020d20]/70 px-4 pt-24 backdrop-blur-md">
          {/* Click outside */}
          <button
            type="button"
            aria-label="Close search"
            onClick={closeSearch}
            className="absolute inset-0 cursor-default"
          />

          {/* Search Panel */}
          <div className="relative mx-auto w-full max-w-[700px] overflow-hidden rounded-[24px] border border-blue-200/20 bg-[#071d3d] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            {/* Search Header */}
            <div className="border-b border-white/10 p-4">
              <div className="flex items-center gap-3 rounded-2xl border border-blue-300/20 bg-white/[0.04] px-4">
                <Search
                  size={20}
                  className="shrink-0 text-blue-300"
                />

                <input
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      closeSearch();
                    }
                  }}
                  type="text"
                  placeholder="Search KIST pages..."
                  className="h-14 min-w-0 flex-1 bg-transparent text-sm font-medium text-white outline-none placeholder:text-slate-500"
                />

                <button
                  type="button"
                  onClick={closeSearch}
                  aria-label="Close search"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-2 flex items-center justify-between px-1 text-[10px] text-slate-500">
                <span>
                  Search KIST pages and information
                </span>

                <span className="hidden sm:block">
                  Press ESC to close
                </span>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-3">
              {filteredResults.length > 0 ? (
                <div className="space-y-1">
                  {filteredResults.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeSearch}
                      className="group flex items-center gap-4 rounded-2xl p-3.5 transition hover:bg-blue-500/10"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition group-hover:bg-blue-500/20">
                        <Search size={17} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold text-white">
                          {item.name}
                        </div>

                        <div className="mt-0.5 truncate text-xs text-slate-500">
                          {item.description}
                        </div>
                      </div>

                      <ArrowRight
                        size={16}
                        className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-300"
                      />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-5 py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                    <Search size={24} />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-white">
                    No results found
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Try searching for admissions, programs,
                    academics or campus life.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}