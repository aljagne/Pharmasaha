/* ─────────────────────────────────────────────────────────
   Unified Article Data & Types
   ───────────────────────────────────────────────────────── */

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  excerpt: string;
  featured: boolean;
  /** Full body in markdown-like sections for the blog post page */
  body: ArticleSection[];
}

export interface ArticleSection {
  heading?: string;
  content: string;
  pullQuote?: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "cold-chain-paradox-west-africa",
    title: "The Cold Chain Paradox: Why Last-Mile Infrastructure is Outpacing Core Ports in West Africa.",
    category: "Infrastructure",
    date: "August 2026",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80&w=1200",
    excerpt: "An in-depth analysis of the surprising infrastructure inversion happening across West African pharmaceutical supply chains.",
    featured: true,
    body: [
      {
        heading: "The Infrastructure Inversion",
        content: "Across West Africa, a surprising pattern is emerging in pharmaceutical logistics. While major port cities like Dakar and Lagos have long been considered the backbone of the supply chain, it's the last-mile infrastructure in secondary cities and rural corridors that is seeing the most dramatic modernization. This inversion challenges conventional wisdom about top-down infrastructure development and reveals new opportunities for strategic investment.",
        pullQuote: "The real revolution isn't happening at the ports — it's happening in the last 50 kilometers."
      },
      {
        heading: "Cold Chain: The Critical Link",
        content: "Temperature-sensitive pharmaceuticals, particularly biologics and vaccines, demand an unbroken cold chain from manufacturer to patient. Traditional models focused on maintaining cold storage at major distribution hubs. However, new solar-powered cold storage units and IoT-enabled monitoring systems are being deployed directly at community health centers, effectively decentralizing the cold chain. Companies like PharmaSaha are at the forefront of this shift, partnering with local health ministries to deploy modular cold-storage solutions that can maintain -20°C to +8°C environments even in areas with unreliable grid power."
      },
      {
        heading: "Investment Implications",
        content: "For investors and pharmaceutical companies considering West African market entry, this infrastructure inversion presents both opportunities and challenges. The decentralization of cold chain assets means lower barriers to entry for last-mile distribution, but it also requires a fundamentally different operational model. Success requires deep partnerships with local logistics operators, community health networks, and government agencies. The companies that thrive will be those that embrace hybrid models — combining centralized quality control with decentralized delivery networks."
      },
      {
        heading: "Looking Forward",
        content: "As the African Medicines Agency (AMA) continues to harmonize regulatory frameworks across the continent, the infrastructure landscape will evolve further. PharmaSaha's proprietary data suggests that by 2028, over 60% of pharmaceutical cold chain capacity in West Africa will be located outside of traditional port-city distribution centers. This represents a paradigm shift that will reshape the economics of pharmaceutical distribution across the continent."
      }
    ]
  },
  {
    slug: "harmonizing-regulation-african-medicines-agency",
    title: "Harmonizing Regulation: A Deep Dive into the new African Medicines Agency (AMA) protocols.",
    category: "Regulatory",
    date: "July 2026",
    readingTime: "12 min read",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800",
    excerpt: "Understanding the regulatory landscape transformation as the AMA establishes continent-wide pharmaceutical standards.",
    featured: false,
    body: [
      {
        heading: "A Continental Regulatory Framework",
        content: "The establishment of the African Medicines Agency represents the most significant regulatory development in African pharmaceutical history. With 55 member states working toward harmonized drug approval processes, the AMA is poised to transform how medicines reach patients across the continent. The new protocols establish common standards for drug registration, quality assurance, and pharmacovigilance — effectively creating a single regulatory market for pharmaceuticals."
      },
      {
        heading: "Impact on Market Entry Strategy",
        content: "For global pharmaceutical manufacturers, the AMA protocols fundamentally change the calculus of African market entry. Previously, companies had to navigate up to 55 separate regulatory frameworks, each with its own timelines, documentation requirements, and fee structures. The harmonized approach promises to reduce the average time-to-market from 3-5 years to as little as 12-18 months for products already approved by stringent regulatory authorities.",
        pullQuote: "The AMA is doing for African pharmaceuticals what the EMA did for Europe — but in a fraction of the time."
      },
      {
        heading: "Quality Assurance Standards",
        content: "Central to the AMA's mission is the establishment of robust GMP (Good Manufacturing Practice) standards across the continent. The new protocols require all manufacturing facilities to meet WHO prequalification standards within a defined transition period. This has catalyzed significant investment in manufacturing infrastructure, particularly in countries like Senegal, Nigeria, and Morocco, which are positioning themselves as regional pharmaceutical hubs."
      },
      {
        heading: "The PharmaSaha Advantage",
        content: "As a company that operates at the intersection of global manufacturing and African distribution, PharmaSaha is uniquely positioned to help partners navigate the new regulatory landscape. Our regulatory affairs team maintains direct relationships with AMA working groups and national regulatory authorities across West Africa, providing real-time intelligence on policy developments and compliance requirements."
      }
    ]
  },
  {
    slug: "rise-of-biologics-dakar",
    title: "The Rise of Biologics in Dakar: Preparing facilities for sub-zero temperature demands.",
    category: "Market Entry",
    date: "June 2026",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    excerpt: "How Dakar is becoming the biologics hub of West Africa with cutting-edge cold chain infrastructure.",
    featured: false,
    body: [
      {
        heading: "Dakar's Biological Revolution",
        content: "Dakar, Senegal's vibrant capital, is rapidly emerging as the biologics distribution hub of West Africa. The city's strategic position on the Atlantic coast, combined with recent investments in port infrastructure and pharmaceutical-grade cold storage, makes it the natural gateway for temperature-sensitive medicines entering the region. The Dakar Free Trade Zone now hosts three WHO-prequalified cold chain facilities, with two more under construction."
      },
      {
        heading: "Sub-Zero Capabilities",
        content: "The biologics revolution demands infrastructure capable of maintaining ultra-cold temperatures — sometimes as low as -70°C for mRNA-based therapeutics. Dakar's new generation of cold storage facilities represents a quantum leap from the basic refrigeration that previously served the region. These facilities feature redundant cooling systems, backup generators with 72-hour fuel reserves, and real-time IoT monitoring that alerts operators to temperature excursions before they can compromise product integrity.",
        pullQuote: "A single temperature excursion can destroy millions of dollars worth of biologics — we've engineered that risk out of the equation."
      },
      {
        heading: "Strategic Partnerships",
        content: "PharmaSaha's Dakar operations serve as the primary distribution point for biologics entering the ECOWAS region. Through partnerships with leading European and North American biologics manufacturers, we've established validated supply chains capable of delivering temperature-sensitive products to 11 countries within 48 hours of arrival at Dakar's Blaise Diagne International Airport."
      }
    ]
  },
  {
    slug: "venture-capital-pharma-lagos",
    title: "Venture Capital in Pharma: Why Lagos is becoming the next R&D epicentre for biologics.",
    category: "Capital",
    date: "May 2026",
    readingTime: "10 min read",
    image: "https://images.unsplash.com/photo-1579152276502-542301b17901?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Exploring the venture capital boom driving pharmaceutical R&D innovation in Nigeria's commercial capital.",
    featured: false,
    body: [
      {
        heading: "The Lagos Pharma-Tech Boom",
        content: "Lagos is experiencing an unprecedented influx of venture capital focused on pharmaceutical research and development. In the first half of 2026 alone, Nigerian pharma-tech startups raised over USD 340 million — a 280% increase from the same period in 2025. This capital is flowing into companies developing novel drug delivery systems, AI-powered drug discovery platforms, and advanced manufacturing technologies tailored to tropical disease profiles."
      },
      {
        heading: "From Consumer Tech to Deep Science",
        content: "The shift from consumer technology to deep science investment reflects a maturation of the African venture capital ecosystem. Investors who cut their teeth on fintech and e-commerce are now backing founders with PhD-level expertise in molecular biology, materials science, and pharmaceutical engineering. The Lagos Biosciences Hub, launched in early 2026, now hosts 47 startups working on problems ranging from antimalarial resistance to tropical-stable insulin formulations.",
        pullQuote: "Lagos isn't just importing innovation anymore — it's creating a uniquely African model of pharmaceutical R&D."
      },
      {
        heading: "The Regulatory Catalyst",
        content: "Nigeria's National Agency for Food and Drug Administration and Control (NAFDAC) has played a catalytic role by establishing fast-track approval pathways for locally developed therapies, particularly those targeting diseases with high regional burden. This regulatory innovation, combined with tax incentives for R&D spending, has created a virtuous cycle attracting both talent and capital to Lagos."
      },
      {
        heading: "PharmaSaha's Role",
        content: "As a strategic logistics and market access partner, PharmaSaha is deeply embedded in the Lagos pharma ecosystem. We provide portfolio companies in the Lagos Biosciences Hub with end-to-end support — from regulatory strategy and clinical trial logistics to distribution network design and market entry planning. Our goal is to ensure that innovations born in Lagos can reach patients across West Africa and beyond."
      }
    ]
  },
  {
    slug: "west-african-pharmaceutical-logistics-expansion",
    title: "The Rapid Expansion of the West African Pharmaceutical Logistics Network",
    category: "Market Report",
    date: "Q4 2026",
    readingTime: "15 min read",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80&w=1600",
    excerpt: "A comprehensive quarterly report on the accelerating growth of pharmaceutical logistics infrastructure across the ECOWAS region.",
    featured: true,
    body: [
      {
        heading: "Executive Summary",
        content: "The West African pharmaceutical logistics network is undergoing its most significant expansion in decades. Driven by population growth, increasing healthcare spending, and regulatory harmonization under the African Medicines Agency, the region's pharmaceutical distribution infrastructure is being reshaped by both established players and innovative newcomers. This quarterly report examines the key trends, investment flows, and strategic implications of this transformation."
      },
      {
        heading: "Infrastructure Investment Trends",
        content: "Total investment in pharmaceutical logistics infrastructure across the ECOWAS region reached USD 2.3 billion in 2026, up from USD 1.1 billion in 2024. The majority of this investment is focused on cold chain capacity, digital tracking systems, and last-mile delivery networks. Senegal, Nigeria, and Côte d'Ivoire are the primary beneficiaries, collectively accounting for 68% of total infrastructure spending.",
        pullQuote: "USD 2.3 billion in logistics investment signals that the industry sees West Africa as the next frontier — not a future opportunity, but a present imperative."
      },
      {
        heading: "Digital Transformation",
        content: "The digitization of pharmaceutical supply chains is accelerating across the region. AI-powered demand forecasting, blockchain-based track-and-trace systems, and IoT-enabled environmental monitoring are becoming standard features of modern pharmaceutical logistics operations. PharmaSaha's proprietary Neural Logistics Platform integrates all three capabilities, providing partners with real-time visibility across the entire supply chain from manufacturing to patient delivery."
      },
      {
        heading: "Market Outlook",
        content: "Looking ahead to 2027, we expect the pace of logistics modernization to accelerate further as the AMA's regulatory harmonization creates larger addressable markets and reduces cross-border friction. Companies that invest now in building robust, technology-enabled distribution networks will be best positioned to capture the estimated USD 118 billion opportunity in African pharmaceutical distribution over the next decade."
      }
    ]
  },
  {
    slug: "navigating-cross-border-medicine-compliance",
    title: "Navigating Cross-Border Medicine Compliances",
    category: "Regulatory",
    date: "Dec 2026",
    readingTime: "9 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    excerpt: "A practical guide to the complex web of regulatory requirements governing pharmaceutical trade between ECOWAS nations.",
    featured: false,
    body: [
      {
        heading: "The Compliance Landscape",
        content: "Cross-border pharmaceutical trade in West Africa involves navigating a complex intersection of national regulations, regional agreements, and international standards. While the ECOWAS free trade protocol theoretically allows for duty-free movement of pharmaceutical products between member states, practical implementation varies significantly from country to country. Understanding these nuances is critical for any company operating in the region."
      },
      {
        heading: "Key Regulatory Bodies",
        content: "Each ECOWAS member state maintains its own national regulatory authority with jurisdiction over drug registration, import licensing, and quality control. The most significant regulators include NAFDAC (Nigeria), DPM (Senegal), DPML (Côte d'Ivoire), and the Medicines Control Agency (The Gambia). While these agencies increasingly collaborate through the AMA framework, each maintains sovereign authority over products entering its market.",
        pullQuote: "Compliance isn't a barrier — it's a competitive advantage for those who master it."
      },
      {
        heading: "Best Practices for Cross-Border Operations",
        content: "Successful cross-border pharmaceutical operations require proactive engagement with regulatory authorities in every target market. This means maintaining product dossiers that meet the highest common denominator of regional requirements, investing in quality management systems that exceed minimum standards, and building relationships with customs authorities to ensure smooth border transit. PharmaSaha's regulatory affairs team provides white-glove support for partners navigating these complexities."
      }
    ]
  },
  {
    slug: "cold-chain-innovations-gambia",
    title: "How Cold-Chain Innovations Are Saving Lives in The Gambia",
    category: "Focus Insight",
    date: "Nov 2026",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    excerpt: "Case study: How solar-powered cold storage and IoT monitoring are transforming vaccine delivery in rural Gambia.",
    featured: false,
    body: [
      {
        heading: "The Challenge",
        content: "The Gambia, one of Africa's smallest nations, faces outsized challenges in pharmaceutical cold chain management. With limited grid electricity coverage in rural areas and road infrastructure that becomes unreliable during the rainy season, maintaining the cold chain for temperature-sensitive vaccines and medicines has historically been a significant barrier to healthcare access for rural communities."
      },
      {
        heading: "Solar-Powered Solutions",
        content: "A pilot program launched in partnership between PharmaSaha and the Gambian Ministry of Health has demonstrated that solar-powered cold storage units can maintain WHO-standard temperatures even in the most challenging conditions. The program deployed 24 modular units across rural health posts in the Central River and Upper River regions, each capable of storing up to 5,000 doses of vaccines at temperatures between +2°C and +8°C.",
        pullQuote: "In rural Gambia, a solar panel and a smart refrigerator are saving more lives than any hospital."
      },
      {
        heading: "Results & Impact",
        content: "Six months into the pilot, the results are compelling. Vaccine wastage rates have dropped by 73%, immunization coverage in target communities has increased by 41%, and the average distance a patient must travel to receive temperature-sensitive medicines has decreased from 45km to under 8km. The program has attracted attention from the WHO and is being evaluated as a model for replication across the ECOWAS region."
      }
    ]
  }
];

/** Get a single article by slug */
export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Get related articles (same category, excluding current) */
export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return ARTICLES.slice(0, count);

  const sameCategory = ARTICLES.filter(
    (a) => a.slug !== slug && a.category === current.category
  );
  const others = ARTICLES.filter(
    (a) => a.slug !== slug && a.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, count);
}
