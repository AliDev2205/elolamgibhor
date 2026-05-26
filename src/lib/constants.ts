export const SITE_NAME = "EL OLAM GIBHOR";
export const SITE_TAGLINE = "Structuration Financière & Conseil Stratégique";
export const LOGO_SRC = "/img/logo.png";
export const SITE_DESCRIPTION =
  "EL OLAM GIBHOR accompagne les PME binationales Afrique-Europe dans la structuration financière, le pilotage stratégique et la conformité fiscale. Bâtissez une entreprise solide, pilotée par les chiffres.";

export const CONTACT_INFO = {
  address: "23B Avenue de la Réunion, 93600 Aulnay-sous-Bois, France",
  phone: "+33 7 59 87 37 08",
  email: "contact@elolamgibhor.com",
  hours: "Lun–Ven : 9h00–18h00 (Europe) / 8h00–17h00 (Afrique)",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.0!2d2.447369!3d6.38619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjMnMTAuMyJOIDLCsDI2JzUwLjUiRQ!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { name: "Twitter", href: "https://twitter.com", icon: "Twitter" },
];

export interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Formation", href: "/formation" },
  { name: "Contact", href: "/contact" },
];

// ─── HERO ─────────────────────────────────────────────────
export const HERO = {
  badge: "Cabinet de Structuration Financière & Stratégique",
  title: "Bâtissez une entreprise solide, pilotée par les chiffres et libérée du stress.",
  subtitle:
    "L'expertise financière, fiscale et stratégique dédiée aux PME binationales Afrique–Europe.",
  ctaPrimary: "Réserver mon diagnostic stratégique",
  ctaSecondary: "Découvrir nos solutions",
};

// ─── PROBLÈMES CLIENTS ───────────────────────────────────
export const CLIENT_PROBLEMS = [
  {
    title: "Manque de visibilité financière",
    description:
      "Vous naviguez à vue, sans tableaux de bord ni indicateurs clairs pour piloter votre croissance.",
    icon: "EyeOff",
  },
  {
    title: "Croissance mal maîtrisée",
    description:
      "Votre chiffre d'affaires augmente mais vos marges s'érodent et votre trésorerie reste fragile.",
    icon: "TrendingDown",
  },
  {
    title: "Risques fiscaux latents",
    description:
      "L'absence de structuration fiscale vous expose à des redressements et pénalités coûteuses.",
    icon: "AlertTriangle",
  },
  {
    title: "Absence de pilotage stratégique",
    description:
      "Les décisions se prennent dans l'urgence, sans données fiables ni vision à long terme.",
    icon: "Compass",
  },
];

// ─── OFFRE PHARE ──────────────────────────────────────────
export const OFFRE_PHARE = {
  badge: "Offre phare",
  title: "GIBHOR Pilotage 360°",
  subtitle: "L'accompagnement complet pour structurer, piloter et sécuriser votre entreprise.",
  description:
    "Une offre intégrée qui combine diagnostic financier approfondi, mise en place de tableaux de bord, structuration fiscale et accompagnement stratégique du dirigeant. Tout ce dont votre PME a besoin pour passer au niveau supérieur.",
  benefits: [
    { text: "Sécurisation fiscale et juridique complète", icon: "Shield" },
    { text: "Pilotage financier en temps réel", icon: "BarChart3" },
    { text: "Tableaux de bord décisionnels sur-mesure", icon: "LayoutDashboard" },
    { text: "Accompagnement stratégique du dirigeant", icon: "UserCheck" },
    { text: "Optimisation de la trésorerie et des marges", icon: "Wallet" },
    { text: "Reporting mensuel et prévisionnels", icon: "FileText" },
  ],
  cta: "Demander une présentation",
};

// ─── SERVICES ─────────────────────────────────────────────
export const SERVICES = [
  {
    id: "audit-strategique",
    title: "Audit Stratégique",
    description:
      "Diagnostic complet de votre organisation pour identifier les leviers de croissance et les zones de risque.",
    icon: "Search",
    details: [
      "Analyse SWOT et positionnement marché",
      "Diagnostic de la chaîne de valeur",
      "Identification des leviers de performance",
      "Recommandations actionables",
    ],
  },
  {
    id: "structuration-financiere",
    title: "Structuration Financière",
    description:
      "Mise en place d'architectures financières solides pour sécuriser et accélérer votre développement.",
    icon: "Building2",
    details: [
      "Ingénierie financière et montages",
      "Recherche de financements",
      "Optimisation du bilan",
      "Planification prévisionnelle",
    ],
  },
  {
    id: "transformation-digitale",
    title: "Transformation Digitale",
    description:
      "Digitalisation de vos processus financiers et stratégiques pour une prise de décision accélérée.",
    icon: "Cpu",
    details: [
      "Déploiement ERP et outils BI",
      "Automatisation du reporting",
      "Dashboards décisionnels",
      "Formation des équipes",
    ],
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description:
      "Exploitez la puissance de vos données pour éclairer chaque décision stratégique de l'entreprise.",
    icon: "BarChart3",
    details: [
      "Conception de KPIs pertinents",
      "Tableaux de bord interactifs",
      "Analyse prédictive",
      "Data storytelling pour dirigeants",
    ],
  },
  {
    id: "accompagnement-dirigeant",
    title: "Accompagnement Dirigeant",
    description:
      "Un partenaire stratégique à vos côtés pour prendre les bonnes décisions au bon moment.",
    icon: "Users",
    details: [
      "Coaching stratégique individuel",
      "Sparring partner financier",
      "Préparation comités de direction",
      "Gestion de crise et arbitrages",
    ],
  },
  {
    id: "conformite-fiscale",
    title: "Conformité Fiscale",
    description:
      "Sécurisez votre entreprise face aux obligations fiscales en France, en Afrique et à l'international.",
    icon: "ShieldCheck",
    details: [
      "Audit de conformité fiscale",
      "Optimisation légale de la charge fiscale",
      "Gestion des prix de transfert",
      "Veille réglementaire internationale",
    ],
  },
];

