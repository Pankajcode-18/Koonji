import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiArrowLeft, FiClock, FiUsers, FiTarget, FiDollarSign } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import CtaBanner from '../components/home/CtaBanner';

const fallbackServices = [
  { 
    _id: '1', title: 'Ad Creation', slug: 'ad-creation', 
    shortDescription: 'High-converting ads that captivate, engage, and convert your target audience across every platform.', 
    whatWeDeliver: 'Koonji Infotech provides professional Ad Creation Services in Nepal designed to help businesses build brand awareness, attract potential customers, and increase sales through impactful advertising. Our creative team develops high-performing ad creatives for social media platforms, Google Ads campaigns, display networks, websites, and promotional marketing campaigns. From eye-catching graphics and engaging video advertisements to compelling ad copy and campaign visuals, we create advertising assets that connect with your audience and deliver measurable results. Whether you\'re launching a new product, promoting a service, or growing your brand online, our customized ad creation solutions help maximize your marketing performance and return on investment.',
    servicesIncluded: [
      { title: 'Social Media Advertisement Design', description: 'Professional Facebook, Instagram, TikTok, LinkedIn, and social media ad creatives designed to maximize reach, engagement, and conversions.' },
      { title: 'Banner & Display Ad Design', description: 'Custom website banners, Google Display Network ads, promotional graphics, and display advertisements optimized for digital campaigns.' },
      { title: 'Video Ad Production', description: 'Short-form promotional videos, animated advertisements, reels, and motion graphics created to increase audience engagement and campaign performance.' },
      { title: 'Ad Copywriting & Messaging', description: 'Conversion-focused headlines, ad descriptions, calls-to-action, and promotional messaging crafted to encourage customer action.' },
      { title: 'Campaign Creative Strategy', description: 'Strategic planning of ad visuals, messaging, audience targeting concepts, and creative direction aligned with business objectives.' }
    ],
    quickFacts: {
      duration: '3–7 Business Days',
      team: 'Graphic Designer, Creative Strategist, Copywriter, Digital Marketing Specialist',
      idealFor: 'Businesses, Startups, E-commerce Stores, Educational Institutions, NGOs, Real Estate Companies, Healthcare Providers, and Corporate Brands',
      investment: 'NPR 10,000 – NPR 100,000+ (Depending on scope and complexity)'
    },
    process: [
      { step: '01', title: 'Business & Audience Research', description: 'We analyze your business, industry, competitors, target audience, and campaign goals to develop an effective advertising strategy.' },
      { step: '02', title: 'Creative Planning & Concept Development', description: 'Our team develops visual concepts, ad messaging, campaign themes, and creative ideas tailored to your marketing objectives.' },
      { step: '03', title: 'Ad Design & Production', description: 'We create high-quality graphics, videos, advertising copy, and campaign assets while maintaining brand consistency.' },
      { step: '04', title: 'Review, Optimization & Delivery', description: 'After revisions and approval, we deliver finalized ad creatives in multiple formats ready for immediate advertising campaigns.' }
    ],
    relatedService: {
      title: 'Digital Marketing Service',
      description: 'Professional Digital Marketing Service in Nepal by Koonji Infotech. Grow your business with SEO, Social Media Marketing, Google Ads, Content Marketing, Email Marketing, and performance-driven digital marketing strategies.',
      slug: 'digital-marketing'
    },
    metaTitle: 'Ad Creation Services | Koonji Infotech' 
  },
  { 
    _id: '2', title: 'Digital Marketing', slug: 'digital-marketing', 
    shortDescription: 'Full-spectrum digital marketing that puts your brand in front of the right people at the right moment.', 
    whatWeDeliver: 'Koonji Infotech offers professional Digital Marketing Services in Nepal designed to help businesses build a strong online presence, attract qualified customers, and achieve sustainable growth. Our digital marketing experts create customized strategies that combine Search Engine Optimization (SEO), Social Media Marketing (SMM), Google Ads, Content Marketing, Email Marketing, and Performance Marketing to maximize your brand\'s reach and return on investment. Whether you are a startup, local business, eCommerce store, educational institution, or corporate organization, our result-driven digital marketing solutions help increase website traffic, improve search engine rankings, generate quality leads, and boost online sales.',
    servicesIncluded: [
      { title: 'Search Engine Optimization (SEO)', description: 'Improve your website\'s visibility on Google with on-page SEO, technical SEO, local SEO, keyword research, and content optimization strategies.' },
      { title: 'Social Media Marketing', description: 'Build brand awareness and engage your audience through strategic marketing campaigns across Facebook, Instagram, TikTok, LinkedIn, and other platforms.' },
      { title: 'Google Ads & PPC Campaigns', description: 'Generate targeted traffic and qualified leads with professionally managed Google Ads, Search Ads, Display Ads, and Performance Marketing campaigns.' },
      { title: 'Email Marketing & Automation', description: 'Nurture customer relationships and increase conversions through personalized email campaigns, newsletters, and marketing automation solutions.' },
      { title: 'Analytics & Performance Reporting', description: 'Track campaign performance, user behavior, conversion rates, and ROI with detailed reporting and actionable insights.' }
    ],
    quickFacts: {
      duration: 'Monthly Ongoing Service',
      team: 'Digital Marketing Strategist, SEO Specialist, Content Marketer, PPC Expert, Social Media Manager',
      idealFor: 'Small Businesses, Startups, eCommerce Stores, Educational Institutions, Healthcare Providers, Real Estate Companies, NGOs, and Corporate Organizations',
      investment: 'NPR 20,000 – NPR 300,000+ Per Month (Depending on scope and complexity)'
    },
    process: [
      { step: '01', title: 'Business Analysis & Goal Setting', description: 'We assess your business objectives, target audience, competitors, and current digital presence to create a customized marketing strategy.' },
      { step: '02', title: 'Strategy Development', description: 'Our team develops a comprehensive digital marketing roadmap including SEO, social media, paid advertising, and content marketing initiatives.' },
      { step: '03', title: 'Campaign Execution', description: 'We launch, manage, and optimize digital marketing campaigns across multiple channels to maximize visibility and conversions.' },
      { step: '04', title: 'Monitoring & Optimization', description: 'Continuous performance tracking, reporting, testing, and campaign optimization ensure ongoing growth and improved marketing results.' }
    ],
    relatedService: {
      title: 'Ad Creation Service',
      description: 'Professional Ad Creation Service in Nepal by Koonji Infotech. We create high-converting social media ads, banner ads, Google Ads creatives, video advertisements, and campaign graphics...',
      slug: 'ad-creation'
    },
    metaTitle: 'Digital Marketing Services | Koonji Infotech' 
  },
  { 
    _id: '3', title: 'Branding', slug: 'branding', 
    shortDescription: 'Distinctive brand identities built to command attention, build trust, and stand the test of time.', 
    whatWeDeliver: 'Your brand is the gut feeling your customers have about your business. We help you define, design, and deliver a cohesive brand identity that speaks directly to your target market. From conceptualizing the perfect logo to establishing your brand voice and visual guidelines, we ensure every touchpoint leaves a memorable and professional impression.',
    servicesIncluded: [
      { title: 'Logo Design & Typography', description: 'Custom logo concepts and carefully selected typography that visually represent your brand.' },
      { title: 'Color Palette & Visual Guidelines', description: 'Cohesive color schemes and comprehensive brand books to maintain consistency.' },
      { title: 'Brand Voice & Messaging', description: 'Developing a unique tone of voice and core messaging pillars for your business.' }
    ],
    quickFacts: {
      duration: '2–4 Weeks',
      team: 'Brand Strategist, Lead Designer, Copywriter',
      idealFor: 'New Startups, Rebranding Companies, Corporate Entities',
      investment: 'Custom Pricing Based on Requirements'
    },
    process: [
      { step: '01', title: 'Discovery & Audit', description: 'Understanding your business, values, and market positioning.' },
      { step: '02', title: 'Concept & Design', description: 'Drafting visual concepts and iterating based on feedback.' },
      { step: '03', title: 'Brand Guidelines', description: 'Finalizing the complete identity system and rulebook.' },
      { step: '04', title: 'Asset Delivery', description: 'Handing over all files in required formats for print and digital.' }
    ],
    relatedService: {
      title: 'Digital Marketing Service',
      description: 'Take your newly designed brand to the market with our data-driven digital strategies.',
      slug: 'digital-marketing'
    },
    metaTitle: 'Branding Services | Koonji Infotech' 
  },
  // Replicate structure for the remaining 6 so the layout doesn't break
  {
    _id: '4', title: 'Video Production', slug: 'video-production',
    shortDescription: 'Cinematic video content that tells your story and moves your audience to act.',
    whatWeDeliver: 'Video is the most powerful medium for storytelling in the digital age. Our in-house production team handles everything from conceptualization and scriptwriting to filming, editing, and post-production. Whether you need a high-end corporate documentary, snappy social media reels, or product demonstration videos, we create visually stunning content that drives engagement.',
    servicesIncluded: [
      { title: 'Concept & Storyboarding', description: 'Visualizing the narrative before we even pick up a camera.' },
      { title: 'Professional Filming', description: 'High-end cinema cameras, lighting, and audio equipment.' },
      { title: 'Editing & Post-Production', description: 'Color grading, sound design, and motion graphics.' }
    ],
    quickFacts: {
      duration: '1–4 Weeks',
      team: 'Director, Cinematographer, Video Editor',
      idealFor: 'Brands needing commercials, corporate profiles, or social media reels.',
      investment: 'Custom Pricing Based on Scope'
    },
    process: [
      { step: '01', title: 'Pre-Production', description: 'Scripting, planning, and location scouting.' },
      { step: '02', title: 'Production', description: 'Shooting the raw footage with our professional crew.' },
      { step: '03', title: 'Post-Production', description: 'Editing and refining the final cut.' },
      { step: '04', title: 'Final Delivery', description: 'Exporting optimized files for your platforms.' }
    ],
    relatedService: {
      title: 'Ad Creation Service',
      description: 'Use your new video assets in high-performing advertising campaigns.',
      slug: 'ad-creation'
    },
    metaTitle: 'Video Production Services | Koonji Infotech'
  },
  {
    _id: '5', title: 'Performance Ads', slug: 'performance-ads',
    shortDescription: 'Data-fuelled paid advertising campaigns engineered for maximum ROI and measurable growth.',
    whatWeDeliver: 'Stop wasting ad spend on campaigns that don’t deliver. Our performance marketing team specializes in data-driven media buying. We meticulously track every click, conversion, and dollar spent to optimize your campaigns in real-time. By leveraging advanced targeting and retargeting strategies, we scale your business aggressively while maintaining a profitable Return on Ad Spend (ROAS).',
    servicesIncluded: [
      { title: 'Google Search Ads', description: 'Capturing high-intent users actively searching for your services.' },
      { title: 'Meta Advertising', description: 'Aggressive scaling and retargeting on Facebook and Instagram.' },
      { title: 'Conversion Tracking', description: 'Advanced pixel and API setups to track every dollar.' }
    ],
    quickFacts: {
      duration: 'Ongoing Management',
      team: 'Media Buyer, Data Analyst, Creative Strategist',
      idealFor: 'E-commerce, Lead Gen, SaaS',
      investment: 'Retainer + Ad Spend'
    },
    process: [
      { step: '01', title: 'Audit & Strategy', description: 'Reviewing past data and setting KPI goals.' },
      { step: '02', title: 'Setup & Launch', description: 'Building the campaigns and tracking infrastructure.' },
      { step: '03', title: 'Optimization', description: 'Daily bid and creative adjustments.' },
      { step: '04', title: 'Scaling', description: 'Increasing budget on winning ad sets.' }
    ],
    relatedService: {
      title: 'Ad Creation Service',
      description: 'We need high-quality creatives to fuel the performance campaigns.',
      slug: 'ad-creation'
    },
    metaTitle: 'Performance Ads | Koonji Infotech'
  },
  {
    _id: '6', title: 'Web Development', slug: 'web-development',
    shortDescription: 'Custom, high-performance websites built for speed, scalability, and seamless user experiences.',
    whatWeDeliver: 'Your website is your ultimate digital storefront. We build custom, blazing-fast web applications utilizing modern frameworks. We don’t just use templates; we architect scalable solutions optimized for performance, security, and search engines. From e-commerce platforms to robust corporate sites, we ensure your web presence is flawless.',
    servicesIncluded: [
      { title: 'Custom Frontend Development', description: 'Building pixel-perfect interfaces with React and Next.js.' },
      { title: 'Backend & API Integration', description: 'Robust servers and database management.' },
      { title: 'E-Commerce Setup', description: 'Secure payment gateways and product management.' }
    ],
    quickFacts: {
      duration: '4–12 Weeks',
      team: 'Frontend Developer, Backend Engineer, QA Tester',
      idealFor: 'Businesses needing a powerful online presence.',
      investment: 'Custom Project Pricing'
    },
    process: [
      { step: '01', title: 'Architecture Planning', description: 'Defining the tech stack and database schema.' },
      { step: '02', title: 'Development', description: 'Writing clean, scalable code.' },
      { step: '03', title: 'Testing', description: 'Rigorous QA and performance testing.' },
      { step: '04', title: 'Deployment', description: 'Launching to live servers and monitoring.' }
    ],
    relatedService: {
      title: 'UI/UX Design',
      description: 'Every great website starts with an intuitive and beautiful design.',
      slug: 'ui-ux-design'
    },
    metaTitle: 'Web Development | Koonji Infotech'
  },
  {
    _id: '7', title: 'Application Development', slug: 'application-development',
    shortDescription: 'Intuitive and powerful mobile applications designed to engage users and drive business growth.',
    whatWeDeliver: 'Take your business directly to your customers’ pockets. We design and develop cross-platform mobile applications for iOS and Android that are intuitive, feature-rich, and built to scale. From the initial wireframes to app store deployment, our engineering team ensures a seamless user experience that keeps your audience coming back.',
    servicesIncluded: [
      { title: 'iOS & Android Development', description: 'Native-feel applications using modern cross-platform frameworks.' },
      { title: 'Backend Infrastructure', description: 'Scalable APIs to power your mobile app.' },
      { title: 'App Store Optimization', description: 'Ensuring your app is discoverable on Apple and Google stores.' }
    ],
    quickFacts: {
      duration: '3–6 Months',
      team: 'Mobile Developer, UI/UX Designer, Project Manager',
      idealFor: 'Tech Startups, Established Brands',
      investment: 'Custom Project Pricing'
    },
    process: [
      { step: '01', title: 'Wireframing', description: 'Mapping out the user flow.' },
      { step: '02', title: 'Development', description: 'Building the core features and integrations.' },
      { step: '03', title: 'Beta Testing', description: 'Ironing out bugs with real users.' },
      { step: '04', title: 'Launch', description: 'Publishing to the App Store and Google Play.' }
    ],
    relatedService: {
      title: 'Digital Marketing',
      description: 'Once launched, you need a strategy to drive app downloads.',
      slug: 'digital-marketing'
    },
    metaTitle: 'App Development | Koonji Infotech'
  },
  {
    _id: '8', title: 'SEO & Analytics', slug: 'seo-analytics',
    shortDescription: 'Data-driven SEO strategies that improve your visibility and drive organic growth.',
    whatWeDeliver: 'Visibility is everything. Our SEO experts implement white-hat strategies to organically rank your business at the top of search engine results. We combine technical audits, on-page optimization, and high-quality link building to drive sustained, targeted traffic to your site. Coupled with deep analytics integration, you will always know exactly how your audience is behaving.',
    servicesIncluded: [
      { title: 'Technical SEO Audits', description: 'Fixing underlying website issues that hinder ranking.' },
      { title: 'Content Optimization', description: 'Aligning your copy with high-intent keywords.' },
      { title: 'Analytics Dashboard Setup', description: 'Custom Google Looker Studio reports for full visibility.' }
    ],
    quickFacts: {
      duration: 'Ongoing Strategy',
      team: 'SEO Specialist, Content Writer, Data Analyst',
      idealFor: 'Any business wanting free, organic traffic.',
      investment: 'Monthly Retainer'
    },
    process: [
      { step: '01', title: 'Site Audit', description: 'Identifying immediate technical fixes.' },
      { step: '02', title: 'Keyword Strategy', description: 'Mapping out content opportunities.' },
      { step: '03', title: 'On-Page Execution', description: 'Optimizing existing pages.' },
      { step: '04', title: 'Off-Page & Reporting', description: 'Building authority and tracking rank movements.' }
    ],
    relatedService: {
      title: 'Web Development',
      description: 'Sometimes you need a faster, better-coded website to rank higher.',
      slug: 'web-development'
    },
    metaTitle: 'SEO & Analytics | Koonji Infotech'
  },
  {
    _id: '9', title: 'UI/UX Design', slug: 'ui-ux-design',
    shortDescription: 'User-centric designs that delight your customers and reduce friction at every touchpoint.',
    whatWeDeliver: 'Great design is about how it works, not just how it looks. Our UI/UX process is heavily rooted in user research and behavioral psychology. We create wireframes, interactive prototypes, and high-fidelity interfaces that minimize friction and guide users naturally toward conversion points, ensuring a delightful and intuitive experience.',
    servicesIncluded: [
      { title: 'User Research', description: 'Understanding your audience\'s pain points.' },
      { title: 'Wireframing & Prototyping', description: 'Mapping the skeleton of the digital product.' },
      { title: 'High-Fidelity Design', description: 'Applying branding and polishing the interface.' }
    ],
    quickFacts: {
      duration: '2–6 Weeks',
      team: 'UX Researcher, UI Designer',
      idealFor: 'SaaS Platforms, Apps, E-commerce',
      investment: 'Custom Project Pricing'
    },
    process: [
      { step: '01', title: 'Research & Discovery', description: 'Analyzing competitors and user behavior.' },
      { step: '02', title: 'Information Architecture', description: 'Structuring the navigation and flow.' },
      { step: '03', title: 'Visual Design', description: 'Creating the final, beautiful screens.' },
      { step: '04', title: 'Handoff', description: 'Delivering assets and specs to developers.' }
    ],
    relatedService: {
      title: 'Web Development',
      description: 'Bring your new designs to life with our engineering team.',
      slug: 'web-development'
    },
    metaTitle: 'UI/UX Design | Koonji Infotech'
  }
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const { data: fetchedService, loading, error } = useFetch(`/services/${slug}`);
  const service = fetchedService || fallbackServices.find(s => s.slug === slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-2 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
        <h1 className="font-serif text-3xl text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-slate-600 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/services" className="btn-primary">View All Services</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.metaTitle || `${service.title} — Koonji Infotech`}</title>
        <meta name="description" content={service.metaDescription || service.shortDescription} />
        <link rel="canonical" href={`https://koonji.com/services/${slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="mt-[72px] pt-16 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, var(--color-brand) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="container-koonji relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-brand transition-colors mb-8">
            <FiArrowLeft size={14} /> All Services
          </Link>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow block mb-4">
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 max-w-3xl"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed"
          >
            {service.shortDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex gap-4"
          >
            <Link to="/contact-us" className="btn-primary">
              Start a Project <FiArrowRight className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-20 bg-gray-50">
        <div className="container-koonji">
          
          {/* What We Deliver */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl"
          >
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-6">What We Deliver</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{service.whatWeDeliver}</p>
          </motion.div>

          {/* Quick Facts */}
          {service.quickFacts && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-8">Quick Facts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <FiClock className="text-brand mb-4" size={24} />
                  <h3 className="font-semibold text-gray-900 mb-2">Typical Duration</h3>
                  <p className="text-sm text-slate-500">{service.quickFacts.duration}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <FiUsers className="text-brand mb-4" size={24} />
                  <h3 className="font-semibold text-gray-900 mb-2">Team Involved</h3>
                  <p className="text-sm text-slate-500">{service.quickFacts.team}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <FiTarget className="text-brand mb-4" size={24} />
                  <h3 className="font-semibold text-gray-900 mb-2">Ideal For</h3>
                  <p className="text-sm text-slate-500">{service.quickFacts.idealFor}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <FiDollarSign className="text-brand mb-4" size={24} />
                  <h3 className="font-semibold text-gray-900 mb-2">Investment</h3>
                  <p className="text-sm text-slate-500">{service.quickFacts.investment}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Services Included */}
          {service.servicesIncluded && service.servicesIncluded.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-8">Our Services Include</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.servicesIncluded.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-xl text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Our Process */}
          {service.process && service.process.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-10">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="text-6xl font-serif text-brand/10 absolute -top-8 -left-4 font-bold">{step.step}</span>
                    <div className="relative z-10">
                      <h3 className="font-semibold text-lg text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Related Services */}
          {service.relatedService && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-gray-200 pt-16"
            >
              <h2 className="eyebrow mb-6">Related Services</h2>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="max-w-2xl">
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">{service.relatedService.title}</h3>
                  <p className="text-slate-600">{service.relatedService.description}</p>
                </div>
                <Link to={`/services/${service.relatedService.slug}`} className="btn-outline shrink-0 whitespace-nowrap">
                  Learn More <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
