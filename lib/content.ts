/* ------------------------------------------------------------------ */
/*  All site copy lives here — sourced from webappconsulting.com.au     */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Web App Consulting",
  tagline: "Automation & paperless business is our success",
  phone: "+61 430 496 430",
  phoneHref: "tel:+61430496430",
  email: "hello@webappconsulting.com.au",
  address: "Suite 53B, 239 Magill Road, Maylands SA, 5069",
  year: 2008,
}

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const nav: NavItem[] = [
  { label: "Strategy", href: "/strategy" },
  {
    label: "Technology",
    href: "/technology",
    children: [
      { label: "Microsoft Power Apps", href: "/technology/microsoft-power-apps" },
      { label: "Salesforce Cloud", href: "/technology/salesforce" },
      { label: "ServiceNow", href: "/technology/servicenow" },
      { label: "Integration Solutions", href: "/technology/integration-solutions" },
      { label: "Data Migration", href: "/technology/data-migration" },
      { label: "Payment Gateways", href: "/technology/payment-gateways" },
    ],
  },
  {
    label: "Trainings",
    href: "/trainings",
    children: [
      { label: "Emerging Technology", href: "/trainings/emerging-technology" },
      { label: "Cyber Security", href: "/trainings/cyber-security" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export const heroSlides = [
  {
    kicker: "Do You Need Automation?",
    title: "Streamline your workflows",
    text: "Automating your business process can free time and resources, allowing employees to focus on core work rather than tedious, repetitive, and often frustrating tasks.",
  },
  {
    kicker: "Like To Bring Efficiencies?",
    title: "Operate more efficiently",
    text: "By using systems businesses get the most output from the least possible input. It means doing more with less. Working smarter, not harder.",
  },
  {
    kicker: "Do You Like to Transform?",
    title: "Paperless business operations",
    text: "A paperless office is a workplace that has minimal paper-based processes and relies on digitized documents instead.",
  },
]

export const stats = [
  { value: 16, suffix: "+", label: "Years of automation expertise" },
  { value: 22, suffix: "+", label: "Legacy apps modernised" },
  { value: 9, suffix: "", label: "Enterprise clients served" },
  { value: 100, suffix: "%", label: "Focused on paperless results" },
]

export const automations = [
  "Quoting and work plans",
  "Customer purchase order fulfillment & invoicing",
  "Application approvals",
  "Compliance maintenance",
  "Employee onboarding",
  "Repetitive data entry",
  "Subcontracting workflows",
]

export const whyAutomate = [
  {
    title: "Reduce human error",
    text: "Standardised, system-driven steps remove costly mistakes from repetitive transactions.",
  },
  {
    title: "Lift employee morale",
    text: "Free your people from tedious busywork so they can focus on meaningful, core work.",
  },
  {
    title: "Save real cost",
    text: "Get the most output from the least input — do more with less, every single day.",
  },
  {
    title: "Increase productivity",
    text: "Faster cycles, fewer hand-offs, and reliable outcomes across your whole operation.",
  },
]

export const services = [
  {
    title: "Microsoft Power Apps",
    text: "Low-code business apps that digitise forms, approvals and field workflows fast.",
    icon: "Layers",
  },
  {
    title: "Salesforce Cloud Solutions",
    text: "CRM design, customisation and automation that scales with your sales & service teams.",
    icon: "Cloud",
  },
  {
    title: "ServiceNow",
    text: "Workflow and ITSM automation to streamline requests, approvals and operations.",
    icon: "Workflow",
  },
  {
    title: "Integration Solutions",
    text: "Connect your systems so data flows seamlessly across every IT platform you run.",
    icon: "Network",
  },
  {
    title: "Data Migration Services",
    text: "Safe, structured migration — including 22+ Classic ASP to ASP.NET conversions.",
    icon: "DatabaseZap",
  },
  {
    title: "Payment Gateway Solutions",
    text: "Secure, reliable payment integrations built into your applications end to end.",
    icon: "CreditCard",
  },
]

export const capabilities = [
  "Website Development",
  "Building Applications",
  "SEO & Digital Marketing",
  "Branding and Identity",
  "Digital Images & Videos",
]

export type Client = {
  name: string
  img: string
  note: string
}

export const clients: Client[] = [
  {
    name: "Greyhound Racing SA",
    img: "/images/clients/grsa.jpg",
    note: "First client in Adelaide in 2008 — worked over 5 years as a Content Management Solutionist.",
  },
  {
    name: "Toyota Dealers",
    img: "/images/clients/toyota-dealers.jpg",
    note: "Built landing pages for their marketing teams for leads conversion.",
  },
  {
    name: "Nebula IMS",
    img: "/images/clients/nebula-ims.jpg",
    note: "Software-as-a-Service platform started in 2014 and supported till 2018.",
  },
  {
    name: "Master Plumbers",
    img: "/images/clients/master-plumbers.jpg",
    note: "Built ERP solution — CRM, Human Resource, Project Management.",
  },
  {
    name: "Aussies Discount Chemist",
    img: "/images/clients/aussie-discount-chemist.jpg",
    note: "One platform application built to serve all of their websites — a Content Management Solution.",
  },
  {
    name: "Esena Energy",
    img: "/images/clients/esena-energy.jpg",
    note: "Built a business manager application — converted seven different applications into one platform.",
  },
  {
    name: "Master Builders",
    img: "/images/clients/master-builders.jpg",
    note: "Multiple modules development for their ERP solution.",
  },
  {
    name: "Department of Education",
    img: "/images/clients/dept-of-edu-sa.jpg",
    note: "Over 22 different conversions from Classic ASP to ASP.NET.",
  },
]

export const tags = [
  "Mobile Apps",
  "CRM",
  "Application",
  "ERP",
  "Automation",
  "Web App",
  "Software",
  "Integration",
]

/* ================================================================== */
/*  MULTI-PAGE CONTENT                                                 */
/* ================================================================== */

export type Technology = {
  slug: string
  name: string
  icon: string
  tagline: string
  intro: string
  features: { title: string; text: string }[]
  benefits: string[]
}

export const technologies: Technology[] = [
  {
    slug: "microsoft-power-apps",
    name: "Microsoft Power Apps",
    icon: "Layers",
    tagline: "Low-code apps that digitise work, fast",
    intro:
      "We design Microsoft Power Apps that turn paper forms, manual approvals and field workflows into clean digital experiences — built on the Microsoft stack your business already trusts.",
    features: [
      { title: "Canvas & model-driven apps", text: "Pixel-perfect canvas apps or data-driven model apps tailored to your processes." },
      { title: "Power Automate flows", text: "Automated approvals, notifications and multi-step business logic across systems." },
      { title: "Dataverse & 365 integration", text: "Secure data with Dataverse and seamless links to SharePoint, Teams and Office 365." },
      { title: "Field-ready mobile", text: "Offline-capable apps your team can use on any device, anywhere." },
    ],
    benefits: ["Faster delivery with low-code", "Lower development cost", "Native Microsoft security", "Scales with your org"],
  },
  {
    slug: "salesforce",
    name: "Salesforce Cloud Solutions",
    icon: "Cloud",
    tagline: "CRM that scales with your teams",
    intro:
      "From Sales Cloud to Service Cloud, we design, customise and automate Salesforce so your sales and service teams move faster with a single source of truth.",
    features: [
      { title: "CRM design & setup", text: "Objects, flows and page layouts modelled around how your teams actually work." },
      { title: "Automation & flows", text: "Replace manual steps with automated routing, approvals and follow-ups." },
      { title: "Integrations", text: "Connect Salesforce to your ERP, billing and marketing stack." },
      { title: "Dashboards & reports", text: "Real-time visibility into pipeline, service SLAs and performance." },
    ],
    benefits: ["Single customer view", "Higher conversion", "Automated service", "Actionable analytics"],
  },
  {
    slug: "servicenow",
    name: "ServiceNow",
    icon: "Workflow",
    tagline: "Workflow & ITSM automation",
    intro:
      "We streamline requests, approvals and operations on ServiceNow — turning fragmented processes into governed, automated workflows across the enterprise.",
    features: [
      { title: "ITSM workflows", text: "Incident, request and change management that runs itself." },
      { title: "Approval automation", text: "Multi-stage approvals with full audit trails and notifications." },
      { title: "Service catalogue", text: "Self-service portals that reduce manual ticket handling." },
      { title: "Integrations", text: "Connect ServiceNow to the systems your operations depend on." },
    ],
    benefits: ["Faster resolution", "Governed processes", "Self-service", "Full auditability"],
  },
  {
    slug: "integration-solutions",
    name: "Integration Solutions",
    icon: "Network",
    tagline: "Make your systems talk to each other",
    intro:
      "Disconnected systems create manual re-entry and errors. We connect your applications so data flows seamlessly across every IT platform you run.",
    features: [
      { title: "API integration", text: "Robust, secure APIs linking your core systems in real time." },
      { title: "Middleware & ETL", text: "Reliable data pipelines that move and transform information automatically." },
      { title: "Webhooks & events", text: "Event-driven sync so changes propagate instantly." },
      { title: "Monitoring", text: "Observability so integrations stay healthy and reliable." },
    ],
    benefits: ["No more re-entry", "Fewer errors", "Real-time data", "One connected stack"],
  },
  {
    slug: "data-migration",
    name: "Data Migration Services",
    icon: "DatabaseZap",
    tagline: "Move data safely — including legacy modernisation",
    intro:
      "Safe, structured migration with zero data loss — including 22+ proven conversions from Classic ASP to ASP.NET. We modernise legacy systems without disrupting the business.",
    features: [
      { title: "Assessment & mapping", text: "Full audit of source data, schema mapping and a clear migration plan." },
      { title: "Legacy modernisation", text: "Classic ASP → ASP.NET and other platform upgrades, done reliably." },
      { title: "Validation", text: "Reconciliation and testing so migrated data is accurate and complete." },
      { title: "Cutover", text: "Planned, low-risk go-live with rollback safety." },
    ],
    benefits: ["Zero data loss", "Proven legacy upgrades", "Minimal downtime", "Validated results"],
  },
  {
    slug: "payment-gateways",
    name: "Payment Gateway Solutions",
    icon: "CreditCard",
    tagline: "Secure payments built into your apps",
    intro:
      "We build secure, reliable payment integrations directly into your applications — end to end, from checkout to reconciliation.",
    features: [
      { title: "Gateway integration", text: "Stripe, eWAY and major gateways integrated securely into your stack." },
      { title: "PCI-aware design", text: "Built with security and compliance front of mind." },
      { title: "Recurring & invoicing", text: "Subscriptions, invoices and automated reconciliation." },
      { title: "Reliability", text: "Robust handling of retries, refunds and edge cases." },
    ],
    benefits: ["Secure checkout", "Automated reconciliation", "Recurring billing", "Reliable by design"],
  },
]

export type Capability = {
  title: string
  icon: string
  text: string
}

export const capabilitiesDetailed: Capability[] = [
  { title: "Website Development", icon: "Globe", text: "Fast, modern, responsive websites engineered to convert and built to last." },
  { title: "Building Applications", icon: "AppWindow", text: "Custom web and mobile applications tailored precisely to your business." },
  { title: "SEO & Digital Marketing", icon: "Search", text: "Get found and grow — technical SEO and campaigns that drive real leads." },
  { title: "Branding and Identity", icon: "Palette", text: "Distinctive brand identity, logos and design systems that stand out." },
  { title: "Digital Images & Videos", icon: "Clapperboard", text: "Crisp visuals, product imagery and video that bring your brand to life." },
]

export const strategy = {
  eyebrow: "Digital Transformation Strategy",
  title: "Strategy before",
  highlight: "software",
  intro:
    "Automation without a plan just moves the chaos faster. We start with strategy — mapping your processes, systems and goals — then deliver the right transformation, in the right order.",
  steps: [
    { no: "01", title: "Discover", text: "We map your current processes, systems and the bottlenecks slowing you down." },
    { no: "02", title: "Design", text: "A clear transformation roadmap — what to automate, integrate and modernise, and when." },
    { no: "03", title: "Deliver", text: "We build, integrate and roll out — reusable automation strategies, not one-offs." },
    { no: "04", title: "Optimise", text: "Measure, refine and scale. Continuous improvement across your operation." },
  ],
  outcomes: [
    "Fewer errors and re-work",
    "Higher employee morale",
    "Real cost savings",
    "Increased productivity",
  ],
}

export type Training = {
  slug: string
  name: string
  icon: string
  tagline: string
  intro: string
  modules: string[]
}

export const trainings: Training[] = [
  {
    slug: "emerging-technology",
    name: "Emerging Technology",
    icon: "Rocket",
    tagline: "Skill your team for what's next",
    intro:
      "Hands-on training to help your team adopt emerging technology with confidence — from low-code automation to cloud platforms and AI-assisted workflows.",
    modules: [
      "Low-code & automation fundamentals",
      "Cloud platforms (Microsoft, Salesforce)",
      "Workflow & process automation",
      "AI-assisted productivity",
      "Data & integration basics",
    ],
  },
  {
    slug: "cyber-security",
    name: "Cyber Security",
    icon: "ShieldCheck",
    tagline: "Protect your people and data",
    intro:
      "Practical cyber-security training that turns your team into your first line of defence — awareness, safe practices and incident response, tailored to your business.",
    modules: [
      "Security awareness & phishing",
      "Password & identity hygiene",
      "Safe data handling",
      "Incident response basics",
      "Compliance essentials",
    ],
  },
]

export const about = {
  eyebrow: "About Web App Consulting",
  title: "Adelaide automation specialists",
  highlight: "since 2008",
  intro:
    "We help Australian businesses streamline workflows, modernise legacy systems and go paperless. From our first Adelaide client in 2008 to enterprise platforms today, automation & paperless business has always been our success.",
  values: [
    { title: "Advice first", text: "We bring the strategy and the tools to streamline your business processes — not just code.", icon: "Lightbulb" },
    { title: "Reusable by design", text: "Automation strategies built to be reused across teams and future projects.", icon: "Repeat" },
    { title: "Built to last", text: "16+ years modernising legacy systems into reliable, maintainable platforms.", icon: "Wrench" },
    { title: "Client recognition", text: "Our greatest gratification is recognition for what we build — it drives us to improve.", icon: "Award" },
  ],
  timeline: [
    { year: "2008", text: "First Adelaide client — Greyhound Racing SA, as Content Management Solutionist." },
    { year: "2014", text: "Built Nebula IMS — a SaaS platform supported through 2018." },
    { year: "2018+", text: "ERP solutions for Master Plumbers, Esena Energy, Master Builders and more." },
    { year: "Today", text: "Power Apps, Salesforce, ServiceNow, integrations & paperless transformation." },
  ],
}
