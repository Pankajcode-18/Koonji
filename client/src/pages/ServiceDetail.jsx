import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import CtaBanner from '../components/home/CtaBanner';

const fallbackServices = [
  { 
    _id: '1', title: 'Ad Creation', slug: 'ad-creation', 
    shortDescription: 'High-converting ads that captivate, engage, and convert your target audience across every platform.', 
    fullDescription: 'Our ad creation process goes beyond just making pretty pictures. We dive deep into consumer psychology to craft scroll-stopping creatives that demand attention. By combining compelling copy with striking visuals, we build ad campaigns tailored for platforms like Meta, Google, and TikTok to ensure your message resonates with the right audience at the perfect moment.',
    features: ['Custom Graphic & Banner Design', 'Persuasive Ad Copywriting', 'A/B Testing & Creative Iteration', 'Platform-Specific Formats (Stories, Reels, Feed)', 'Campaign Strategy & Ideation'],
    metaTitle: 'Ad Creation Services | Koonji Infotech' 
  },
  { 
    _id: '2', title: 'Digital Marketing', slug: 'digital-marketing', 
    shortDescription: 'Full-spectrum digital marketing that puts your brand in front of the right people at the right moment.', 
    fullDescription: 'A successful digital presence requires a holistic, multi-channel strategy. Our digital marketing service encompasses everything from social media management to email marketing and content creation. We align our tactics with your core business objectives to build sustainable funnels that nurture leads, build community trust, and drive consistent revenue growth.',
    features: ['Comprehensive Marketing Strategy', 'Social Media Management', 'Email Marketing & Automation', 'Lead Generation Campaigns', 'Monthly Performance Reporting'],
    metaTitle: 'Digital Marketing Services | Koonji Infotech' 
  },
  { 
    _id: '3', title: 'Branding', slug: 'branding', 
    shortDescription: 'Distinctive brand identities built to command attention, build trust, and stand the test of time.', 
    fullDescription: 'Your brand is the gut feeling your customers have about your business. We help you define, design, and deliver a cohesive brand identity that speaks directly to your target market. From conceptualizing the perfect logo to establishing your brand voice and visual guidelines, we ensure every touchpoint leaves a memorable and professional impression.',
    features: ['Logo Design & Typography', 'Color Palette & Visual Guidelines', 'Brand Voice & Messaging Framework', 'Corporate Identity Kits', 'Rebranding & Refresh Strategies'],
    metaTitle: 'Branding Services | Koonji Infotech' 
  },
  { 
    _id: '4', title: 'Video Production', slug: 'video-production', 
    shortDescription: 'Cinematic video content that tells your story and moves your audience to act.', 
    fullDescription: 'Video is the most powerful medium for storytelling in the digital age. Our in-house production team handles everything from conceptualization and scriptwriting to filming, editing, and post-production. Whether you need a high-end corporate documentary, snappy social media reels, or product demonstration videos, we create visually stunning content that drives engagement.',
    features: ['Concept Development & Storyboarding', 'Professional Filming & Lighting', 'Drone & Aerial Cinematography', 'Video Editing & Color Grading', 'Motion Graphics & Animation'],
    metaTitle: 'Video Production Services | Koonji Infotech' 
  },
  { 
    _id: '5', title: 'Performance Ads', slug: 'performance-ads', 
    shortDescription: 'Data-fuelled paid advertising campaigns engineered for maximum ROI and measurable growth.', 
    fullDescription: 'Stop wasting ad spend on campaigns that don’t deliver. Our performance marketing team specializes in data-driven media buying. We meticulously track every click, conversion, and dollar spent to optimize your campaigns in real-time. By leveraging advanced targeting and retargeting strategies, we scale your business aggressively while maintaining a profitable Return on Ad Spend (ROAS).',
    features: ['Google Ads & Search Engine Marketing', 'Meta (Facebook/Instagram) Advertising', 'TikTok & LinkedIn Ads', 'Advanced Pixel Setup & Conversion Tracking', 'Continuous Bid Optimization'],
    metaTitle: 'Performance Ads | Koonji Infotech' 
  },
  { 
    _id: '6', title: 'Web Development', slug: 'web-development', 
    shortDescription: 'Custom, high-performance websites built for speed, scalability, and seamless user experiences.', 
    fullDescription: 'Your website is your ultimate digital storefront. We build custom, blazing-fast web applications utilizing modern frameworks like React, Next.js, and Node.js. We don’t just use templates; we architect scalable solutions optimized for performance, security, and search engines. From e-commerce platforms to robust corporate sites, we ensure your web presence is flawless.',
    features: ['Custom Frontend & Backend Development', 'E-commerce Solutions', 'CMS Integration (WordPress, Sanity, etc.)', 'Performance & Speed Optimization', 'Responsive & Mobile-First Coding'],
    metaTitle: 'Web Development Services | Koonji Infotech' 
  },
  { 
    _id: '7', title: 'Application Development', slug: 'application-development', 
    shortDescription: 'Intuitive and powerful mobile applications designed to engage users and drive business growth.', 
    fullDescription: 'Take your business directly to your customers’ pockets. We design and develop cross-platform mobile applications for iOS and Android that are intuitive, feature-rich, and built to scale. From the initial wireframes to app store deployment, our engineering team ensures a seamless user experience that keeps your audience coming back.',
    features: ['iOS & Android App Development', 'Cross-Platform Frameworks (React Native/Flutter)', 'UI/UX App Prototyping', 'API Integration & Backend Infrastructure', 'App Store Deployment & Maintenance'],
    metaTitle: 'App Development | Koonji Infotech' 
  },
  { 
    _id: '8', title: 'SEO & Analytics', slug: 'seo-analytics', 
    shortDescription: 'Data-driven SEO strategies that improve your visibility and drive organic growth.', 
    fullDescription: 'Visibility is everything. Our SEO experts implement white-hat strategies to organically rank your business at the top of search engine results. We combine technical audits, on-page optimization, and high-quality link building to drive sustained, targeted traffic to your site. Coupled with deep analytics integration, you will always know exactly how your audience is behaving.',
    features: ['Comprehensive Technical SEO Audits', 'Keyword Research & Competitor Analysis', 'On-Page & Off-Page Optimization', 'Google Analytics & Tag Manager Setup', 'Local SEO & Google Business Profile Management'],
    metaTitle: 'SEO & Analytics | Koonji Infotech' 
  },
  { 
    _id: '9', title: 'UI/UX Design', slug: 'ui-ux-design', 
    shortDescription: 'User-centric designs that delight your customers and reduce friction at every touchpoint.', 
    fullDescription: 'Great design is about how it works, not just how it looks. Our UI/UX process is heavily rooted in user research and behavioral psychology. We create wireframes, interactive prototypes, and high-fidelity interfaces that minimize friction and guide users naturally toward conversion points, ensuring a delightful and intuitive experience.',
    features: ['User Research & Persona Development', 'Wireframing & Interactive Prototyping', 'High-Fidelity Interface Design', 'Usability Testing & Feedback Integration', 'Design Systems & Component Libraries'],
    metaTitle: 'UI/UX Design | Koonji Infotech' 
  },
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
      <section className="pt-36 pb-20 bg-white relative overflow-hidden">
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

      {/* Full description + features */}
      <section className="py-20 bg-gray-50">
        <div className="container-koonji">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                What's Included
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">{service.fullDescription}</p>
              <Link to="/contact-us" className="btn-outline inline-flex">
                Discuss Your Project <FiArrowRight className="ml-1" />
              </Link>
            </motion.div>

            {service.features && service.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                  Key Deliverables
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <FiCheckCircle className="text-brand mt-0.5 shrink-0" size={16} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