// ─── STATISTIQUES ─────────────────────────────────────────
export const STATS = [
  { value: "12+", label: "Années d'expérience" },
  { value: "150+", label: "PME accompagnées" },
  { value: "97%", label: "Taux de satisfaction" },
  { value: "35%", label: "Croissance moyenne" },
];

// ─── FONDATEUR ────────────────────────────────────────────
export const FOUNDER = {
  name: "Ulrich Adebiaye",
  role: "Fondateur & Directeur Stratégique",
  image: "/img/fondateur.jpg",
  bio: "Fort de plus de 12 ans d'expérience en structuration financière et conseil stratégique entre l'Afrique et l'Europe, Ulrich Adebiaye a fondé EL OLAM GIBHOR avec une conviction : chaque PME mérite un pilotage financier de niveau international.",
  expertise: [
    "Structuration financière internationale",
    "Pilotage stratégique de PME",
    "Conformité fiscale multi-juridictionnelle",
    "Transformation digitale des fonctions finance",
  ],
  quote:
    "Mon ambition est de donner aux dirigeants africains et européens les mêmes armes stratégiques que les grands groupes internationaux.",
};

// ─── PROCESSUS ────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diagnostic",
    description:
      "Analyse approfondie de votre situation financière, fiscale et stratégique pour identifier les priorités.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Structuration",
    description:
      "Mise en place des fondations solides : organisation comptable, fiscale et outils de pilotage.",
    icon: "Wrench",
  },
  {
    step: "03",
    title: "Pilotage",
    description:
      "Déploiement de tableaux de bord et d'indicateurs clés pour un suivi en temps réel de la performance.",
    icon: "Gauge",
  },
  {
    step: "04",
    title: "Croissance",
    description:
      "Accélération maîtrisée avec un accompagnement stratégique continu et des décisions éclairées.",
    icon: "Rocket",
  },
];

// ─── TÉMOIGNAGES ──────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "Grâce à EL OLAM GIBHOR, nous avons enfin une visibilité claire sur nos finances. Les tableaux de bord mis en place ont transformé notre façon de piloter l'entreprise.",
    author: "Amadou Diallo",
    position: "CEO, AfriTech Solutions",
    company: "AfriTech Solutions",
  },
  {
    quote:
      "Leur expertise en structuration fiscale nous a permis d'économiser plus de 120 000 € sur notre première année de collaboration. Un investissement rentabilisé en 3 mois.",
    author: "Sophie Lambert",
    position: "Directrice Financière, EurAfrique Import",
    company: "EurAfrique Import",
  },
  {
    quote:
      "Ulrich et son équipe comprennent parfaitement les enjeux des PME binationales. Leur accompagnement stratégique nous a permis de doubler notre chiffre d'affaires en 18 mois.",
    author: "Jean-Philippe Kouadio",
    position: "Fondateur, Groupe KBS",
    company: "Groupe KBS",
  },
];

// ─── FAQ ──────────────────────────────────────────────────
export const FAQ = [
  {
    question: "À qui s'adressent les services d'EL OLAM GIBHOR ?",
    answer:
      "Nos services s'adressent principalement aux PME binationales opérant entre l'Afrique et l'Europe, ainsi qu'aux dirigeants souhaitant structurer leur entreprise avec des outils de pilotage financier de niveau international.",
  },
  {
    question: "Qu'est-ce que l'offre GIBHOR Pilotage 360° ?",
    answer:
      "C'est notre offre phare qui combine diagnostic financier, structuration fiscale, mise en place de tableaux de bord décisionnels et accompagnement stratégique du dirigeant. Une solution complète pour piloter votre entreprise sereinement.",
  },
  {
    question: "Comment se déroule un diagnostic stratégique ?",
    answer:
      "Le diagnostic dure généralement 2 à 3 semaines. Il comprend l'analyse de vos états financiers, l'évaluation de votre organisation, l'identification des risques fiscaux et la remise d'un rapport détaillé avec des recommandations actionables.",
  },
  {
    question: "Intervenez-vous à distance ou uniquement sur place ?",
    answer:
      "Nous intervenons aussi bien en présentiel qu'à distance grâce à nos outils digitaux. Notre modèle hybride nous permet d'accompagner des clients dans toute la France, en Afrique de l'Ouest et en Afrique Centrale.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Nos tarifs dépendent de la complexité de votre situation et du périmètre de la mission. Nous proposons un premier échange gratuit de 30 minutes pour comprendre vos besoins et vous adresser une proposition sur-mesure.",
  },
  {
    question: "Quelle est la durée moyenne d'un accompagnement ?",
    answer:
      "La durée varie selon les besoins : de missions ponctuelles de 1 à 3 mois (audit, structuration) à des accompagnements continus sur 6 à 12 mois pour le pilotage stratégique et l'offre Pilotage 360°.",
  },
];

// ─── CTA FINAL ────────────────────────────────────────────
export const CTA_FINAL = {
  title: "Vous n'avez pas besoin de plus de prestataires.",
  highlight: "Vous avez besoin d'un pilote.",
  description:
    "Prenez le contrôle de vos finances et de votre stratégie avec un partenaire qui comprend vos enjeux.",
  cta: "Réserver un diagnostic stratégique",
};
