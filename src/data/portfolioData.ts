import { Project, Service, ProcessStep, Testimonial } from '../types';

export const HERO_DATA = {
  name: 'ARTHUR JONES',
  brandName: 'Arth.Jones',
  roleLeft: 'Full-Stack Engineer',
  roleRight: 'AI Systems Architect',
  taglineLeft: 'High-Performance Web',
  taglineCenter: 'Clean Architecture',
  taglineRight: 'Autonomous AI Systems',
};

export const ABOUT_DATA = {
  title: 'About Me',
  subtitle: 'The Code is Only the Foundation',
  p1: 'I engineer production-grade web applications and autonomous AI pipelines. Focused on sub-second load times, fluid motion, and resilient infrastructure.',
  p2: 'Bridging modern full-stack web engineering with agentic AI systems that turn operational friction into automated revenue.',
  stats: [
    { value: '40+', label: 'Shipped Systems' },
    { value: '6+', label: 'Years Experience' },
    { value: '99.9%', label: 'Uptime Standard' },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'neural-ops',
    number: '[01]',
    title: 'NeuralOps Cloud Platform',
    category: 'Enterprise SaaS & Cloud',
    year: '2026',
    client: 'Synthex Enterprise',
    description:
      'High-throughput telemetry dashboard and agent orchestrator built with Next.js 15, TypeScript, and Tailwind CSS.',
    longDescription:
      'Sub-second latency analytics console monitoring distributed microservices. Features streaming SSR, optimistic cache updates, and strict WCAG AA accessibility.',
    image: './images/web_dev_hero_1791238807505.jpg',
    techSpecs: {
      stack: 'Next.js 15 · TypeScript',
      architecture: 'Event-Driven Serverless',
      performance: '99/100 Lighthouse Performance',
      database: 'PostgreSQL + Prisma ORM',
      deployment: 'AWS ECS + Vercel Edge',
    },
    tags: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
    metrics: '<140ms p95 Latency',
  },
  {
    id: 'kroma-commerce',
    number: '[02]',
    title: 'Kroma Luxury Commerce',
    category: 'E-Commerce & Interactive',
    year: '2025',
    client: 'Kroma Atelier',
    description:
      'Headless digital flagship with custom 3D web previewers, instant checkout, and micro-interactions.',
    longDescription:
      'Engineered with Shopify Storefront API, Stripe payment intents, and custom kinetic animations. Delivered a 42% lift in mobile conversion rate.',
    image: './images/service_product_1791230822213.jpg',
    techSpecs: {
      stack: 'React 19 · Motion · Tailwind',
      architecture: 'Headless Jamstack',
      performance: '0.8s First Contentful Paint',
      database: 'Edge Redis Caching',
      deployment: 'Cloudflare Pages',
    },
    tags: ['E-Commerce', 'Stripe', 'Headless', 'Tailwind'],
    metrics: '+42% Mobile Conversion',
  },
  {
    id: 'nexus-vector-agent',
    number: '[03]',
    title: 'Nexus Autonomous AI Pipeline',
    category: 'AI Automation & Agents',
    year: '2026',
    client: 'DataFlow Systems',
    description:
      'Multi-agent workflow automating document parsing, vector indexing, and CRM syncing without manual intervention.',
    longDescription:
      'Custom LLM agent graph utilizing tool calling and semantic vector reranking. Reduced document processing time from 4 hours to 45 seconds.',
    image: './images/ai_automation_hero_1791238819833.jpg',
    techSpecs: {
      stack: 'Python · FastAPI · LangChain',
      architecture: 'Asynchronous DAG Pipeline',
      performance: '12x Throughput Acceleration',
      database: 'Pinecone Vector DB + Redis',
      deployment: 'Docker + Kubernetes',
    },
    tags: ['AI Agent', 'FastAPI', 'Vector Search', 'Automation'],
    metrics: '99.4% Parsing Precision',
  },
  {
    id: 'aether-studio',
    number: '[04]',
    title: 'Aether Collaborative Studio',
    category: 'Real-Time Web Application',
    year: '2025',
    client: 'Vanguard Labs',
    description:
      'Multiplayer design canvas with peer-to-peer cursor synchronization and instant conflict resolution.',
    longDescription:
      'Built with WebSockets, HTML5 Canvas, and CRDT state synchronizers. Supports 50+ concurrent editors per canvas with instant sync.',
    image: './images/service_commercial_1791230786111.jpg',
    techSpecs: {
      stack: 'TypeScript · WebSockets · Canvas',
      architecture: 'CRDT Conflict-Free Replicated Data',
      performance: 'Hardware-Accelerated Render',
      database: 'Supabase Realtime',
      deployment: 'Vercel + Fly.io',
    },
    tags: ['WebSockets', 'Realtime', 'Canvas', 'TypeScript'],
    metrics: '<25ms Peer-to-Peer Sync',
  },
];

