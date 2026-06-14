export interface DomainAsset {
  domain: string;
  title: string;
  description: string;
  status: string;
  escrow: string;
  tags: string[];
  url: string;
}

export const OTHER_DOMAINS: DomainAsset[] = [
  {
    domain: "ambeth.com",
    title: "Elegant & Brandable Premium Identity",
    description: "A highly memorable, short, and brandable identity suitable for next-generation platforms, cloud technology, or premium services.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["SaaS", "FinTech", "Web3", "Enterprise"],
    url: "https://www.ambeth.com/"
  },
  {
    domain: "appliancecraft.com",
    title: "Home Services & Premium Appliances",
    description: "The premier domain name for appliance manufacturing, smart home automation configurations, expert repairs, or artisanal appliance brands.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["E-Commerce", "Home Improvement", "Smart Devices", "Craftsman"],
    url: "https://www.appliancecraft.com/"
  },
  {
    domain: "aquaves.com",
    title: "Hydration, Wellness & Marine Technology",
    description: "A beautifully flowing brand name optimized for premium bottled water, ocean engineering, hydrothermal products, or ecological initiatives.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Beverage", "Marine", "Wellness", "Eco-friendly"],
    url: "https://www.aquaves.com/"
  },
  {
    domain: "arkba.com",
    title: "Strategic 5-Letter Financial or SaaS Hub",
    description: "A memorable, punchy capital asset ideal for wealth management, cryptographic security repositories, or software networks.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Financial", "Investment", "SaaS", "5-Letter Name"],
    url: "https://www.arkba.com/"
  },
  {
    domain: "armycore.com",
    title: "Security, Tactical & Defense Systems",
    description: "A powerful, commanding naming choice for cybersecurity operations, specialized survival equipment, or robust defense consulting networks.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Cybersecurity", "Tactical Gear", "Defense Tech", "Industrial"],
    url: "https://www.armycore.com/"
  },
  {
    domain: "arogram.com",
    title: "Digital Signatures & Secure Aromatics",
    description: "An elegant, tech-forward brandable name suitable for communication tool suites, data analysis programs, or wellness brands.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["SaaS", "Messaging", "Security", "AI Platforms"],
    url: "https://www.arogram.com/"
  },
  {
    domain: "awesomedom.com",
    title: "The Ultimate Premium Registry & Creative Platform",
    description: "A bold, supercharged domain suitable for next-gen domain portfolios, interactive gaming, or creative hosting networks.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Creative Agency", "Media Brand", "Asset Hosting"],
    url: "https://www.awesomedom.com/"
  },
  {
    domain: "babeport.com",
    title: "Entertainment, Lifestyle & Media Portals",
    description: "A high-visibility premium lifestyle hub or subscription platform tailored for modern online social communities.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Lifestyle", "Entertainment", "Social Platform"],
    url: "https://www.babeport.com/"
  },
  {
    domain: "bakelet.com",
    title: "Smart Culinary, Home Baking & Pastry SaaS",
    description: "A delightful, brandable name ready for recipe-sharing hubs, smart kitchen accessories, meal subscription kits, or baking directories.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Culinary", "Baking", "E-Commerce", "SaaS Marketplace"],
    url: "https://www.bakelet.com/"
  },
  {
    domain: "battistas.com",
    title: "Aesthetic Italian Heritage & Fine Dining",
    description: "A classic, top-tier legacy brand suitable for national restaurant chains, gourmet Italian imports, or artisanal wineries.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Hospitality", "Culinary", "Fine Dining", "E-Commerce"],
    url: "https://www.battistas.com/"
  },
  {
    domain: "beamspread.com",
    title: "Precision Waves & Electromagnetic Optics",
    description: "An industry-grade physical and optical domain name designed for laser measurement apparatus, communications software, or waveguide analysis platforms.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Industrial Lasers", "Optoelectronics", "Precision Physics", "Waves"],
    url: "https://www.beamspread.com/"
  },
  {
    domain: "bluntgasm.com",
    title: "Next-generation Lifestyle & Craft Culture Network",
    description: "A bold, modern, and highly-engaging brandable keyword optimized for contemporary consumer products and social forums.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Lifestyle", "Culture", "Social Forum", "Brandable"],
    url: "https://www.bluntgasm.com/"
  },
  {
    domain: "boobclub.com",
    title: "Premium Entertainment & Community Brand",
    description: "An outstanding, highly memorable lifestyle-media domain optimized for community hubs, subscription networks, or creator content aggregation.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Media Network", "Digital Brand", "Entertainment"],
    url: "https://www.boobclub.com/"
  },
  {
    domain: "caviz.com",
    title: "5-Letter Visualization & AI Analytics",
    description: "A ultra-premium 5-letter brand name perfect for custom computer vision systems, advanced business analytics software, or design bureaus.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["5-Letter Name", "Data Science", "Design Studio", "AI Platform"],
    url: "https://www.caviz.com/"
  },
  {
    domain: "cellbeep.com",
    title: "Wireless Telecommunication & Active Alert Protocols",
    description: "A nostalgic and memorable telecommunications name optimized for mobile paging systems, rapid customer support bots, or messaging integrations.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Wireless Networks", "Security Alert", "Telecom Tech"],
    url: "https://www.cellbeep.com/"
  },
  {
    domain: "chosenspot.com",
    title: "Curated Venues & Prime Location Finders",
    description: "A high-affinity geographical and positioning search concept tailored for corporate events directories, boutique travel trackers, or venue reviews.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Real Estate", "Hospitality", "Travel Systems", "SaaS Locator"],
    url: "https://www.chosenspot.com/"
  },
  {
    domain: "fockstate.com",
    title: "Quantum Physics & State Dynamics",
    description: "The definitive scientific brand domain for quantum mechanics ventures, Deep Tech optics research labs, photonic computing platforms, or engineering suites.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Quantum Computing", "Deep Tech", "Scientific Research", "Optics"],
    url: "https://www.fockstate.com/"
  },
  {
    domain: "halfstash.com",
    title: "Micro-Savings, Digital Vaults & Creator Assets",
    description: "A clever, highly memorable storage or financial framework perfect for everyday budget applications, digital vaults, or designer templates.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Fintech", "Cloud Storage", "Asset Registry"],
    url: "https://www.halfstash.com/"
  },
  {
    domain: "houseofterra.com",
    title: "Organic Agriculture & Modern Sustainable Materials",
    description: "An organic, high-end branding asset for modern interior architecture offices, carbon-neutral logistics, or plant-based consumer solutions.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Eco Architecture", "Sustainability", "Agriculture", "Eco-friendly"],
    url: "https://www.houseofterra.com/"
  },
  {
    domain: "jalh.com",
    title: "Ultra-Premium 4-Letter Corporate Entity",
    description: "Four-letter LLLL.com domains represent premium, highly liquid digital real estate. Perfect for venture capital groups, holding firms, or global corporate projects.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Venture Capital", "Corporate Holding", "Enterprise", "Four Letter Domain"],
    url: "https://www.jalh.com/"
  },
  {
    domain: "kataf.com",
    title: "Ultra-Premium 5-Letter Brand",
    description: "A clean, easily pronounceable, and premium name ideal for modern software-as-a-service (SaaS) products, dynamic enterprise solutions, or global logistics networks.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Tech Brand", "SaaS Solutions", "Fintech ready", "5-Letter Name"],
    url: "https://www.kataf.com/"
  },
  {
    domain: "linkwhore.com",
    title: "Affiliate Marketing & Link Aggregator Network",
    description: "A bold, memorable traffic-routing asset ready for high-performance aggregate databases, referral networks, SEO tracking, or redirect architectures.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Traffic Routing", "SEO Portfolio", "Affiliate Hub"],
    url: "https://www.linkwhore.com/"
  },
  {
    domain: "medizer.com",
    title: "Digital Health & Connected Wellness Systems",
    description: "A highly brandable health-technology domain designed for digital therapy marketplaces, automated wellness SaaS, patient diagnostics, or telehealth suites.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Medtech", "Healthcare Software", "Telemedicine", "Wellness"],
    url: "https://www.medizer.com/"
  },
  {
    domain: "omachines.com",
    title: "Industrial Automation, Robotics & Heavy Tooling",
    description: "A powerhouse corporate identity perfect for smart factories, AI-guided heavy-duty robots, commercial tooling, or cloud industrial software.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Automation", "Robotics", "Heavy Duty", "SaaS Industry"],
    url: "https://www.omachines.com/"
  },
  {
    domain: "palmheld.com",
    title: "Next-generation Mobile Accessories & Handheld Units",
    description: "An ergonomic and highly brandable domain suitable for portable telemetry sensors, modern smartphone peripherals, or active wearable device designs.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Industrial Design", "Smart Mobiles", "E-Commerce"],
    url: "https://www.palmheld.com/"
  },
  {
    domain: "releafcanna.com",
    title: "Holistic Health, Wellness & Organic Therapeutics",
    description: "The perfect digital storefront or community brand for green therapeutics, dispensary listings, organic health supplements, and botanical research.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Therapeutics", "Wellness", "Organic Crops", "Eco-friendly"],
    url: "https://www.releafcanna.com/"
  },
  {
    domain: "snackcore.com",
    title: "Gourmet Bites, Custom Subscriptions & Active Snacks",
    description: "A fun, youthful, and high-energy community name optimized for snack delivery apps, gourmet subscription packages, or retail networks.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Culinary", "Subscription Box", "Consumer Goods"],
    url: "https://www.snackcore.com/"
  },
  {
    domain: "subhauler.com",
    title: "Intermodal Freight & Active Logistics Directory",
    description: "The flagship logistics directory asset linking independent certified operators with heavy freight brokers worldwide.",
    status: "Active Digital Platform",
    escrow: "Fully Managed",
    tags: ["Logistics", "Shipping Carriers", "Supply Chain"],
    url: "https://www.subhauler.com/"
  },
  {
    domain: "surfmatic.com",
    title: "Aquatic Sports Equipment, Gear & Hydrodynamics",
    description: "A powerful brandable name perfect for automated surfboard shapers, wave-pool machinery developers, ocean excursions, or tracking telemetry.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Sports Equipment", "Aquatic Tech", "E-Commerce", "Adventure"],
    url: "https://www.surfmatic.com/"
  },
  {
    domain: "taijan.com",
    title: "Premium Biopharma, Wellness & Strategic Growth",
    description: "A strong, premium identity suitable for pharmaceutical development groups, holistic health consulting, or international corporate services.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["SaaS Solutions", "Healthcare", "Strategic Growth", "6-Letter Name"],
    url: "https://www.taijan.com/"
  },
  {
    domain: "thrillport.com",
    title: "Exotic Adventure Outings & Sports Entertainment",
    description: "An action-packed commercial domain prepared for extreme tourism bookings, high-energy gaming channels, or action video distributions.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Adrenaline Travel", "Entertainment Hub", "Booking Systems"],
    url: "https://www.thrillport.com/"
  },
  {
    domain: "vegginess.com",
    title: "Plant-Based Nutrition, Diets & Wholesome Living",
    description: "The ultimate lifestyle brand for plant-based recipe systems, local nutrition programs, sustainable green markets, or lifestyle networks.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Organic Foods", "Wholesome Eating", "E-Commerce", "Wellness"],
    url: "https://www.vegginess.com/"
  },
  {
    domain: "vehicraft.com",
    title: "Specialized Vehicles, Fleet Software & Custom Builds",
    description: "The ultimate domain for electric fleet optimization suites, specialized auto engineering bureaus, or advanced vehicle electronics platforms.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Fleet Management", "Electric Vehicles", "Auto Tuning"],
    url: "https://www.vehicraft.com/"
  },
  {
    domain: "wikisonic.com",
    title: "Interactive Acoustic Encyclopedia & Sound Systems",
    description: "An energetic brand designed for sound processing libraries, communal music collaborative wikis, or next-generation acoustic device engineering.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Acoustics", "Audio Tech", "SaaS Encyclopedia"],
    url: "https://www.wikisonic.com/"
  },
  {
    domain: "wimsic.com",
    title: "Whimsical Home Accents, Arts & Craft Collectibles",
    description: "A delightful 6-letter name ready to support customized card print shops, playful children apps, interior decorators, or handcrafted goods.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Crafts Design", "Creative Agency", "E-Commerce"],
    url: "https://www.wimsic.com/"
  },
  {
    domain: "zpewand.com",
    title: "Zero-Point Energy & Experimental Tech Applications",
    description: "A unique, futuristically charged branding asset for advanced energy storage technologies, quantum research toolkits, or industrial deep tech.",
    status: "Available for Acquisition",
    escrow: "Secure Handshake Escrow",
    tags: ["Clean Energy", "Venture Incubator", "Precision Hardware"],
    url: "https://www.zpewand.com/"
  },
  {
    domain: "neaner.com",
    title: "The Master Curated Portfolio Registry",
    description: "The premium administrative hub and short-brandable marketplace coordinating and showcasing high-growth strategic web properties and domain acquisitions.",
    status: "Active Portfolio Hub",
    escrow: "Administrative Registry",
    tags: ["Domain Holding", "Strategic Assets", "Digital Real Estate"],
    url: "https://neaner.com"
  }
];
