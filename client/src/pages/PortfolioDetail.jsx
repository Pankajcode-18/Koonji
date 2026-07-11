import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import CtaBanner from '../components/home/CtaBanner';

export const fallbackPortfolio = [
  // The 6 priority projects
  { 
    _id: '1', title: 'Global Brand Identity', category: 'Branding', description: 'Complete brand overhaul and positioning.', client: 'Apex Group', images: ['https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80'], slug: 'apex-brand-identity',
    challenge: 'Apex Group was a legacy conglomerate struggling to appeal to modern B2B clients. Their visual identity felt dated, and their messaging was disjointed across 5 different subsidiary companies.',
    solution: 'We conducted a complete ground-up rebrand. We developed a unified brand architecture, a modern visual identity system, and a comprehensive brand book that aligned all subsidiaries under one cohesive, premium umbrella.',
    results: ['45% increase in brand perception scores', 'Successful launch of new cohesive website', 'Unified marketing materials across 5 subsidiaries']
  },
  { 
    _id: '2', title: 'Tech Platform Launch', category: 'Digital', description: 'Custom web app and digital rollout.', client: 'Nova Corp', images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'], slug: 'nova-platform-launch',
    challenge: 'Nova Corp needed to launch a massive new B2B SaaS platform but lacked a digital strategy and a high-converting front-end website to capture enterprise leads.',
    solution: 'We designed and developed a blazing-fast, custom Next.js website optimized for conversions, paired with an aggressive multi-channel digital launch strategy.',
    results: ['Generated 1,200+ enterprise leads in month 1', 'Website loads in under 0.8 seconds globally', 'Awarded Best B2B Website Design']
  },
  { 
    _id: '3', title: 'Cinematic Ad Campaign', category: 'Video', description: 'High-impact commercial video production.', client: 'Orbit Media', images: ['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80'], slug: 'orbit-cinematic-campaign',
    challenge: 'Orbit Media needed a flagship commercial to run on national television and OTT platforms that would capture their audience\'s imagination in just 30 seconds.',
    solution: 'Our production team handled everything from storyboarding to final post-production, creating a visually stunning, narrative-driven commercial shot on high-end cinema cameras.',
    results: ['Over 2.5 million impressions across OTT', 'Featured in top industry design blogs', 'Significant lift in brand recall']
  },
  { 
    _id: '4', title: 'Data-Driven Growth', category: 'Performance', description: 'Aggressive scaling via performance ads.', client: 'Pulse Labs', images: ['https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80'], slug: 'pulse-labs-growth',
    challenge: 'Pulse Labs had a great product but their Customer Acquisition Cost (CAC) on Meta and Google was unsustainably high, throttling their growth.',
    solution: 'We completely restructured their ad accounts, implemented advanced server-side tracking, and deployed our rapid creative testing framework to find winning ad angles.',
    results: ['Reduced CAC by 62% in 45 days', 'Scaled monthly ad spend profitably to $50k+', 'Achieved a consistent 4.2x ROAS']
  },
  { 
    _id: '5', title: 'B2B Lead Generation', category: 'Performance', description: 'Targeted LinkedIn and Google Ads strategy.', client: 'Vertex Co', images: ['https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'], slug: 'vertex-lead-gen',
    challenge: 'Vertex Co needed to generate high-quality meetings for their sales team targeting C-level executives in the manufacturing sector.',
    solution: 'We executed a hyper-targeted LinkedIn Ads strategy combined with high-intent Google Search campaigns, driving traffic to highly optimized lead-capture landing pages.',
    results: ['Generated 350+ qualified sales meetings', 'Decreased cost-per-lead by 40%', 'Pipeline value increased by $2.1M']
  },
  { 
    _id: '6', title: 'Corporate Rebranding', category: 'Branding', description: 'Modernizing a legacy brand for the digital age.', client: 'Zenith Inc', images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'], slug: 'zenith-corporate-rebrand',
    challenge: 'Zenith Inc had a 20-year-old brand identity that failed to resonate with a younger, digitally native audience.',
    solution: 'We modernized their logo, updated their typography and color palette for digital screens, and established a fresh, authoritative brand voice.',
    results: ['Successfully transitioned brand without alienating existing customers', 'Increased social media engagement by 150%', 'Rolled out across 50+ retail locations']
  },
  
  // The additional sample projects
  { 
    _id: '7', title: 'Nabil Bank App Launch', category: 'Digital', description: 'Driving massive adoption for a new banking application.', client: 'Nabil Bank', images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'], slug: 'nabil-app-launch',
    challenge: 'Launch a new mobile banking app in a highly competitive and saturated market.',
    solution: 'A multi-channel digital campaign focusing on ease of use, security, and exclusive digital-only features.',
    results: ['100,000+ downloads in the first week', 'Top Finance App on iOS and Android stores']
  },
  { 
    _id: '8', title: 'Himalayan Coffee Ad', category: 'Video', description: 'Documentary-style brand film highlighting ethical sourcing.', client: 'Himalayan Coffee Roasters', images: ['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80'], slug: 'himalayan-coffee-ad',
    challenge: 'Communicate the brand\'s commitment to fair trade and ethical sourcing without sounding overly corporate.',
    solution: 'A beautifully shot, short-form documentary filmed on location in the coffee farms, telling the stories of the farmers.',
    results: ['Over 1 million organic views', 'Significant increase in brand loyalty and direct-to-consumer sales']
  },
  { 
    _id: '9', title: 'Everest Gear Campaign', category: 'Performance', description: 'Winter season e-commerce scaling.', client: 'Everest Gear', images: ['https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80'], slug: 'everest-gear-campaign',
    challenge: 'Maximize sales during the critical winter shopping season.',
    solution: 'Aggressive Google Shopping and Meta retargeting campaigns leveraging dynamic product ads.',
    results: ['3.5x Return on Ad Spend', 'Record-breaking Q4 revenue']
  },
  { 
    _id: '10', title: 'Tech StartUp Identity', category: 'Branding', description: 'Building trust for an early-stage startup.', client: 'Innovate Nepal', images: ['https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'], slug: 'innovate-nepal-identity',
    challenge: 'An early-stage startup needed to look like an established, trustworthy player to secure enterprise contracts.',
    solution: 'A clean, minimalist, and highly professional brand identity and investor pitch deck.',
    results: ['Successfully raised Seed funding', 'Secured 3 major enterprise contracts']
  },
  { 
    _id: '11', title: 'Tourism Board Promo', category: 'Video', description: 'Inspiring international travel post-pandemic.', client: 'Nepal Tourism', images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'], slug: 'tourism-board-promo',
    challenge: 'Reignite interest in international travel to Nepal after prolonged border closures.',
    solution: 'A breathtaking cinematic campaign distributed globally via targeted YouTube and display ads.',
    results: ['25% increase in visa inquiries', 'Multi-award winning campaign visuals']
  },
  { 
    _id: '12', title: 'NepMart Digital Growth', category: 'Digital', description: 'SEO and organic growth for a massive e-commerce platform.', client: 'NepMart', images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'], slug: 'nepmart-digital-growth',
    challenge: 'NepMart had thousands of products but terrible organic search visibility.',
    solution: 'A massive technical SEO overhaul, automated schema markup, and aggressive category-page optimization.',
    results: ['180% organic traffic growth in 6 months', 'Ranked #1 for over 500 high-volume product keywords']
  }
];