export const WEB_SERVICES_DATA: Service[] = [
  {
    id: 'fullstack-apps',
    number: '01',
    title: 'Full-Stack Web Apps',
    subtitle: 'Sub-Second Performance',
    description:
      'Production web applications built with Next.js 15, TypeScript, and modern state architectures. Designed for high concurrency and strict accessibility.',
    image: './images/web_dev_hero_1791238807505.jpg',
    features: [
      'Next.js 15 App Router & Server Actions',
      'End-to-end type safety with TypeScript & Zod',
      'Database modeling (PostgreSQL, Supabase, Prisma)',
      'Sub-second first contentful paint (FCP)',
    ],
    metrics: '100% Type-Safe Architecture',
  },
  {
    id: 'headless-commerce',
    number: '02',
    title: 'Headless E-Commerce',
    subtitle: 'Conversion-Engineered',
    description:
      'Bespoke e-commerce architectures integrating Shopify Storefront, Stripe, and modern Jamstack frontends for instant checkout flows.',
    image: './images/service_product_1791230822213.jpg',
    features: [
      'Shopify GraphQL & custom checkout pipelines',
      'Instant search and faceted filtering',
      'Stripe Elements & secure global payments',
      'Zero-layout-shift kinetic animations',
    ],
    metrics: '3x Faster than Monolithic Stores',
  },
  {
    id: 'realtime-systems',
    number: '03',
    title: 'Real-Time Applications',
    subtitle: 'Zero-Drift WebSockets',
    description:
      'Collaborative dashboards, live data streaming, and multiplayer canvas tools built with WebSockets and CRDT sync mechanisms.',
    image: './images/service_commercial_1791230786111.jpg',
    features: [
      'Bi-directional WebSocket pipelines',
      'Optimistic state updates & offline support',
      'Conflict-free replicated data types (CRDT)',
      'High-frequency telemetry visualization',
    ],
    metrics: '<30ms Latency Broadcast',
  },
  {
    id: 'design-systems',
    number: '04',
    title: 'Design Systems & UI',
    subtitle: 'Modular Engineering',
    description:
      'Accessible, tokenized component libraries built with Tailwind CSS, Radix UI, and motion. Scalable across multi-brand enterprise platforms.',
    image: './images/service_portrait_1791230795589.jpg',
    features: [
      'WCAG AA accessible component libraries',
      'Design token automation (Figma to Code)',
      'Fluid gesture & motion micro-interactions',
      'Comprehensive Storybook documentation',
    ],
    metrics: '100% WCAG AA Compliant',
  },
];

export const AI_SERVICES_DATA: Service[] = [
  {
    id: 'autonomous-agents',
    number: '01',
    title: 'Autonomous LLM Agents',
    subtitle: 'Multi-Step Execution',
    description:
      'Self-directing AI agents equipped with external tools, APIs, and reasoning loops to execute multi-step operations without manual intervention.',
    image: './images/ai_automation_hero_1791238819833.jpg',
    features: [
      'LangGraph & LangChain multi-agent graphs',
      'Deterministic tool use & function calling',
      'Human-in-the-loop escalation gates',
      'Cost and token budget optimization',
    ],
    metrics: '85% Operational Task Automation',
  },
  {
    id: 'enterprise-rag',
    number: '02',
    title: 'Enterprise RAG Systems',
    subtitle: 'Grounded Intelligence',
    description:
      'Custom retrieval-augmented generation pipelines querying internal documentation, codebases, and vector stores with zero hallucinations.',
    image: './images/web_dev_hero_1791238807505.jpg',
    features: [
      'Hybrid semantic vector & keyword search',
      'Cohere & BGE neural reranking models',
      'Dynamic chunking & metadata enrichment',
      'Hallucination guardrails & citation anchors',
    ],
    metrics: '99.4% Verified Retrieval Accuracy',
  },
  {
    id: 'intelligent-etl',
    number: '03',
    title: 'Intelligent ETL Pipelines',
    subtitle: 'Unstructured Data Parsing',
    description:
      'Automated extraction pipelines turning PDFs, invoices, contracts, and audio recordings into structured JSON and relational database records.',
    image: './images/service_commercial_1791230786111.jpg',
    features: [
      'Vision LLM document & table extraction',
      'Schema validation with Pydantic & Zod',
      'Automated error recovery and dead-letter queues',
      'Direct webhook sync to ERP & CRM systems',
    ],
    metrics: '12x Faster Document Processing',
  },
  {
    id: 'workflow-automation',
    number: '04',
    title: 'Customer & Ops Workflows',
    subtitle: '24/7 Precision Action',
    description:
      'Autonomous integration pipelines orchestrating Hubspot, Slack, Linear, Stripe, and customer support channels with custom AI agents.',
    image: './images/service_portrait_1791230795589.jpg',
    features: [
      'Automated inbound lead qualification',
      'Real-time support ticket resolution bots',
      'Autonomous billing anomaly alerts',
      'Unified audit logs & performance analytics',
    ],
    metrics: '<60s Lead Response Time',
  },
];

