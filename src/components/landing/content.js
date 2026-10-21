// All copy for the restaurant renovation ads landing page lives here.
// Items tagged [CONFIRM] in the brief need client approval before launch.

export const PHONE = { label: "+1 (416) 886-3145", href: "tel:+14168863145" };
export const EMAIL = "Info@dsclinx.com";
export const ADDRESS = "168 Oakdale Rd unit 6, North York, ON M3N 1V9, Canada";

// CTA labels. Brief: one label across the page. [CONFIRM] "Free" wording.
export const CTA = {
  header: "Request a Quote",
  heroButton: "Book a Consultation",
  submit: "Book a Consultation",
  sticky: "Request a Free Quote", // [CONFIRM] "Free"
  process: "Request a Quote",
};

export const HERO = {
  title: "Restaurant Renovation Contractor in Toronto & the GTA",
  image: "/banners/b2.JPEG", // [CONFIRM] real finished restaurant interior
  imageAlt: "Finished restaurant interior renovated by DSC Linx",
  formHeading: "Request a Quote",
};

export const FORM = {
  heading: "Request Your Project Quote",
  supporting: "Tell us about your project. We'll review it and get back to you.",
  projectTypes: [
    "Restaurant Build/Renovation",
    "Commercial Build/Renovation",
    "Others (Need consultation)",
  ],
  startTimes: ["Immediately (0–4 weeks)", "Soon (1–3 months)"], // [CONFIRM] no "just planning" option
  responseTime: "", // [CONFIRM] e.g. "We'll call you within 1 business day."
};

// [CONFIRM] cities, one-line scope and photo permission for each project.
// Cities left empty render as "ON" until the client confirms them.
export const PROJECTS = [
  {
    name: "Amor Shawarma",
    city: "",
    cover: "/projects/AmorShawarma.jpg",
    gallery: [1, 2, 3, 4, 5, 6, 7].map((n) => `/projects/AmorShawarma/${n}.JPG`),
  },
  {
    name: "BeaverTails",
    city: "Mississauga",
    cover: "/projects/BeavertailsMississauga.jpg",
    gallery: [1, 2, 3, 4, 5, 6, 7, 8].map(
      (n) => `/projects/BeavertailsMississauga/${n}.jpg`
    ),
  },
  {
    name: "Hurry Curry",
    city: "",
    cover: "/projects/CenterpointHurryCurry.png",
    gallery: [
      "/projects/CenterpointHurryCurry/1.png",
      "/projects/CenterpointHurryCurry/5.jpeg",
      "/projects/CenterpointHurryCurry/6.jpeg",
      "/projects/CenterpointHurryCurry/7.jpeg",
      "/projects/CenterpointHurryCurry/12.jpeg",
    ],
  },
  {
    name: "Punjabi By Nature",
    city: "",
    cover: "/projects/PunjabiByNature.jpg",
    gallery: [1, 2, 3, 4, 5].map((n) => `/projects/PunjabiByNature/${n}.jpg`),
  },
];

export const SERVICES = {
  heading: "Restaurant Renovation Services",
  image: "/projects/BeavertailsMississauga/1.jpg",
  imageAlt: "Kitchen hood and ductwork installed in a restaurant renovation",
  items: [
    {
      title: "Restaurant Design & Build",
      text: "From concept to completion, we plan, design and build your restaurant space.",
    },
    {
      title: "Renovations & Fit-Outs",
      text: "Update an existing restaurant or fit out a new or leased space.",
    },
    {
      title: "General Contracting",
      text: "Framing, drywall, painting, tiling, flooring and hardware installation, managed by one team.",
    },
    {
      title: "Electrical & Plumbing",
      text: "Wiring, lighting and plumbing installations handled by our skilled team.",
    },
    {
      title: "Kitchen Hood Installation",
      text: "Wall-mounted, island and canopy hoods installed to meet code and fire-safety requirements.",
    },
  ],
};

export const WHY = {
  heading: "Why Restaurant Owners Choose DSC Linx",
  image: "/projects/AmorShawarma.jpg",
  imageAlt: "Restaurant interior built by DSC Linx",
  points: [
    "Design and construction under one roof",
    "One point of contact for the trades",
    "Restaurant kitchen capability: hoods, plumbing, electrical",
    "Restaurant projects across Ontario", // [CONFIRM] ads target the GTA
    "26 Years of Experience", // [CONFIRM] needs founding year or evidence
  ],
  // Google rating, reviews, WSIB, insurance, licences. Add only once verified.
  proof: [],
};

export const PROCESS = {
  heading: "Start Your Restaurant Renovation in",
  headingAccent: "4 Steps",
  steps: [
    "Enquire",
    "Get free consultation", // [CONFIRM] free consultation
    "Discuss the Scope & site visit", // [CONFIRM] site visit
    "Build With One Team",
  ],
};

// [CONFIRM] answers 1, 3, 5, 6: licences, timelines, cities served.
export const FAQS = [
  {
    question: "What restaurant renovation projects do you handle?",
    answer:
      "We renovate, remodel and fit out restaurants, from interior refreshes and layout changes to kitchen upgrades and full design-and-build projects.",
  },
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. DSC Linx offers design, construction and project management together, so one team takes your project from concept to completion.",
  },
  {
    question: "Can you handle the kitchen hood, plumbing and electrical work?",
    answer:
      "Yes. Kitchen hood installation, plumbing and electrical are all part of our services, alongside framing, drywall, painting, tiling and flooring.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Fill in the short form on this page. Tell us about your restaurant and what you want to change, and we'll follow up to discuss your project.",
  },
  {
    question: "How long will a restaurant renovation take?",
    answer:
      "It depends on the scope of work, permits and equipment lead times. Once we understand your project, we'll discuss a realistic schedule with you.",
  },
  {
    question: "Where do you work?",
    answer: "We serve restaurants across the Greater Toronto Area.",
  },
  {
    question: "What should I have ready before I enquire?",
    answer:
      "Your restaurant's address, a rough idea of what you want to change, any existing plans or photos, and your target timeline. If you're still deciding, send what you have and we'll help you shape the scope.",
  },
];
