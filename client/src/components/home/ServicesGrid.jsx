import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTrendingUp, FiBriefcase, FiVideo, FiBarChart2, FiZap, FiMonitor, FiSmartphone, FiPieChart, FiLayout } from 'react-icons/fi';
import { MdCampaign } from 'react-icons/md';
import SectionHeader from '../ui/SectionHeader';
import useFetch from '../../hooks/useFetch';

const iconMap = {
  MdCampaign: MdCampaign,
  MdTrendingUp: FiTrendingUp,
  MdBrush: FiBriefcase,
  MdVideocam: FiVideo,
  MdShowChart: FiBarChart2,
  MdWeb: FiMonitor,
  MdPhoneIphone: FiSmartphone,
  MdAnalytics: FiPieChart,
  MdDesignServices: FiLayout,
  default: FiZap,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || iconMap.default;

  return (
    <motion.div variants={cardVariants}>
      <Link
        to={`/services/${service.slug}`}
        className="card-light block p-7 h-full group"
        aria-label={`Learn more about ${service.title}`}
      >
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
          style={{ background: 'rgba(36, 87, 229, 0.08)', border: '1px solid rgba(36, 87, 229, 0.15)' }}
        >
          <Icon className="text-brand" size={22} />
        </div>
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
          {service.shortDescription}
        </p>
        <span className="inline-flex items-center gap-2 text-brand text-sm font-medium group-hover:gap-3 transition-all duration-200">
          Explore Service <FiArrowRight size={14} />
        </span>
      </Link>
    </motion.div>
  );
}

// Fallback static services if API is unavailable
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

export default function ServicesGrid() {
  const { data, loading } = useFetch('/services');
  const services = data || fallbackServices;

  return (
    <section className="py-16 bg-transparent" aria-label="Our services">
      <div className="container-koonji">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive Creative Services"
          subtitle="From concept to conversion — every service is designed to drive measurable results for your business."
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="card-light h-52 animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {services.map((service) => (
              <ServiceCard key={service._id || service.slug} service={service} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