export const SERVICES_DATA: Service[] = [
  WEB_SERVICES_DATA[0], // Full-Stack Web Apps
  AI_SERVICES_DATA[0],  // Autonomous LLM Agents
  WEB_SERVICES_DATA[1], // Headless E-Commerce
  AI_SERVICES_DATA[1],  // Enterprise RAG Systems
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Architecture & Specs',
    description:
      'We define data schemas, API contracts, latency budgets, and security parameters before writing code. Total clarity on deliverables and technical tradeoffs.',
  },
  {
    number: '02',
    title: 'Full-Stack Build',
    description:
      'Rapid iterative engineering with Next.js, TypeScript, and modern component systems. Daily test builds, clean commits, and end-to-end type safety.',
  },
  {
    number: '03',
    title: 'AI & Performance Tuning',
    description:
      'Benchmarking sub-second render times, optimizing vector retrieval pipelines, caching database queries, and verifying zero memory leaks.',
  },
  {
    number: '04',
    title: 'CI/CD & Production SLA',
    description:
      'Automated staging and production deployment pipelines with health monitoring, audit logs, and documentation for seamless team handoff.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'Studio Verity',
    quote:
      'Arthur transformed our legacy web stack into a sub-second Next.js platform. Exceptional code cleanliness, type safety, and architectural discipline.',
    avatar: './images/service_portrait_1791230795589.jpg',
    initials: 'SJ',
  },
  {
    id: 'mia-drake',
    name: 'Marcus Drake',
    role: 'Founder & CEO',
    company: 'Amalfi Health',
    quote:
      'The AI automation pipeline Arthur designed cut our patient onboarding processing time from 3 hours to under 2 minutes. A complete game-changer.',
    avatar: './images/service_wedding_1791230777108.jpg',
    initials: 'MD',
    highlight: true,
  },
  {
    id: 'shane',
    name: 'Shane Vance',
    role: 'Head of Product',
    company: 'Apex Cloud',
    quote:
      'Working with Arthur was effortless. He delivers production-grade web systems on schedule with zero tech debt.',
    avatar: './images/review_shane_1791232155290.jpg',
    initials: 'SV',
  },
  {
    id: 'soham',
    name: 'Soham Mehta',
    role: 'Operations Director',
    company: 'Verve Logistics',
    quote:
      'Our autonomous document extraction pipeline now runs 24/7 with 99.4% precision. The ROI was evident within our first two weeks of deployment.',
    avatar: './images/review_soham_1791232166433.jpg',
    initials: 'SM',
  },
  {
    id: 'aubrey',
    name: 'Aubrey Chen',
    role: 'Lead Architect',
    company: 'Nordic FinTech',
    quote:
      'Arthur engineered our real-time trading dashboard with flawless WebSocket sync. His attention to micro-interactions and performance is unmatched.',
    avatar: './images/review_aubrey_1791232177259.jpg',
    initials: 'AC',
  },
  {
    id: 'lisa',
    name: 'Lisa Hoffman',
    role: 'Chief Technology Officer',
    company: 'Lumiere AI',
    quote:
      'A rare engineer who masters both frontend craft and deep backend AI agent orchestration. An indispensable technical partner.',
    avatar: './images/review_lisa_1791232186843.jpg',
    initials: 'LH',
  },
];
