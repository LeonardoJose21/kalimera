/**
 * ───────────────────────────────────────────────────────────────────────
 * Apartamento Martiniano — Santa Marta apartment landing page
 * ───────────────────────────────────────────────────────────────────────
 *
 * BEFORE THIS RUNS, READ THIS:
 *
 * 1) IMAGES — this file imports 9 images from ./assets by these exact
 *    names. Rename your downloaded photos to match (or edit the import
 *    lines below to point at your real filenames):
 *
 *      hero.jpg              wide shot of the building / pool, for the hero
 *      about-1.jpg           interior or pool photo, taller crop
 *      about-2.jpg           second interior photo, shorter crop
 *      gallery-pool.jpg
 *      gallery-living.jpg
 *      gallery-bedroom.jpg
 *      gallery-kitchen.jpg
 *      gallery-terrace.jpg
 *      gallery-exterior.jpg
 *
 * 2) DUMMY DATA — search this file for "REPLACE" to find every value
 *    that's a placeholder: the business name "Apartamento Martiniano", the hero/about
 *    copy, the about-section stats, the WhatsApp prefilled message, and
 *    the footer social links. The address, phone number, Google rating,
 *    review count, business-profile link, and all four customer reviews
 *    are your real data and are already wired in.
 *
 * 3) WHATSAPP NUMBER — wired to 573014737730 (Colombia country code +
 *    your number). Update WHATSAPP_NUMBER below if it changes.
 * ───────────────────────────────────────────────────────────────────────
 */

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

import hero from "./assets/hero.jpg";
import about1 from "./assets/gallery-pool.jpg";
import about2 from "./assets/gallery-bedroom.jpg";
import galleryPool from "./assets/gallery-pool.jpg";
import galleryLiving from "./assets/gallery-living.jpg";
import galleryBedroom from "./assets/gallery-bedroom.jpg";
import galleryKitchen from "./assets/gallery-kitchen.jpg";
import galleryCowork from "./assets/gallery-cowork.jpg";
import galleryDinning from "./assets/gallery-eat.jpg";
import galleryDishing from "./assets/gallery-dishing.jpg"

/* ───────────────────────── Real business data ───────────────────────── */

const ADDRESS = "Cra. 22 #12-12, Comuna 4, Santa Marta, Magdalena";
const PHONE_DISPLAY = "+57 301 473 7730";
const WHATSAPP_NUMBER = "573014737730";
const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/iMLBiynLksu4m1tt8";
const GOOGLE_RATING = 4.9;
const GOOGLE_REVIEW_COUNT = 23;
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

const REVIEWS = [
  {
    id: "roberto",
    author: "Roberto Carlos De La Torre",
    url: "https://maps.app.goo.gl/9NQutHys1xb12tmL6",
    es: "El apartamento es excelente para vacacionar, descansar y disfrutar en familia, pareja o con amigos. La ubicación es perfecta para ir a todos los puntos de interés de la ciudad, incluyendo las playas. Y la piscina que tiene el apartamento es un plus increíble. En conclusión, un lugar predilecto para disfrutar Santa Marta.",
    en: "The apartment is excellent for a vacation, to rest and enjoy with family, a partner, or friends. The location is perfect for reaching every point of interest in the city, including the beaches. And the pool is an incredible bonus. In short, a favorite spot to enjoy Santa Marta.",
  },
  {
    id: "saira",
    author: "Saira Elena Alarcon Soto",
    url: "https://maps.app.goo.gl/bcb2S7idu6tdTZx8A",
    es: "Es un bello apartamento totalmente amoblado, muy limpio y bien ubicado, con una piscina espectacular, un área social muy cómoda. Disponible de conexión WiFi y una computadora de escritorio, camas confortables y el precio excelente, lo recomiendo.",
    en: "It's a beautiful, fully furnished apartment — very clean and well located, with a spectacular pool and a comfortable social area. It has WiFi and a desktop computer, comfortable beds, and an excellent price. I recommend it.",
  },
  {
    id: "juan",
    author: "Juan De La Torre",
    url: "https://maps.app.goo.gl/7ZtNLTBuVJH74XGw6",
    es: "Excelente sitio turístico en la ciudad de Santa Marta para compartir en familia, excelente ubicación, está cerca de cualquier lugar que desees visitar, acogedor e independiente. Te aseguro lo pasarás muy feliz.",
    en: "An excellent place to stay in Santa Marta for a family trip — great location, close to anywhere you'd want to visit, cozy and private. I promise you'll have a wonderful time.",
  },
  {
    id: "jhojan",
    author: "Jhojan Vargas",
    url: "https://maps.app.goo.gl/3sAJh2k6rnebHyTA6",
    es: "Me parece un hotel ideal para un viaje de negocios, unas vacaciones en familia o solo, por el hecho de que me brindaron los servicios necesarios para estar cómodo en mi estadía. Por otro lado, cumplen al pie de la letra las reglas de bioseguridad que exige esta contingencia. También quiero destacar un excelente cuidado de la piscina y su área, de fácil acceso.",
    en: "I think it's an ideal place for a business trip, a family vacation, or traveling solo — they provided everything I needed to feel comfortable during my stay. They also followed biosecurity rules closely, and I want to highlight how well they keep the pool and surrounding area, with easy access.",
  },
];

