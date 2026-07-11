import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import CtaBanner from '../components/home/CtaBanner';

const fallbackServices = [
  { _id: '1', title: 'Ad Creation', slug: 'ad-creation', shortDescription: 'High-converting ads that captivate, engage, and convert your target audience across every platform.', content: '<p>Our ad creation service is designed to stop the scroll and drive action.</p>', metaTitle: 'Ad Creation Services | Koonji Infotech' },
  { _id: '2', title: 'Digital Marketing', slug: 'digital-marketing', shortDescription: 'Full-spectrum digital marketing that puts your brand in front of the right people at the right moment.', content: '<p>We provide comprehensive digital marketing strategies.</p>', metaTitle: 'Digital Marketing Services | Koonji Infotech' },
  { _id: '3', title: 'Branding', slug: 'branding', shortDescription: 'Distinctive brand identities built to command attention, build trust, and stand the test of time.', content: '<p>Your brand is more than just a logo. We build distinct brand identities.</p>', metaTitle: 'Branding Services | Koonji Infotech' },
  { _id: '4', title: 'Video Production', slug: 'video-production', shortDescription: 'Cinematic video content that tells your story and moves your audience to act.', content: '<p>Engage your audience with high-quality video production.</p>', metaTitle: 'Video Production Services | Koonji Infotech' },
  { _id: '5', title: 'Performance Ads', slug: 'performance-ads', shortDescription: 'Data-fuelled paid advertising campaigns engineered for maximum ROI and measurable growth.', content: '<p>Maximize your ROI with our data-driven performance ads.</p>', metaTitle: 'Performance Ads | Koonji Infotech' },
  { _id: '6', title: 'Web Development', slug: 'web-development', shortDescription: 'Custom, high-performance websites built for speed, scalability, and seamless user experiences.', content: '<p>We build blazing-fast, modern websites tailored to your needs.</p>', metaTitle: 'Web Development Services | Koonji Infotech' },
  { _id: '7', title: 'Application Development', slug: 'application-development', shortDescription: 'Intuitive and powerful mobile applications designed to engage users and drive business growth.', content: '<p>Build robust applications for iOS and Android.</p>', metaTitle: 'App Development | Koonji Infotech' },
  { _id: '8', title: 'SEO & Analytics', slug: 'seo-analytics', shortDescription: 'Data-driven SEO strategies that improve your visibility and drive organic growth.', content: '<p>Dominate search engines with our advanced SEO strategies.</p>', metaTitle: 'SEO & Analytics | Koonji Infotech' },
  { _id: '9', title: 'UI/UX Design', slug: 'ui-ux-design', shortDescription: 'User-centric designs that delight your customers and reduce friction at every touchpoint.', content: '<p>We craft beautiful and highly functional user interfaces.</p>', metaTitle: 'UI/UX Design | Koonji Infotech' },
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
