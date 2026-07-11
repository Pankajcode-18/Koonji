import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import useFetch from '../../hooks/useFetch';

const CATEGORY_COLORS = {
  Branding: '#4A74F0',
  Performance: '#2457E5',
  Video: '#8B5CF6',
  Digital: '#06B6D4',
};

const fallbackItems = [
  { _id: '1', title: 'Global Brand Identity', category: 'Branding', description: 'Complete brand overhaul and positioning.', client: 'Apex Group', images: ['https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80'], slug: 'apex-brand-identity' },
  { _id: '2', title: 'Tech Platform Launch', category: 'Digital', description: 'Custom web app and digital rollout.', client: 'Nova Corp', images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'], slug: 'nova-platform-launch' },
  { _id: '3', title: 'Cinematic Ad Campaign', category: 'Video', description: 'High-impact commercial video production.', client: 'Orbit Media', images: ['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80'], slug: 'orbit-cinematic-campaign' },
  { _id: '4', title: 'Data-Driven Growth', category: 'Performance', description: 'Aggressive scaling via performance ads.', client: 'Pulse Labs', images: ['https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80'], slug: 'pulse-labs-growth' },
  { _id: '5', title: 'B2B Lead Generation', category: 'Performance', description: 'Targeted LinkedIn and Google Ads strategy.', client: 'Vertex Co', images: ['https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'], slug: 'vertex-lead-gen' },
  { _id: '6', title: 'Corporate Rebranding', category: 'Branding', description: 'Modernizing a legacy brand for the digital age.', client: 'Zenith Inc', images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'], slug: 'zenith-corporate-rebrand' },
];

function PortfolioCard({ item }) {
  const color = CATEGORY_COLORS[item.category] || '#5C7CFF';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="card-light overflow-hidden group"
    >
      {/* Image placeholder */}
      <div
        className="h-52 overflow-hidden relative"
        style={{ background: `linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)` }}
      >
        {item.images && item.images[0] ? (
          <img
            src={item.images[0]}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 rounded-full border-2 opacity-30"
              style={{ borderColor: color }}
            />
            <div
              className="absolute w-14 h-14 rounded-full border opacity-20"
              style={{ borderColor: color }}
            />
          </div>
        )}
        {/* Category badge */}
        <span
          className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
        >
          {item.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors">
          {item.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function PortfolioPreview() {
  const { data, loading } = useFetch('/portfolio', { limit: 4, featured: true });
  const items = (data && data.length > 0) ? data : fallbackItems;

  return (
    <section className="py-16 bg-transparent" aria-label="Portfolio preview">
      <div className="container-koonji">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Work"
            title="Selected Projects"
            subtitle="A curated look at some of our favourite client work."
          />
          <Link
            to="/portfolio"
            className="btn-outline shrink-0 self-start md:self-end"
          >
            View Full Portfolio <FiArrowRight className="ml-1" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="card-light h-64 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.slice(0, 4).map((item) => (
              <PortfolioCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
