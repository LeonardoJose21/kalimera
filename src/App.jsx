import { createContext, useContext, useEffect, useMemo, useState } from "react";

import hero from "./assets/hero.jpg";
import about1 from "./assets/gallery-pool.jpg";
import about2 from "./assets/gallery-bedroom.jpg";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import { copy } from "./Copy";
import siteData from "./data/site-data.json";
import LazyVideo from "./components/LazyVideo";
import EditPage from "./pages/Edit";

/* ───────────────────────── Real business data ───────────────────────── */

const ADDRESS = "Cra. 22 #12-12, Comuna 4, Santa Marta, Magdalena";
const PHONE_DISPLAY = "+57 301 473 7730";
const WHATSAPP_NUMBER = "573014737730";
const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/iMLBiynLksu4m1tt8";
const GOOGLE_RATING = 4.9;
const EMAIL = "nanchoj57@gmail.com";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS,
)}&output=embed`;

/* ─────────────────────────── Translations ─────────────────────────── */

/* ───────────────────────── Language context ───────────────────────── */

const LangContext = createContext(null);
function useLang() {
  return useContext(LangContext);
}

function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("casabahia-lang") || "es";
    } catch {
      return "es";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("casabahia-lang", lang);
    } catch {
      /* storage unavailable, fine, just won't persist */
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: copy[lang] }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

/* ───────────────────────────── Icons ─────────────────────────────
   Small hand-tuned line-icon set, one consistent stroke weight,
   so the amenities row doesn't lean on a generic icon-library look. */

const iconBase = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function IconPool({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <path d="M3 16c1.2 1 2.4 1 3.6 0s2.4-1 3.6 0 2.4 1 3.6 0 2.4-1 3.6 0 2.4 1 3.6 0" />
      <path d="M3 20c1.2 1 2.4 1 3.6 0s2.4-1 3.6 0 2.4 1 3.6 0 2.4-1 3.6 0 2.4 1 3.6 0" />
      <path d="M6 12V6a2 2 0 1 1 4 0v6" />
      <circle cx="16" cy="6" r="2" />
      <path d="M16 8v4" />
    </svg>
  );
}
function IconDesk({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <rect x="4" y="4" width="16" height="11" rx="1.2" />
      <path d="M9 19h6M12 15v4" />
      <path d="M7 8.5c1.5 2 2.5 2 3.5 0M13.5 8.5c1 2 2 2 3.5 0" />
    </svg>
  );
}
function IconUsers({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.2 14.8c2.2.2 3.6 1.6 4.3 4.2" />
    </svg>
  );
}
function IconPin({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}
function IconShield({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <path d="M12 3.5 5 6v5.5C5 16 8 19.3 12 20.5c4-1.2 7-4.5 7-9V6l-7-2.5Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.9" />
    </svg>
  );
}
function IconStar({ className, filled = true }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="m12 3.5 2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L12 16.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L12 3.5Z" />
    </svg>
  );
}

function IconMenu({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function IconClose({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconChat({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <path d="M4 12c0-4.4 3.8-8 8.5-8s8.5 3.6 8.5 8-3.8 8-8.5 8c-1 0-2-.2-2.9-.5L4 21l1.3-4.2C4.5 15.7 4 13.9 4 12Z" />
      <path d="M8.5 11h7M8.5 14h4.5" />
    </svg>
  );
}
function IconWhatsAppGlyph({ className }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 3C9.37 3 3.96 8.4 3.96 15.06c0 2.2.58 4.28 1.68 6.12L3 29l8-2.58a12.9 12.9 0 0 0 5.04 1.02h.01c6.67 0 12.08-5.4 12.08-12.06C28.13 8.4 22.72 3 16.04 3Zm0 22.06h-.01c-1.7 0-3.36-.46-4.82-1.32l-.35-.2-3.55 1.14 1.16-3.46-.23-.36a9.9 9.9 0 0 1-1.55-5.3c0-5.5 4.5-10 10.05-10 2.69 0 5.21 1.05 7.11 2.95a9.95 9.95 0 0 1 2.94 7.05c0 5.5-4.5 10-10.05 10Z" />
      <path d="M21.53 18.05c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.35.19 1.86.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function computeIsEditor() {
  if (typeof window === "undefined") return false;
  const hash = window.location.hash.replace("#", "");
  const path = window.location.pathname.replace(/\/+$/, "");
  return hash === "editar" || path === "/editar" || path.endsWith("/editar");
}

function useIsEditorRoute() {
  const [isEditor, setIsEditor] = useState(() => computeIsEditor());
  useEffect(() => {
    const update = () => setIsEditor(computeIsEditor());
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);
  return isEditor;
}

const AMENITY_ICONS = {
  pool: IconPool,
  desk: IconDesk,
  users: IconUsers,
  pin: IconPin,
  shield: IconShield,
};

/* ───────────────────────────── Flags ─────────────────────────────
   Simple, geometric, enough to read instantly as "EN" / "ES" next
   to the labels, without pulling in an icon-font dependency. */

function FlagUS({ className }) {
  return (
    <svg
      viewBox="0 0 28 20"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="us-clip">
          <rect width="28" height="20" rx="2" />
        </clipPath>
      </defs>
      <g clipPath="url(#us-clip)">
        <rect width="28" height="20" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((y) => (
          <rect key={y} y={y * 1.54} width="28" height="1.54" fill="#B22234" />
        ))}
        <rect width="12" height="10.8" fill="#3C3B6E" />
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: row % 2 === 0 ? 3 : 2 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={2 + col * 4 + (row % 2 === 0 ? 0 : 2)}
              cy={1.6 + row * 1.7}
              r="0.55"
              fill="#fff"
            />
          )),
        )}
      </g>
    </svg>
  );
}
function FlagCO({ className }) {
  return (
    <svg
      viewBox="0 0 28 20"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="co-clip">
          <rect width="28" height="20" rx="2" />
        </clipPath>
      </defs>
      <g clipPath="url(#co-clip)">
        <rect width="28" height="20" fill="#FCD116" />
        <rect y="10" width="28" height="5" fill="#003893" />
        <rect y="15" width="28" height="5" fill="#CE1126" />
      </g>
    </svg>
  );
}

/* ─────────────────────────── UI atoms ─────────────────────────── */

function Button({
  as: As = "a",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-150";
  const variants = {
    primary: "bg-[#0e5c55] text-[#fbf5ea] hover:bg-[#0a453f]",
    secondary:
      "border border-[#16231f]/25 text-[#16231f] hover:border-[#16231f]/60",
    onDark: "bg-[#fbf5ea] text-[#0a3f3b] hover:bg-white",
  };
  return (
    <As className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </As>
  );
}

function WhatsAppLink({
  children,
  className,
  variant = "primary",
  iconOnly = false,
}) {
  const { lang, t } = useLang();
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessage)}`;
  if (iconOnly) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.navCta}
        className={`inline-flex h-10 px-4 rounded-2xl flex-shrink-0 items-center justify-center bg-[#0e5c55] text-[#fbf5ea] transition-colors hover:bg-[#0a453f] ${className || ""}`}
      >
        <span className="mr-1">{lang === "es" ? "Reservar" : "Book"}</span>
        <IconWhatsAppGlyph className="h-[20px] w-[20px]" />
      </a>
    );
  }
  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
    >
      {children}
      <IconWhatsAppGlyph className="h-6 w-6 flex-shrink-0" />
    </Button>
  );
}