export default function PortfolioDetail() {
  const { slug } = useParams();
  const { data: fetchedProject, loading, error } = useFetch(`/portfolio/${slug}`);
  const project = fetchedProject || fallbackPortfolio.find(p => p.slug === slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-2 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
        <h1 className="font-serif text-3xl text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-slate-600 mb-8">This project may have been moved or doesn't exist.</p>
        <Link to="/portfolio" className="btn-primary">View All Projects</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — Portfolio | Koonji Infotech</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Hero */}
      <section className="mt-[72px] pt-16 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, var(--color-brand) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="container-koonji relative z-10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-brand transition-colors mb-8">
            <FiArrowLeft size={14} /> Back to Portfolio
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="eyebrow block">{project.category}</span>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-medium text-slate-500">Client: {project.client}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 max-w-4xl"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-xl text-slate-600 max-w-2xl leading-relaxed"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Main Image */}
      {project.images && project.images[0] && (
        <section className="bg-white">
          <div className="container-koonji">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-lg relative"
            >
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-koonji">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {project.challenge || 'Our client approached us with a unique set of challenges that required a bespoke, strategic approach to overcome their market hurdles.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-6">Our Solution</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {project.solution || 'We deployed our specialized team to audit, strategize, and execute a comprehensive campaign that delivered measurable success.'}
              </p>
              
              {project.results && project.results.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Key Results</h3>
                  <ul className="space-y-4">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                        <FiCheckCircle className="text-brand mt-1 shrink-0" size={18} />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
