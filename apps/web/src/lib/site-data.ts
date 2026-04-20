import type {
  BlogPost,
  CaseStudy,
  ClientLogo,
  PackageItem,
  ServiceItem,
  TeamMember,
  Testimonial,
} from '@/types/site';

export const heroImage = 'https://images.pexels.com/photos/8867261/pexels-photo-8867261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const services: ServiceItem[] = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description: 'Design, build, and modernize business-critical applications with senior delivery teams that move fast without losing control.',
    category: 'engineering',
    bullets: ['Discovery and architecture workshops', 'React, API, and cloud-native delivery', 'Analytics and AI automation opportunities'],
    metric: 'Launch MVPs in as little as 10 weeks',
  },
  {
    id: 'cloud-platform',
    title: 'Cloud & Platform',
    description: 'Create resilient infrastructure, streamline deployments, and reduce operational drag with pragmatic platform engineering.',
    category: 'infrastructure',
    bullets: ['AWS and Azure migration roadmaps', 'Infrastructure as code and CI/CD setup', 'Observability and uptime improvement plans'],
    metric: 'Lower hosting waste by up to 28%',
  },
  {
    id: 'security-resilience',
    title: 'Security & Resilience',
    description: 'Harden systems, close audit gaps, and improve recovery readiness with security-first operating models.',
    category: 'security',
    bullets: ['Security assessments and remediation plans', 'Identity, backup, and disaster recovery controls', 'Compliance prep for growing teams'],
    metric: 'Reduce critical exposure windows from weeks to days',
  },
  {
    id: 'managed-it',
    title: 'Managed IT Operations',
    description: 'Extend your internal team with proactive support, vendor coordination, and clear service-level accountability.',
    category: 'managed',
    bullets: ['Helpdesk and device lifecycle support', 'Vendor management and escalation ownership', 'Monthly reporting for operations leaders'],
    metric: 'One partner across support, strategy, and execution',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'northstar-cloud',
    title: 'Northstar Health Cloud Replatform',
    category: 'cloud',
    client: 'Northstar Health',
    sector: 'Healthcare Operations',
    summary: 'Moved a regional healthcare group from fragile on-prem systems to a governed cloud platform with faster reporting and better uptime.',
    challenge: 'Legacy systems created reporting delays, backup risk, and long release cycles across five locations.',
    solution: [
      'Rebuilt the deployment pipeline with infrastructure as code and automated testing.',
      'Migrated core workloads to a secure cloud landing zone with role-based access.',
      'Introduced executive dashboards for uptime, release health, and incident response.',
    ],
    results: [
      '99.95% availability across business-critical systems',
      'Deployment frequency improved from monthly to weekly',
      'Backup recovery tests completed successfully across all locations',
    ],
    metrics: [
      { label: 'Availability', value: '99.95%' },
      { label: 'Release speed', value: '4x faster' },
      { label: 'Reporting time', value: '70% lower' },
    ],
    image: 'https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'High-tech server rack in a secure data center with network cables and hardware components.',
  },
  {
    id: 'vector-logistics',
    title: 'Vector Logistics Workflow Automation',
    category: 'platform',
    client: 'Vector Logistics',
    sector: 'Supply Chain',
    summary: 'Delivered a custom operations platform that unified dispatch, warehouse visibility, and client reporting.',
    challenge: 'The operations team relied on spreadsheets and disconnected software, which slowed order handoffs and obscured exceptions.',
    solution: [
      'Mapped workflow bottlenecks with operations leaders and dispatch managers.',
      'Built a role-based web application connecting inventory, shipping, and reporting data.',
      'Added automated alerts and client-facing status views to reduce support tickets.',
    ],
    results: [
      'Manual status updates dropped by 61%',
      'Order exception resolution improved by 35%',
      'Client satisfaction scores increased after launch',
    ],
    metrics: [
      { label: 'Manual work', value: '-61%' },
      { label: 'Issue resolution', value: '+35%' },
      { label: 'Client visibility', value: '24/7' },
    ],
    image: 'https://images.pexels.com/photos/4483561/pexels-photo-4483561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Overhead view of warehouse workers having a meeting with forklift equipment. Collaborative workplace scenario.',
  },
  {
    id: 'summit-finance',
    title: 'Summit Finance Security Response Program',
    category: 'security',
    client: 'Summit Finance',
    sector: 'Financial Services',
    summary: 'Established monitoring, recovery playbooks, and executive reporting for a regulated finance team preparing for growth.',
    challenge: 'Security tooling was fragmented, incident ownership was unclear, and the leadership team lacked measurable risk visibility.',
    solution: [
      'Consolidated monitoring signals and prioritized high-risk alerts with response playbooks.',
      'Implemented identity controls, backup validation, and tabletop exercises.',
      'Created a monthly risk scorecard for executives and auditors.',
    ],
    results: [
      'Mean time to detect reduced by 48%',
      'Audit preparation moved from scramble to repeatable process',
      'Leadership gained monthly security posture reporting',
    ],
    metrics: [
      { label: 'MTTD', value: '-48%' },
      { label: 'Audit readiness', value: '100%' },
      { label: 'Executive reporting', value: 'Monthly' },
    ],
    image: 'https://images.pexels.com/photos/5831253/pexels-photo-5831253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Stock trader analyzing financial graphs on multiple computer monitors in an office setting.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'AnchorTech helped us replace reactive firefighting with a roadmap our board could understand. They paired strategy with hands-on delivery from day one.',
    author: 'Melissa Grant',
    role: 'COO',
    company: 'Northstar Health',
  },
  {
    id: '2',
    quote: 'The team translated operational pain points into a platform our warehouse managers actually use. Adoption was strong because they listened before building.',
    author: 'Derrick Vaughn',
    role: 'VP Operations',
    company: 'Vector Logistics',
  },
  {
    id: '3',
    quote: 'Their security program gave us structure, measurable progress, and confidence during a critical audit window. We now have clear owners and better visibility.',
    author: 'Anika Shah',
    role: 'Director of IT',
    company: 'Summit Finance',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'olivia',
    name: 'Olivia Mercer',
    role: 'Founder & Principal Strategist',
    bio: 'Olivia leads complex technology transformations for growth-stage and mid-market organizations, blending executive advisory work with delivery governance.',
    specialties: ['Transformation roadmaps', 'Executive stakeholder alignment', 'Delivery governance'],
    image: 'https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    id: 'marcus',
    name: 'Marcus Reed',
    role: 'Head of Engineering',
    bio: 'Marcus architects cloud-native platforms and mentors delivery teams across modern front-end, API, and DevOps disciplines.',
    specialties: ['Platform architecture', 'Engineering leadership', 'Automation and observability'],
    image: 'https://images.pexels.com/photos/8353832/pexels-photo-8353832.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    id: 'sofia',
    name: 'Sofia Bennett',
    role: 'Director of Client Operations',
    bio: 'Sofia ensures programs stay aligned to business outcomes with crisp communication, weekly accountability, and operational follow-through.',
    specialties: ['Client success', 'Program operations', 'Managed services delivery'],
    image: 'https://images.pexels.com/photos/32844866/pexels-photo-32844866.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
];