function RatingBadge({ className = "" }) {
  const { t } = useLang();
  return (
    <a
      href={GOOGLE_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-3 rounded-2xl bg-[#fbf5ea] px-4 py-3 shadow-[0_18px_40px_-18px_rgba(10,63,59,0.45)] ${className}`}
    >
      <span className="font-display text-2xl leading-none text-[#16231f]">
        {GOOGLE_RATING}
      </span>
      <span className="flex flex-col">
        <span className="flex items-center gap-0.5 text-[#d9a441]">
          {Array.from({ length: 5 }).map((_, i) => (
            <IconStar key={i} className="h-3.5 w-3.5" />
          ))}
        </span>
        <span className="text-[13px] text-[#16231f]/80 underline-offset-2 group-hover:underline">
          {t.hero.ratingLinkLabel} · {t.hero.ratingLabel}
        </span>
      </span>
    </a>
  );
}

/* ───────────────────────────── Header ───────────────────────────── */

function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#home", t.nav.home],
    ["#about", t.nav.about],
    ["#amenities", t.nav.amenities],
    ["#pricing", t.nav.pricing],
    ["#gallery", t.nav.gallery],
    ["#reviews", t.nav.reviews],
    ["#location", t.nav.location],
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? "bg-[#fbf5ea]/90 backdrop-blur border-b border-[#16231f]/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center space-x-1">
          <img
            src="logo.png"
            alt="Apartamento Martiniano"
            className="h-10 w-auto sm:h-12"
          />
          {/* <span className="font-display text-xl tracking-tight text-[#0e5c55]">
            Martiniano
          </span> */}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[15px] font-medium text-[#16231f]/85 transition-colors hover:text-[#0e5c55]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-3 flex shrink-0 items-center gap-3 sm:ml-5 sm:gap-5">
          <LanguageSwitch lang={lang} setLang={setLang} />

          <div className="hidden lg:block">
            <WhatsAppLink>{t.navCta}</WhatsAppLink>
          </div>

          <div className="lg:hidden">
            <WhatsAppLink iconOnly />
          </div>

          {/* BURGER MENU — PRESERVED */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-full border border-[#16231f]/15 p-2 lg:hidden"
          >
            {menuOpen ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        data-state={menuOpen ? "open" : "closed"}
        className="mobile-panel absolute right-4 top-[calc(100%+0.2rem)] w-56 rounded-2xl border border-[#16231f]/10 bg-[#fbf5ea] p-4 shadow-xl lg:hidden"
      >
        <nav className="flex flex-col gap-3">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#16231f]/80"
            >
              {label}
            </a>
          ))}
        </nav>

        <WhatsAppLink className="mt-4 w-full">{t.navCta}</WhatsAppLink>
      </div>
    </header>
  );
}

function LanguageSwitch({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  const isSpanish = lang === "es";
  const CurrentFlag = isSpanish ? FlagCO : FlagUS;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-9 items-center gap-2 rounded-full border border-[#16231f]/15 bg-[#fbf5ea] px-2 transition-colors hover:bg-[#f4eddf]"
      >
        <CurrentFlag className="h-3.5 w-5 rounded-[2px]" />

        <span className="text-xs font-medium text-[#16231f]">
          {isSpanish ? "ES" : "EN"}
        </span>

        <svg
          viewBox="0 0 12 12"
          className={`h-3 w-3 text-[#16231f]/60 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="m3 4.5 3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-[calc(100%+0.4rem)] z-50 min-w-[100px] overflow-hidden rounded-xl border border-[#16231f]/10 bg-[#fbf5ea] p-1 shadow-lg"
        >
          <button
            type="button"
            role="option"
            aria-selected={lang === "es"}
            onClick={() => {
              setLang("es");
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition-colors hover:bg-[#16231f]/5 ${
              lang === "es" ? "bg-[#16231f]/5 font-semibold" : ""
            }`}
          >
            <FlagCO className="h-3.5 w-5 rounded-[2px]" />
            <span>ES</span>
          </button>

          <button
            type="button"
            role="option"
            aria-selected={lang === "en"}
            onClick={() => {
              setLang("en");
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition-colors hover:bg-[#16231f]/5 ${
              lang === "en" ? "bg-[#16231f]/5 font-semibold" : ""
            }`}
          >
            <FlagUS className="h-3.5 w-5 rounded-[2px]" />
            <span>EN</span>
          </button>
        </div>
      )}
    </div>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */

function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24">
        <div className="rise-in rise-in-1">
          <p className="text-sm font-medium tracking-wide text-[#0e5c55]">
            {t.hero.kicker}
          </p>
          <h1 className="font-display mt-4 max-w-xl text-[2.5rem] leading-[1.08] text-[#16231f] sm:text-[3.1rem]">
            {t.hero.title}
          </h1>
          <p className="font-display mt-5 max-w-md text-lg italic leading-relaxed text-[#16231f]/85">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppLink>{t.hero.primaryCta}</WhatsAppLink>
            <Button as="a" href="#amenities" variant="secondary">
              {t.hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="rise-in rise-in-2 relative">
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={hero}
              alt={t.hero.title}
              className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[480px]"
            />
          </div>
          <RatingBadge className="absolute -bottom-6 left-5 rise-in rise-in-4" />
        </div>
      </div>

      <svg
        className="wave-divider text-[#f1e7d3]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}

/* ───────────────────────────── About ───────────────────────────── */

function About() {
  const { t } = useLang();
  const stats = [
    [t.about.stat1Num, t.about.stat1Label],
    [t.about.stat2Num, t.about.stat2Label],
    [t.about.stat3Num, t.about.stat3Label],
  ];
  return (
    <section id="about" className="bg-[#f1e7d3] py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="font-display max-w-md text-3xl leading-tight text-[#16231f] sm:text-4xl">
            {t.about.heading}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-[#16231f]/85">
            {t.about.body}
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[#16231f]/15 pt-6">
            {stats.map(([num, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl text-[#0e5c55] sm:text-3xl">
                  {num}
                </dd>
                <p className="mt-1 text-sm leading-snug text-[#16231f]/75">
                  {label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={about1}
            alt=""
            className="col-span-1 h-64 w-full rounded-2xl object-cover sm:h-80"
          />
          <img
            src={about2}
            alt=""
            className="col-span-1 mt-8 h-56 w-full rounded-2xl object-cover sm:mt-12 sm:h-72"
          />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Amenities ───────────────────────────── */

function Amenities() {
  const { t } = useLang();
  return (
    <section id="amenities" className="py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display max-w-md text-3xl leading-tight text-[#16231f] sm:text-4xl">
          {t.amenities.heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.amenities.items.map((item, i) => {
            const Icon = AMENITY_ICONS[item.icon];
            const isFeatured = i === 0;
            return (
              <div
                key={item.title}
                className={`rounded-3xl p-6 ${
                  isFeatured
                    ? "bg-[#0e5c55] text-[#fbf5ea]"
                    : "border border-[#16231f]/10 bg-[#fbf5ea] text-[#16231f]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`h-6 w-6 flex-shrink-0 ${isFeatured ? "" : "text-[#c05a2c]"}`}
                  />
                  <h3 className="font-display text-lg">{item.title}</h3>
                </div>
                <p
                  className={`mt-3 text-[15px] leading-relaxed ${isFeatured ? "text-[#fbf5ea]/90" : "text-[#16231f]/80"}`}
                >
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-[#16231f]/10 bg-[#f1e7d3] px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-display text-lg text-[#16231f]">
            {t.amenities.ctaText}
          </p>
          <WhatsAppLink>{t.amenities.ctaButton}</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Location ───────────────────────────── */
function IconMail({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="bg-[#f1e7d3] py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="font-display text-3xl leading-tight text-[#16231f] sm:text-4xl">
            {t.location.heading}
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-[#16231f]/85">
            {t.location.body}
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-3">
              <IconPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c05a2c]" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#16231f]/60">
                  {t.location.addressLabel}
                </p>
                <p className="text-[15px] text-[#16231f]/90">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <IconChat className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c05a2c]" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#16231f]/60">
                  {t.location.phoneLabel}
                </p>
                <p className="text-[15px] text-[#16231f]/90">{PHONE_DISPLAY}</p>
              </div>
            </div>

            <a href={`mailto:${EMAIL}`} className="flex gap-3">
              <IconMail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c05a2c]" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#16231f]/60">
                  Email
                </p>
                <p className="text-[15px] text-[#16231f]/90">{EMAIL}</p>
              </div>
            </a>
          </div>

          <WhatsAppLink className="mt-8">{t.location.whatsappCta}</WhatsAppLink>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#16231f]/10">
          <iframe
            title="Google Maps"
            src={MAP_EMBED_SRC}
            className="h-72 w-full lg:h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
/*--------------------------pricing-----------------------------*/
function PricingSection() {
  const { lang, t } = useLang();
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState(false);

  const tier =
    siteData.pricing.find((p) => guests >= p.min && (p.max === null || guests <= p.max)) ||
    siteData.pricing[siteData.pricing.length - 1];
  const formatted = new Intl.NumberFormat(lang === "es" ? "es-CO" : "en-US").format(tier.priceCOP);

  const rangeLabel = (p) => {
    if (p.max === null) return lang === "es" ? `${p.min}+ personas` : `${p.min}+ guests`;
    if (p.min === p.max) return lang === "es" ? `${p.min} persona` : `${p.min} guest`;
    return lang === "es" ? `${p.min} a ${p.max} personas` : `${p.min} to ${p.max} guests`;
  };

  const MAX_GUESTS = 12;

  const dec = () => setGuests((g) => Math.max(1, Number(g) || 1) - 1);
  const inc = () => setGuests((g) => Math.min(MAX_GUESTS, Math.max(1, Number(g) || 1) + 1));

  const handleGuestsInput = (e) => {
    const raw = e.target.value;
    if (raw === "") {
      setGuests("");
      return;
    }
    const v = parseInt(raw, 10);
    if (!Number.isNaN(v)) setGuests(Math.min(MAX_GUESTS, Math.max(1, v)));
  };

  const formatDateDMY = (isoDate) => {
    if (!isoDate) return "";
    const [y, m, d] = isoDate.split("-");
    return `${d}/${m}/${y}`;
  };

  const handleBook = () => {
    if (!date) {
      setDateError(true);
      return;
    }
    setDateError(false);
    const safeGuests = guests || 1;
    const formattedDate = formatDateDMY(date);
    const message =
      lang === "es"
        ? `Hola, somos ${safeGuests} persona(s) para el ${formattedDate} y quiero consultar disponibilidad (tarifa: $${formatted} COP por noche).`
        : `Hi, we're a group of ${safeGuests} for ${formattedDate} and I'd like to check availability (rate: $${formatted} COP per night).`;
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="bg-[#f1e7d3] py-20">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl leading-tight text-[#16231f] sm:text-4xl">{t.pricing.heading}</h2>
        <p className="mt-3 text-base text-[#16231f]/85">{t.pricing.sub}</p>

        <div className="mt-10 rounded-3xl bg-[#fbf5ea] p-8">
          <p className="text-base font-medium text-[#16231f]/80">{t.pricing.guestsLabel}</p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={dec}
              aria-label="-"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#16231f]/20 text-lg text-[#16231f] hover:border-[#16231f]/50"
            >
              −
            </button>
            <input
              type="number"
              min={1}
              max={12}
              value={guests}
              onChange={handleGuestsInput}
              onBlur={() => guests === "" && setGuests(1)}
              aria-label={t.pricing.guestsLabel}
              className="font-display w-16 rounded-lg border border-[#16231f]/20 bg-transparent py-1 text-center text-3xl text-[#16231f] focus:outline-none focus:border-[#0e5c55]"
            />
            <button
              type="button"
              onClick={inc}
              aria-label="+"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#16231f]/20 text-lg text-[#16231f] hover:border-[#16231f]/50"
            >
              +
            </button>
          </div>

          <p className="mt-4 text-sm text-[#16231f]/65">{rangeLabel(tier)}</p>
          <p className="font-display mt-2 text-4xl text-[#0e5c55]">
            ${formatted} <span className="text-lg font-sans text-[#16231f]/75">COP {t.pricing.perNight}</span>
          </p>

          <div className="mx-auto mt-6 max-w-xs text-left">
            <label className="block text-base font-medium text-[#16231f]/80" htmlFor="checkin-date">
              {t.pricing.dateLabel}
            </label>
            <input
              id="checkin-date"
              type="date"
              required
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setDateError(false);
              }}
              className="mt-2 w-full rounded-lg border border-[#16231f]/20 px-3 py-2 text-base text-[#16231f] focus:outline-none focus:border-[#0e5c55]"
            />
            {dateError && <p className="mt-1 text-sm text-[#c05a2c]">{t.pricing.dateError}</p>}
          </div>

          <button
            type="button"
            onClick={handleBook}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#0e5c55] px-6 py-3 text-base font-medium text-[#fbf5ea] hover:bg-[#0a453f]"
          >
            {t.pricing.cta}
          </button>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const { t } = useLang();
  return (
    <section id="video" className="py-14">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl leading-tight text-[#16231f] sm:text-4xl">
          {t.video.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-[#16231f]/85">
          {t.video.caption}
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl">
          <LazyVideo
            src="video/video_apto.mp4"
            poster="video/thumbnail.jpg"
            title={t.video.title}
            duration="02:00 mins"
          />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── CTA band ───────────────────────────── */

function CtaBand() {
  const { t } = useLang();
  return (
    <section className="bg-[#0a3f3b] py-20 text-[#fbf5ea]">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          {t.cta.heading}
        </h2>
        <p className="mt-4 text-[16px] text-[#fbf5ea]/85">{t.cta.body}</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <WhatsAppLink variant="onDark">{t.cta.button}</WhatsAppLink>
          {/* <span className="text-sm text-[#fbf5ea]/75">{PHONE_DISPLAY}</span> */}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Footer ───────────────────────────── */
function IconFacebook({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.2h2.4l.36-2.8h-2.76V9.2c0-.8.22-1.35 1.37-1.35h1.47V5.35A19.8 19.8 0 0 0 14.2 5.2c-2.02 0-3.4 1.23-3.4 3.5v1.95H8.4v2.8h2.4V21h2.7Z" />
    </svg>
  );
}

function Footer() {
  const { t } = useLang();
  const links = [
    ["#home", t.nav.home],
    ["#about", t.nav.about],
    ["#amenities", t.nav.amenities],
    ["#gallery", t.nav.gallery],
    ["#reviews", t.nav.reviews],
    ["#location", t.nav.location],
  ];
  return (
    <footer className="bg-[#f1e7d3] pb-10 pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-[#0e5c55]">
            Apartamento Martiniano
          </p>
          <p className="mt-3 max-w-xs text-sm text-[#16231f]/80">
            {t.footer.tagline}
          </p>
          <div className="mt-4 flex gap-3 text-sm text-[#16231f]/65">
            <a
              href="https://www.facebook.com/share/1EMT93SFPs/"
              className="flex items-center gap-1.5 text-[#16231f]/85 hover:text-[#0e5c55]"
            >
              <IconFacebook className="h-6 w-6 shrink-0" />
              Facebook
            </a>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-1 flex items-center gap-2 text-sm text-[#16231f]/85 hover:text-[#0e5c55]"
          >
            <IconMail className="h-6 w-6 shrink-0" />
            {EMAIL}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#16231f]/60">
            {t.footer.quickLinks}
          </p>
          <ul className="mt-3 space-y-2">
            {links.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-[#16231f]/80 hover:text-[#0e5c55]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#16231f]/60">
            {t.footer.contact}
          </p>
          <p className="mt-3 text-sm text-[#16231f]/85">{ADDRESS}</p>
          <p className="mt-1 text-sm text-[#16231f]/85">{PHONE_DISPLAY}</p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-5 text-xs text-[#16231f]/55 sm:px-8">
        © {new Date().getFullYear()} Apartamento Martiniano. {t.footer.rights}
      </p>
    </footer>
  );
}

/* ───────────────────────── Floating WhatsApp widget ───────────────────────── */

function FloatingWhatsApp() {
  const { t } = useLang();
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.navCta}
      className="whatsapp-fab fixed bottom-8 right-5 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] sm:bottom-10 sm:right-7"
    >
      <span className="whatsapp-fab-ring" aria-hidden="true" />
      <IconWhatsAppGlyph className="relative h-8 w-8" />
    </a>
  );
}

/* ───────────────────────────── App ───────────────────────────── */

function Page() {
  const { lang, t } = useLang();
  return (
    <div className="bg-[#fbf5ea] text-[#16231f]">
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Amenities />
        <PricingSection />
        <Gallery lang={lang} t={t} />
        <Reviews lang={lang} t={t} />
        <VideoSection />
        <Location />
        <CtaBand />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Root() {
  const isEditor = useIsEditorRoute();
  return isEditor ? <EditPage /> : <Page />;
}

export default function App() {
  return (
    <LangProvider>
      <Root />
    </LangProvider>
  );
}
