import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTrendingUp, FiBriefcase, FiVideo, FiBarChart2, FiZap, FiMonitor, FiSmartphone, FiPieChart, FiLayout } from 'react-icons/fi';
import { MdCampaign } from 'react-icons/md';
import useFetch from '../hooks/useFetch';
import PageHero from '../components/ui/PageHero';

const iconMap = {
  MdCampaign, MdTrendingUp: FiTrendingUp, MdBrush: FiBriefcase,
  MdVideocam: FiVideo, MdShowChart: FiBarChart2,
  MdWeb: FiMonitor,  MdPhoneIphone: FiSmartphone,
  MdAnalytics: FiPieChart,
  MdDesignServices: FiLayout,
  default: FiZap,
};

const fallbackServices = [
  { _id: '1', title: 'Ad Creation', slug: 'ad-creation', shortDescription: 'High-converting ads that captivate, engage, and convert your target audience across every platform.', icon: 'MdCampaign' },
  { _id: '2', title: 'Digital Marketing', slug: 'digital-marketing', shortDescription: 'Full-spectrum digital marketing that puts your brand in front of the right people at the right moment.', icon: 'MdTrendingUp' },
  { _id: '3', title: 'Branding', slug: 'branding', shortDescription: 'Distinctive brand identities built to command attention, build trust, and stand the test of time.', icon: 'MdBrush' },
  { _id: '4', title: 'Video Production', slug: 'video-production', shortDescription: 'Cinematic video content that tells your story and moves your audience to act.', icon: 'MdVideocam' },
  { _id: '5', title: 'Performance Ads', slug: 'performance-ads', shortDescription: 'Data-fuelled paid advertising campaigns engineered for maximum ROI and measurable growth.', icon: 'MdShowChart' },
  { _id: '6', title: 'Web Development', slug: 'web-development', shortDescription: 'Custom, high-performance websites built for speed, scalability, and seamless user experiences.', icon: 'MdWeb' },
  { _id: '7', title: 'Application Development', slug: 'application-development', shortDescription: 'Intuitive and powerful mobile applications designed to engage users and drive business growth.', icon: 'MdPhoneIphone' },
  { _id: '8', title: 'SEO & Analytics', slug: 'seo-analytics', shortDescription: 'Data-driven SEO strategies that improve your visibility and drive organic growth.', icon: 'MdAnalytics' },
  { _id: '9', title: 'UI/UX Design', slug: 'ui-ux-design', shortDescription: 'User-centric designs that delight your customers and reduce friction at every touchpoint.', icon: 'MdDesignServices' },
];

export default function Services() {
  const { data, loading, error } = useFetch('/services');
  const servicesList = (data && data.length > 0) ? data : fallbackServices;

  return (
    <>
      <Helmet>
        <title>Our Services — Koonji Infotech | Digital Marketing & Creative Agency</title>
        <meta name="description" content="Explore Koonji Infotech's full-funnel creative and digital services. From ad creation and branding to performance marketing and video production in Nepal." />
        <link rel="canonical" href="https://koonji.com/services" />
      </Helmet>

      {/* Page hero */}
      <PageHero 
        eyebrow="Our Services"
        title="What We"
        titleHighlight="Do"
        description="Comprehensive creative and digital solutions designed to elevate your brand and drive measurable results."
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
      />

      <section className="py-16 bg-gray-50">
        <div className="container-koonji">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(5)].map((_, i) => <div key={i} className="card-light h-56 animate-pulse" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicesList.map((service, i) => {
                const Icon = iconMap[service.icon] || iconMap.default;
                return (
                  <motion.div
                    key={service._id || service.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link to={`/services/${service.slug}`} className="card-light block p-7 h-full group">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{ background: 'rgba(36,87,229,0.1)', border: '1px solid rgba(36,87,229,0.15)' }}>
                        <Icon className="text-brand" size={22} />
                      </div>
                      <h2 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors">{service.title}</h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">{service.shortDescription}</p>
                      <span className="inline-flex items-center gap-2 text-brand text-sm font-medium group-hover:gap-3 transition-all">
                        Explore <FiArrowRight size={14} />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
