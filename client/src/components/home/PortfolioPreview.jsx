import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import useFetch from '../../hooks/useFetch';
import { fallbackPortfolio } from '../../pages/PortfolioDetail';

const CATEGORY_COLORS = {
  Branding: '#4A74F0',
  Performance: '#2457E5',
  Video: '#8B5CF6',
  Digital: '#06B6D4',
};

function PortfolioCard({ item }) {
  const color = CATEGORY_COLORS[item.category] || '#5C7CFF';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="card-light overflow-hidden group cursor-pointer"
    >
      <Link to={`/portfolio/${item.slug}`} className="block h-full flex flex-col">
        {/* Image placeholder */}
        <div
          className="h-52 overflow-hidden relative shrink-0"
          style={{ background: `linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)` }}
        >
          {item.images && item.images[0] ? (
            <img
              src={item.images[0]}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-brand opacity-20" />
            </div>
          )}
          <span
            className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md"
            style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
          >
            {item.category}
          </span>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors">
            {item.title}
          </h3>
          {item.client && <p className="text-slate-500 text-xs mb-2">Client: {item.client}</p>}
          <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function PortfolioPreview() {
  const { data, loading } = useFetch('/portfolio?limit=6');
  
  // Use data from API or the first 6 items from our fallback array
  const items = data && data.length > 0 ? data : fallbackPortfolio.slice(0, 6);

  return (
    <section className="py-24 bg-white border-y border-gray-100" aria-label="Portfolio Preview">
      <div className="container-koonji">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Work"
            title="Projects that"
            titleHighlight="Inspire"
            description="A curated selection of our most impactful brand transformations and digital campaigns."
            align="left"
            className="mb-0"
          />
          <Link to="/portfolio" className="btn-outline shrink-0">
            View All Work <FiArrowRight className="ml-1" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="card-light h-80 animate-pulse bg-gray-50 border border-gray-100" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <PortfolioCard key={item._id} item={item} />
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/portfolio" className="btn-primary w-full justify-center">
            View All Work <FiArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
