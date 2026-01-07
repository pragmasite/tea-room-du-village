export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      services: "Nos prestations",
      gallery: "Galerie",
      hours: "Horaires",
      contact: "Contact",
      call: "Appeler",
      profession: "SALON DE THÉ",
    },
    hero: {
      badge: "Bienvenue au Tea-Room du Village",
      title1: "Détente et saveurs",
      title2: "authentiques",
      description: "Un salon de thé chaleureux au cœur du village avec plus de 15 thés, plats frais et desserts maison",
      sendEmail: "Envoyer un email",
      location: "Prangins, Suisse",
    },
    about: {
      label: "À propos",
      title1: "Votre destination",
      title2: "idéale à Prangins",
      p1: "Le Tea-Room du Village est idéalement situé au centre du village, à proximité du château de Prangins. Un lieu chaleureux et accueillant où se détendre en bonne compagnie.",
      p2: "Nous utilisons uniquement des ingrédients frais pour préparer une cuisine simple, rapide et toujours délicieuse. Que vous cherchiez un moment de détente avec des amis ou un repas entre midi et 14h, vous serez toujours les bienvenu(e)s.",
      stat1: "Tasses servies",
      stat2: "Thés différents",
      stat3: "Clients satisfaits",
      features: [
        { title: "Plus de 15 thés", description: "Une sélection variée de thés pour tous les goûts" },
        { title: "Cuisine fraîche", description: "Ingrédients frais et recettes maison chaque jour" },
        { title: "Ambiance chaleureuse", description: "Un cadre accueillant à l'intérieur ou en terrasse" },
        { title: "Service rapide", description: "Repas midi à midi en 2 heures maximum" },
      ],
    },
    services: {
      label: "Nos prestations",
      title: "Ce que nous vous proposons",
      description: "Découvrez nos spécialités et services",
      items: [
        { title: "Salade fraîche", description: "Salade du jour avec ingrédients frais de saison" },
        { title: "Croque Monsieur", description: "Notre spécialité : croque monsieur grillé maison" },
        { title: "Plat du jour", description: "Sélection quotidienne de plats savoureux" },
        { title: "Poisson du lac", description: "Poisson frais du lac, préparation de saison" },
        { title: "Desserts maison", description: "Délicieux desserts confectionnés sur place" },
        { title: "Sélection de thés", description: "Plus de 15 thés différents à découvrir" },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Nos réalisations",
      description: "Découvrez nos plats et notre ambiance",
    },
    hours: {
      label: "Horaires",
      title: "Heures d'ouverture",
      header: "Heures d'ouverture",
      today: "Aujourd'hui",
      closed: "Fermé",
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    },
    contact: {
      label: "Contact",
      title1: "Nous contacter",
      title2: "facilement",
      description: "Vous avez une question ou souhaitez une réservation? Contactez-nous directement.",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      cta: "Appelez maintenant",
      callNow: "Appelez maintenant",
    },
    footer: {
      tagline: "Salon de Thé",
      description: "Le Tea-Room du Village à Prangins - Votre lieu de détente favori",
      navigation: "Navigation",
      about: "À propos",
      copyright: "Tous droits réservés.",
    },
    disclaimer: {
      title: "Aperçu du site",
      items: [
        "Ce site web est un brouillon de prévisualisation",
        "Il n'est pas référencé sur Google",
        "Il peut contenir des erreurs ou des inexactitudes",
      ],
      button: "J'ai compris",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "TEA ROOM",
    },
    hero: {
      badge: "Welcome to Tea-Room du Village",
      title1: "Relaxation and",
      title2: "authentic flavors",
      description: "A warm tea room in the heart of the village with over 15 teas, fresh dishes and homemade desserts",
      sendEmail: "Send email",
      location: "Prangins, Switzerland",
    },
    about: {
      label: "About",
      title1: "Your ideal",
      title2: "destination in Prangins",
      p1: "The Tea-Room du Village is ideally located in the center of the village, near Prangins Castle. A warm and welcoming place to relax in good company.",
      p2: "We use only fresh ingredients to prepare simple, quick and always delicious cuisine. Whether you're looking for a relaxing moment with friends or a meal between noon and 2 pm, you will always be welcome.",
      stat1: "Cups served",
      stat2: "Different teas",
      stat3: "Satisfied clients",
      features: [
        { title: "Over 15 teas", description: "A varied selection of teas for all tastes" },
        { title: "Fresh cuisine", description: "Fresh ingredients and homemade recipes every day" },
        { title: "Warm atmosphere", description: "A welcoming setting inside or on the terrace" },
        { title: "Quick service", description: "Lunch meals in a maximum of 2 hours" },
      ],
    },
    services: {
      label: "Services",
      title: "What we offer",
      description: "Discover our specialties and services",
      items: [
        { title: "Fresh Salad", description: "Salad of the day with fresh seasonal ingredients" },
        { title: "Croque Monsieur", description: "Our specialty: grilled homemade croque monsieur" },
        { title: "Dish of the Day", description: "Daily selection of delicious dishes" },
        { title: "Lake Fish", description: "Fresh lake fish, seasonal preparation" },
        { title: "Homemade Desserts", description: "Delicious desserts made on the premises" },
        { title: "Tea Selection", description: "Over 15 different teas to discover" },
      ],
    },
    gallery: {
      label: "Gallery",
      title: "Our creations",
      description: "Discover our dishes and atmosphere",
    },
    hours: {
      label: "Hours",
      title: "Opening hours",
      header: "Opening hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "Contact",
      title2: "us easily",
      description: "Have a question or want to make a reservation? Contact us directly.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Call now",
      callNow: "Call now",
    },
    footer: {
      tagline: "Tea Room",
      description: "Tea-Room du Village in Prangins - Your favorite place to relax",
      navigation: "Navigation",
      about: "About",
      copyright: "All rights reserved.",
    },
    disclaimer: {
      title: "Website Preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "I understand",
    },
  },
};

export interface Translations {
  nav: {
    about: string;
    services: string;
    gallery: string;
    hours: string;
    contact: string;
    call: string;
    profession: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    sendEmail: string;
    location: string;
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
    stat3: string;
    features: Array<{ title: string; description: string }>;
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
  };
  hours: {
    label: string;
    title: string;
    header: string;
    today: string;
    closed: string;
    days: string[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
    callNow: string;
  };
  footer: {
    tagline: string;
    description: string;
    navigation: string;
    about: string;
    copyright: string;
  };
  disclaimer: {
    title: string;
    items: string[];
    button: string;
  };
}
