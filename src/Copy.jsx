const GOOGLE_RATING = 4.9;
const GOOGLE_REVIEW_COUNT = 23;

export const copy = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      amenities: "Comodidades",
      pricing: "Tarifas",
      gallery: "Galería",
      reviews: "Opiniones",
      location: "Ubicación",
    },
    navCta: "Reservar",
    skip: "Ir al contenido",
    hero: {
      kicker: "Santa Marta, Magdalena",
      // REPLACE: headline/subhead copy, written from the reviews, but yours to make more specific
      title: "Un apartamento con piscina, a un paso del mar en Santa Marta",
      subtitle:
        "Un espacio propio para descansar en familia, en pareja o con amigos, cerca de todo lo que hace especial a Santa Marta.",
      primaryCta: "Reservar",
      secondaryCta: "Ver comodidades",
      ratingLabel: "en Google",
      ratingLinkLabel: `Ver ${GOOGLE_REVIEW_COUNT} reseñas`,
    },
    video: {
      heading: "Míralo en video",
      caption: "Así se vive un día en Apartamento Martiniano.",
      title: "Video de la casa",
    },
    about: {
      heading: "Tu propio apartamento en el corazón de Santa Marta",
      // REPLACE: paragraph is a reasonable starting draft, not verified copy
      body: "Comuna 4 queda cerca de todo: el centro histórico, la Quinta de San Pedro Alejandrino, la marina y las playas de la ciudad. Aquí tienes un apartamento completo, no una habitación de hotel, con piscina, zona social y todo lo necesario para sentirte en casa desde el primer día.",
      // REPLACE: these three numbers are placeholders
      stat1Num: "250+",
      stat1Label: "huéspedes felices",
      stat2Num: "6",
      stat2Label: "años recibiendo viajeros",
      stat3Num: `${GOOGLE_RATING}`,
      stat3Label: "calificación en Google",
    },
    pricing: {
      heading: "Tarifas",
      sub: "Dinos cuántos son y te decimos la tarifa al instante.",
      // es.pricing
      dateLabel: "Fecha de llegada",
      dateError: "Selecciona una fecha para continuar.",
      guestsLabel: "¿Cuántas personas son?",
      perNight: "por noche",
      cta: "Consultar disponibilidad",
    },
    amenities: {
      heading: "Todo lo que necesitas, y algo más",
      // es
      ctaText: "¿Tienes preguntas sobre el apartamento?",
      ctaButton: "Pregúntanos por WhatsApp",
      items: [
        {
          icon: "pool",
          title: "Piscina",
          body: "Una piscina espectacular, el favorito de nuestros huéspedes para refrescarse en familia.",
        },
        {
          icon: "desk",
          title: "WiFi y zona de trabajo",
          body: "Conexión WiFi y computador de escritorio para quienes viajan por trabajo.",
        },
        {
          icon: "users",
          title: "Ideal en familia",
          body: "Camas confortables y espacio de sobra para descansar en familia, pareja o con amigos.",
        },
        {
          icon: "pin",
          title: "Ubicación privilegiada",
          body: "A pocos minutos del centro histórico, la marina y las playas de Santa Marta.",
        },
        {
          icon: "shield",
          title: "Limpio y seguro",
          body: "Bioseguridad y limpieza cuidadas al detalle en cada estadía.",
        },
      ],
    },

    gallery: {
      heading: "Así es el apartamento",
      sub: "Fotos reales del apartamento",
    },
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
      heading: "¿Listo pa' tu próxima escapada a Santa Marta?",
      body: "Escríbenos por WhatsApp y te ayudamos a planear tu estadía.",
      button: "Reservar",
    },
    footer: {
      // REPLACE: tagline + social links are placeholders
      tagline: "Un apartamento con piscina en el corazón de Santa Marta.",
      quickLinks: "Enlaces",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
    whatsappMessage:
      "Hola, quiero consultar disponibilidad para el apartamento en Santa Marta.",
    langName: "Español",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      amenities: "Amenities",
      pricing: "Rates",
      gallery: "Gallery",
      reviews: "Reviews",
      location: "Location",
    },
    navCta: "Book",
    skip: "Skip to content",
    hero: {
      kicker: "Santa Marta, Magdalena",
      title: "A poolside apartment, steps from the sea in Santa Marta",
      subtitle:
        "A private space to unwind with family, a partner, or friends, close to everything that makes Santa Marta special.",
      primaryCta: "Book",
      secondaryCta: "See amenities",
      ratingLabel: "on Google",
      ratingLinkLabel: `See ${GOOGLE_REVIEW_COUNT} reviews`,
    },
    about: {
      heading: "Your own apartment in the heart of Santa Marta",
      body: "Comuna 4 sits close to everything: the historic center, the Quinta de San Pedro Alejandrino, the marina, and the city's beaches. Here you get a full apartment, not just a hotel room, with a pool, a social area, and everything you need to feel at home from day one.",
      stat1Num: "250+",
      stat1Label: "happy guests",
      stat2Num: "6",
      stat2Label: "years hosting travelers",
      stat3Num: `${GOOGLE_RATING}`,
      stat3Label: "rating on Google",
    },
    // inside dict.en
    video: {
      heading: "Watch the video",
      caption: "This is what a day looks like at Apartamento Martiniano.",
      title: "Property video",
      //   duration: "02:00 min",
    },
    pricing: {
      heading: "Rates",
      // en.pricing
      dateLabel: "Check-in date",
      dateError: "Please select a date to continue.",
      sub: "Tell us how many you are and get the rate instantly.",
      guestsLabel: "How many guests?",
      perNight: "per night",
      cta: "Check availability",
    },
    amenities: {
      heading: "Everything you need, and then some",
      // en
      ctaText: "Have questions about the apartment?",
      ctaButton: "Ask us on WhatsApp",
      items: [
        {
          icon: "pool",
          title: "Pool",
          body: "A spectacular pool, our guests' favorite spot to cool off with family.",
        },
        {
          icon: "desk",
          title: "WiFi & workspace",
          body: "WiFi and a desktop computer for anyone traveling for work.",
        },
        {
          icon: "users",
          title: "Family friendly",
          body: "Comfortable beds and plenty of room to unwind with family, a partner, or friends.",
        },
        {
          icon: "pin",
          title: "Prime location",
          body: "Minutes from the historic center, the marina, and Santa Marta's beaches.",
        },
        {
          icon: "shield",
          title: "Clean & secure",
          body: "Biosecurity and cleanliness looked after in careful detail on every stay.",
        },
      ],
    },
    gallery: {
      heading: "Take a look inside",
      sub: "Real photos of the apartment",
    },
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
      button: "Book",
    },
    footer: {
      tagline: "A poolside apartment in the heart of Santa Marta.",
      quickLinks: "Links",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    whatsappMessage:
      "Hi, I'd like to check availability for the apartment in Santa Marta.",
    langName: "English",
  },
};