const GALLERY = [
  { id: "pool", img: galleryPool, es: "La piscina", en: "The pool", tall: true },
  { id: "living", img: galleryLiving, es: "Sala y área social", en: "Living & social area", tall: false },
  { id: "bedroom", img: galleryBedroom, es: "Habitación", en: "Bedroom", tall: false },
  { id: "kitchen", img: galleryKitchen, es: "Cocina", en: "Kitchen", tall: true },
  { id: "terrace", img: galleryCowork, es: "Zona de trabajo", en: "work area", tall: false },
  { id: "exterior", img: galleryDinning, es: "Comedor", en: "dining room", tall: false },
  { id: "dishing", img: galleryDishing, es: "Lavandería", en: "laundry", tall: false}
];

/* ─────────────────────────── Translations ─────────────────────────── */

const dict = {
  es: {
    nav: { home: "Inicio", about: "Nosotros", amenities: "Comodidades", gallery: "Galería", reviews: "Opiniones", location: "Ubicación" },
    navCta: "Reservar por WhatsApp",
    skip: "Ir al contenido",
    hero: {
      kicker: "Santa Marta, Magdalena",
      // REPLACE: headline/subhead copy — written from the reviews, but yours to make more specific
      title: "Un apartamento con piscina, a un paso del mar en Santa Marta",
      subtitle: "Un espacio propio para descansar en familia, en pareja o con amigos — cerca de todo lo que hace especial a Santa Marta.",
      primaryCta: "Reservar por WhatsApp",
      secondaryCta: "Ver comodidades",
      ratingLabel: "en Google",
      ratingLinkLabel: `Ver ${GOOGLE_REVIEW_COUNT} reseñas`,
    },
    about: {
      heading: "Tu propio apartamento en el corazón de Santa Marta",
      // REPLACE: paragraph is a reasonable starting draft, not verified copy
      body: "Comuna 4 queda cerca de todo: el centro histórico, la Quinta de San Pedro Alejandrino, la marina y las playas de la ciudad. Aquí tienes un apartamento completo — no una habitación de hotel — con piscina, zona social y todo lo necesario para sentirte en casa desde el primer día.",
      // REPLACE: these three numbers are placeholders
      stat1Num: "250+", stat1Label: "huéspedes felices",
      stat2Num: "6", stat2Label: "años recibiendo viajeros",
      stat3Num: `${GOOGLE_RATING}`, stat3Label: "calificación en Google",
    },
    amenities: {
      heading: "Todo lo que necesitas, y algo más",
      items: [
        { icon: "pool", title: "Piscina", body: "Una piscina espectacular — el favorito de nuestros huéspedes para refrescarse en familia." },
        { icon: "desk", title: "WiFi y zona de trabajo", body: "Conexión WiFi y computador de escritorio para quienes viajan por trabajo." },
        { icon: "users", title: "Ideal en familia", body: "Camas confortables y espacio de sobra para descansar en familia, pareja o con amigos." },
        { icon: "pin", title: "Ubicación privilegiada", body: "A pocos minutos del centro histórico, la marina y las playas de Santa Marta." },
        { icon: "shield", title: "Limpio y seguro", body: "Bioseguridad y limpieza cuidadas al detalle en cada estadía." },
      ],
    },
    gallery: { heading: "Así es el apartamento", sub: "Fotos reales del apartamento" },
    reviews: {
      heading: "Lo que dicen quienes ya se hospedaron",
      sub: "Reseñas reales, verificadas en Google. Puedes leerlas directamente en el perfil del negocio.",
      readOnGoogle: "Ver en Google",
      viewProfile: "Ver perfil completo en Google",
    },
    location: {
      heading: "Cómo llegar",
      body: "Coordina tu llegada y resuelve cualquier duda escribiendo directamente por WhatsApp.",
      addressLabel: "Dirección",
      phoneLabel: "Teléfono",
      whatsappCta: "Escríbenos por WhatsApp",
    },
    cta: {
      heading: "¿Listo para tu próxima escapada a Santa Marta?",
      body: "Escríbenos por WhatsApp y te ayudamos a planear tu estadía.",
      button: "Reservar por WhatsApp",
    },
    footer: {
      // REPLACE: tagline + social links are placeholders
      tagline: "Un apartamento con piscina en el corazón de Santa Marta.",
      quickLinks: "Enlaces",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
    whatsappMessage: "Hola, quiero consultar disponibilidad para el apartamento en Santa Marta.",
    langName: "Español",
  },
  en: {
    nav: { home: "Home", about: "About", amenities: "Amenities", gallery: "Gallery", reviews: "Reviews", location: "Location" },
    navCta: "Book on WhatsApp",
    skip: "Skip to content",
    hero: {
      kicker: "Santa Marta, Magdalena",
      title: "A poolside apartment, steps from the sea in Santa Marta",
      subtitle: "A private space to unwind with family, a partner, or friends — close to everything that makes Santa Marta special.",
      primaryCta: "Book on WhatsApp",
      secondaryCta: "See amenities",
      ratingLabel: "on Google",
      ratingLinkLabel: `See ${GOOGLE_REVIEW_COUNT} reviews`,
    },
    about: {
      heading: "Your own apartment in the heart of Santa Marta",
      body: "Comuna 4 sits close to everything: the historic center, the Quinta de San Pedro Alejandrino, the marina, and the city's beaches. Here you get a full apartment — not just a hotel room — with a pool, a social area, and everything you need to feel at home from day one.",
      stat1Num: "250+", stat1Label: "happy guests",
      stat2Num: "6", stat2Label: "years hosting travelers",
      stat3Num: `${GOOGLE_RATING}`, stat3Label: "rating on Google",
    },
    amenities: {
      heading: "Everything you need, and then some",
      items: [
        { icon: "pool", title: "Pool", body: "A spectacular pool — our guests' favorite spot to cool off with family." },
        { icon: "desk", title: "WiFi & workspace", body: "WiFi and a desktop computer for anyone traveling for work." },
        { icon: "users", title: "Family friendly", body: "Comfortable beds and plenty of room to unwind with family, a partner, or friends." },
        { icon: "pin", title: "Prime location", body: "Minutes from the historic center, the marina, and Santa Marta's beaches." },
        { icon: "shield", title: "Clean & secure", body: "Biosecurity and cleanliness looked after in careful detail on every stay." },
      ],
    },
    gallery: { heading: "Take a look inside", sub: "Real photos of the apartment" },
    reviews: {
      heading: "What past guests say",
      sub: "Real reviews, verified on Google. You can read them directly on the business profile.",
      readOnGoogle: "View on Google",
      viewProfile: "View full profile on Google",
    },
    location: {
      heading: "How to find us",
      body: "Coordinate your arrival and ask any questions straight over WhatsApp.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      whatsappCta: "Message us on WhatsApp",
    },
    cta: {
      heading: "Ready for your next Santa Marta getaway?",
      body: "Message us on WhatsApp and we'll help you plan your stay.",
      button: "Book on WhatsApp",
    },
    footer: {
      tagline: "A poolside apartment in the heart of Santa Marta.",
      quickLinks: "Links",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    whatsappMessage: "Hi, I'd like to check availability for the apartment in Santa Marta.",
    langName: "English",
  },
};

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
      /* storage unavailable — fine, just won't persist */
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dict[lang] }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

/* ───────────────────────────── Icons ─────────────────────────────
   Small hand-tuned line-icon set, one consistent stroke weight,
   so the amenities row doesn't lean on a generic icon-library look. */

const iconBase = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round" };

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
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="m12 3.5 2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L12 16.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L12 3.5Z" />
    </svg>
  );
}
function IconQuote({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M9.5 6C6.2 7.6 4.5 9.9 4.5 13c0 2.3 1.5 3.9 3.5 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.4-1.7 1.8-3.1 3.6-3.9L9.5 6Zm9 0c-3.3 1.6-5 3.9-5 7 0 2.3 1.5 3.9 3.5 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.4-1.7 1.8-3.1 3.6-3.9L18.5 6Z" />
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
function IconChevron({ className, dir = "left" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
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
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 3C9.37 3 3.96 8.4 3.96 15.06c0 2.2.58 4.28 1.68 6.12L3 29l8-2.58a12.9 12.9 0 0 0 5.04 1.02h.01c6.67 0 12.08-5.4 12.08-12.06C28.13 8.4 22.72 3 16.04 3Zm0 22.06h-.01c-1.7 0-3.36-.46-4.82-1.32l-.35-.2-3.55 1.14 1.16-3.46-.23-.36a9.9 9.9 0 0 1-1.55-5.3c0-5.5 4.5-10 10.05-10 2.69 0 5.21 1.05 7.11 2.95a9.95 9.95 0 0 1 2.94 7.05c0 5.5-4.5 10-10.05 10Z" />
      <path d="M21.53 18.05c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.35.19 1.86.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

const AMENITY_ICONS = { pool: IconPool, desk: IconDesk, users: IconUsers, pin: IconPin, shield: IconShield };

/* ───────────────────────────── Flags ─────────────────────────────
   Simple, geometric — enough to read instantly as "EN" / "ES" next
   to the labels, without pulling in an icon-font dependency. */

function FlagUS({ className }) {
  return (
    <svg viewBox="0 0 28 20" className={className} role="img" aria-hidden="true">
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
          ))
        )}
      </g>
    </svg>
  );
}
function FlagCO({ className }) {
  return (
    <svg viewBox="0 0 28 20" className={className} role="img" aria-hidden="true">
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

function Button({ as: As = "a", variant = "primary", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-150";
  const variants = {
    primary: "bg-[#0e5c55] text-[#fbf5ea] hover:bg-[#0a453f]",
    secondary: "border border-[#16231f]/25 text-[#16231f] hover:border-[#16231f]/60",
    onDark: "bg-[#fbf5ea] text-[#0a3f3b] hover:bg-white",
  };
  return (
    <As className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </As>
  );
}

function WhatsAppLink({ children, className, variant = "primary", iconOnly = false }) {
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
    <Button as="a" href={href} target="_blank" rel="noopener noreferrer" variant={variant} className={className}>
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
      <span className="font-display text-2xl leading-none text-[#16231f]">{GOOGLE_RATING}</span>
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
    ["#gallery", t.nav.gallery],
    ["#reviews", t.nav.reviews],
    ["#location", t.nav.location],
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled ? "bg-[#fbf5ea]/90 backdrop-blur border-b border-[#16231f]/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="font-display text-xl tracking-tight text-[#0e5c55]">
          Apartamento Martiniano {/* REPLACE with your real business name */}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-[15px] font-medium text-[#16231f]/85 transition-colors hover:text-[#0e5c55]">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch lang={lang} setLang={setLang} />
         <div className="hidden lg:block">
          <WhatsAppLink>{t.navCta}</WhatsAppLink>
        </div>

        <div className="lg:hidden">
          <WhatsAppLink iconOnly />
        </div>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-full border border-[#16231f]/15 p-2 lg:hidden"
          >
            {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        data-state={menuOpen ? "open" : "closed"}
        className="mobile-panel absolute right-4 top-[calc(100%+0.5rem)] w-56 rounded-2xl border border-[#16231f]/10 bg-[#fbf5ea] p-4 shadow-xl lg:hidden"
      >
        <nav className="flex flex-col gap-3">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-sm text-[#16231f]/80">
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
        className="flex h-10 items-center gap-2 rounded-full border border-[#16231f]/15 bg-[#fbf5ea] px-3 transition-colors hover:bg-[#f4eddf]"
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
          <p className="text-sm font-medium tracking-wide text-[#0e5c55]">{t.hero.kicker}</p>
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

      <svg className="wave-divider text-[#f1e7d3]" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z" />
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
          <p className="mt-5 max-w-md leading-relaxed text-[#16231f]/85">{t.about.body}</p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[#16231f]/15 pt-6">
            {stats.map(([num, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl text-[#0e5c55] sm:text-3xl">{num}</dd>
                <p className="mt-1 text-sm leading-snug text-[#16231f]/75">{label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src={about1} alt="" className="col-span-1 h-64 w-full rounded-2xl object-cover sm:h-80" />
          <img src={about2} alt="" className="col-span-1 mt-8 h-56 w-full rounded-2xl object-cover sm:mt-12 sm:h-72" />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Amenities ───────────────────────────── */

function Amenities() {
  const { t } = useLang();
  const [first, ...rest] = t.amenities.items;
  const FirstIcon = AMENITY_ICONS[first.icon];

  return (
    <section id="amenities" className="py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display max-w-md text-3xl leading-tight text-[#16231f] sm:text-4xl">
          {t.amenities.heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <div className="flex min-h-[150px] flex-col justify-between rounded-3xl bg-[#0e5c55] p-6 text-[#fbf5ea] lg:col-span-2 lg:row-span-2">
            <FirstIcon className="h-9 w-9 m-2" />
            <div>
              <h3 className="font-display text-2xl">{first.title}</h3>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[#fbf5ea]/90">{first.body}</p>
            </div>
          </div>

          {rest.map((item) => {
            const Icon = AMENITY_ICONS[item.icon];
            return (
              <div key={item.title} className="flex min-h-[150px] flex-col justify-between rounded-3xl border border-[#16231f]/10 bg-[#fbf5ea] p-6">
                <Icon className="h-7 w-7 text-[#c05a2c]" />
                <div>
                  <h3 className="font-display mt-4 text-lg text-[#16231f]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#16231f]/80">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Gallery ───────────────────────────── */

function Gallery() {
  const { lang, t } = useLang();
  const [openId, setOpenId] = useState(null);
  const openIndex = GALLERY.findIndex((g) => g.id === openId);

  const close = () => setOpenId(null);
  const step = (delta) => {
    if (openIndex === -1) return;
    const next = (openIndex + delta + GALLERY.length) % GALLERY.length;
    setOpenId(GALLERY[next].id);
  };

  useEffect(() => {
    if (openId === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  return (
    <section id="gallery" className="bg-[#f1e7d3] py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl leading-tight text-[#16231f] sm:text-4xl">{t.gallery.heading}</h2>
          <p className="max-w-xs text-sm text-[#16231f]/75">{t.gallery.sub}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId(item.id)}
              className={`gallery-tile group relative overflow-hidden rounded-2xl ${item.tall ? "row-span-2" : ""}`}
            >
              <img
                src={item.img}
                alt={lang === "en" ? item.en : item.es}
                className={`gallery-img h-full w-full object-cover ${item.tall ? "aspect-[3/4]" : "aspect-square"}`}
              />
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#16231f]/70 to-transparent px-3 pb-2 pt-6 text-left text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                {lang === "en" ? item.en : item.es}
              </span>
            </button>
          ))}
        </div>
      </div>

      {openId !== null && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center bg-[#16231f]/90 px-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full bg-[#fbf5ea]/10 p-2 text-[#fbf5ea] hover:bg-[#fbf5ea]/20"
          >
            <IconClose className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous"
            className="absolute left-3 rounded-full bg-[#fbf5ea]/10 p-2 text-[#fbf5ea] hover:bg-[#fbf5ea]/20 sm:left-6"
          >
            <IconChevron dir="left" className="h-6 w-6" />
          </button>
          <figure className="lightbox-figure max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[openIndex].img} alt="" className="max-h-[75vh] w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-[#fbf5ea]/90">
              {lang === "en" ? GALLERY[openIndex].en : GALLERY[openIndex].es}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next"
            className="absolute right-3 rounded-full bg-[#fbf5ea]/10 p-2 text-[#fbf5ea] hover:bg-[#fbf5ea]/20 sm:right-6"
          >
            <IconChevron dir="right" className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}

/* ───────────────────────────── Reviews ───────────────────────────── */

function Reviews() {
  const { lang, t } = useLang();
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display max-w-md text-3xl leading-tight text-[#16231f] sm:text-4xl">
              {t.reviews.heading}
            </h2>
            <p className="mt-3 max-w-md text-sm text-[#16231f]/80">{t.reviews.sub}</p>
          </div>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-[#16231f]/12 px-5 py-3"
          >
            <span className="font-display text-3xl text-[#16231f]">{GOOGLE_RATING}</span>
            <span className="flex flex-col text-[13px] text-[#16231f]/80">
              <span className="flex items-center gap-0.5 text-[#d9a441]">
                {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} className="h-3 w-3" />)}
              </span>
              <span className="underline-offset-2 hover:underline">{t.reviews.viewProfile}</span>
            </span>
          </a>
        </div>

        <div className="relative mt-10">
          <div ref={scrollerRef} className="scroll-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
            {REVIEWS.map((r, i) => (
              <article
                key={r.id}
                className={`review-card w-[300px] flex-shrink-0 snap-start rounded-2xl bg-[#f1e7d3] p-6 sm:w-[340px] ${
                  i % 2 === 0 ? "border-t-4 border-[#0e5c55]" : "border-t-4 border-[#c05a2c]"
                }`}
              >
                <IconQuote className="h-6 w-6 text-[#16231f]/20" />
                <p className="font-display mt-4 text-[15px] italic leading-relaxed text-[#16231f]/90">
                  {lang === "es" ? r.es : r.en}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#16231f]">{r.author}</span>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-medium text-[#0e5c55] underline-offset-2 hover:underline"
                  >
                    {t.reviews.readOnGoogle}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-2 hidden justify-end gap-2 sm:flex">
            <button type="button" onClick={() => scrollBy(-1)} aria-label="Previous reviews" className="rounded-full border border-[#16231f]/15 p-2 hover:border-[#16231f]/40">
              <IconChevron dir="left" className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => scrollBy(1)} aria-label="Next reviews" className="rounded-full border border-[#16231f]/15 p-2 hover:border-[#16231f]/40">
              <IconChevron dir="right" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Location ───────────────────────────── */

function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="bg-[#f1e7d3] py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="font-display text-3xl leading-tight text-[#16231f] sm:text-4xl">{t.location.heading}</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-[#16231f]/85">{t.location.body}</p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-3">
              <IconPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c05a2c]" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#16231f]/60">{t.location.addressLabel}</p>
                <p className="text-[15px] text-[#16231f]/90">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <IconChat className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c05a2c]" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#16231f]/60">{t.location.phoneLabel}</p>
                <p className="text-[15px] text-[#16231f]/90">{PHONE_DISPLAY}</p>
              </div>
            </div>
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

/* ───────────────────────────── CTA band ───────────────────────────── */

function CtaBand() {
  const { t } = useLang();
  return (
    <section className="bg-[#0a3f3b] py-20 text-[#fbf5ea]">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">{t.cta.heading}</h2>
        <p className="mt-4 text-[16px] text-[#fbf5ea]/85">{t.cta.body}</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <WhatsAppLink variant="onDark">{t.cta.button}</WhatsAppLink>
          <span className="text-sm text-[#fbf5ea]/75">{PHONE_DISPLAY}</span>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Footer ───────────────────────────── */

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
          <p className="font-display text-xl text-[#0e5c55]">Apartamento Martiniano</p>
          <p className="mt-3 max-w-xs text-sm text-[#16231f]/80">{t.footer.tagline}</p>
          {/* REPLACE: social links are placeholders */}
          <div className="mt-4 flex gap-3 text-sm text-[#16231f]/65">
            <a href="https://www.facebook.com/share/1EMT93SFPs/" className="hover:text-[#0e5c55]">Facebook</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#16231f]/60">{t.footer.quickLinks}</p>
          <ul className="mt-3 space-y-2">
            {links.map(([href, label]) => (
              <li key={href}><a href={href} className="text-sm text-[#16231f]/80 hover:text-[#0e5c55]">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#16231f]/60">{t.footer.contact}</p>
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
      className="whatsapp-fab fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] sm:bottom-7 sm:right-7"
    >
      <span className="whatsapp-fab-ring" aria-hidden="true" />
      <IconWhatsAppGlyph className="relative h-7 w-7" />
    </a>
  );
}

/* ───────────────────────────── App ───────────────────────────── */

function Page() {
  const { t } = useLang();
  return (
    <div className="bg-[#fbf5ea] text-[#16231f]">
      <a href="#main" className="skip-link">{t.skip}</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <Reviews />
        <Location />
        <CtaBand />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