export const packages: PackageItem[] = [
  {
    id: 'starter',
    name: 'Starter Advisory',
    tier: 'starter',
    price: '$3.5k',
    audience: 'For teams validating priorities before a larger investment.',
    description: 'A short diagnostic engagement that clarifies architecture, delivery risk, and the next 90-day plan.',
    features: ['Leadership discovery workshop', 'Technology and process assessment', 'Prioritized action roadmap', 'Executive readout session'],
    ctaLabel: 'Book a diagnostic',
  },
  {
    id: 'growth',
    name: 'Growth Delivery',
    tier: 'growth',
    price: '$12k / month',
    audience: 'For businesses shipping products, migrations, or platform improvements this quarter.',
    description: 'A blended strategy and delivery package with dedicated technical leadership and sprint-based execution.',
    features: ['Fractional CTO or delivery lead', 'Engineering squad oversight', 'Biweekly roadmap and KPI reviews', 'Priority support for business stakeholders'],
    ctaLabel: 'Discuss your roadmap',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Partnership',
    tier: 'enterprise',
    price: 'Custom scope',
    audience: 'For organizations needing cross-functional modernization, security, or managed IT partnership.',
    description: 'A tailored engagement spanning multiple teams, governance structures, and measurable transformation outcomes.',
    features: ['Multi-workstream governance', 'Security and resilience planning', 'Managed operations and vendor coordination', 'Quarterly executive strategy sessions'],
    ctaLabel: 'Request a proposal',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'modernize-without-chaos',
    title: 'How to modernize operations without disrupting the business',
    category: 'Delivery Strategy',
    excerpt: 'A practical framework for sequencing migrations, platform investments, and stakeholder communication so teams keep shipping while modernizing.',
    readTime: '6 min read',
    publishedAt: 'Apr 2026',
  },
  {
    id: 'security-buy-in',
    title: 'Security programs that earn executive buy-in',
    category: 'Security',
    excerpt: 'Why measurable reporting, clear ownership, and recovery drills matter more than tool sprawl when leaders evaluate technology risk.',
    readTime: '5 min read',
    publishedAt: 'Mar 2026',
  },
  {
    id: 'managed-it-sla',
    title: 'What strong managed IT reporting should look like',
    category: 'Managed Services',
    excerpt: 'Learn which service metrics help operations leaders understand recurring issues, vendor performance, and support team effectiveness.',
    readTime: '4 min read',
    publishedAt: 'Feb 2026',
  },
];

export const clientLogos: ClientLogo[] = [
  { id: 'northstar', name: 'Northstar Health', tagline: 'Healthcare systems' },
  { id: 'vector', name: 'Vector Logistics', tagline: 'Supply chain operations' },
  { id: 'summit', name: 'Summit Finance', tagline: 'Financial services' },
  { id: 'harbor', name: 'Harbor Retail Group', tagline: 'Retail infrastructure' },
  { id: 'bluepeak', name: 'BluePeak Manufacturing', tagline: 'Industrial technology' },
  { id: 'aerion', name: 'Aerion Energy', tagline: 'Field operations' },
];

export const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Case Studies' },
  { id: 'pricing', label: 'Packages' },
  { id: 'insights', label: 'Insights' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
] as const;
