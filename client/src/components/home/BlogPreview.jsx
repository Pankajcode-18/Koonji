import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import useFetch from '../../hooks/useFetch';

const fallbackPosts = [
  {
    _id: '1',
    title: 'Why Your Business Needs Video Advertising in 2025',
    excerpt: 'Video is no longer optional. We explore why video advertising delivers 3× the engagement.',
    category: 'Video Production',
    readTime: 6,
    publishedAt: '2025-03-15',
    slug: 'why-your-business-needs-video-advertising-2025',
  },
  {
    _id: '2',
    title: 'SEO in Nepal: What Businesses Get Wrong',
    excerpt: 'Most Nepali businesses treat SEO as a one-time task. Here\'s the 5-step fix.',
    category: 'Digital Marketing',
    readTime: 8,
    publishedAt: '2025-02-28',
    slug: 'seo-nepal-what-businesses-get-wrong',
  },
  {
    _id: '3',
    title: 'Building a Brand Identity That Lasts: Lessons from 12 Years',
    excerpt: 'After helping 500+ businesses, here\'s what makes brand identity endure.',
    category: 'Branding',
    readTime: 7,
    publishedAt: '2025-02-10',
    slug: 'building-brand-identity-lessons-12-years',
  },
];

const CATEGORY_COLORS = {
  'Video Production': '#8B5CF6',
  'Digital Marketing': '#06B6D4',
  'Branding': '#4A74F0',
  'Performance Ads': '#2457E5',
};

function BlogCard({ post }) {
  const color = CATEGORY_COLORS[post.category] || '#4A74F0';
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="card-light p-7 flex flex-col h-full group"
    >
      <span
        className="text-xs font-semibold px-3 py-1 rounded-full self-start mb-5"
        style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
      >
        {post.category}
      </span>
      <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors flex-1">
        {post.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4 text-slate-500 text-xs">
          <span className="flex items-center gap-1.5">
            <FiCalendar size={11} /> {date}
          </span>
          <span className="flex items-center gap-1.5">
            <FiClock size={11} /> {post.readTime} min read
          </span>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="text-brand text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
          aria-label={`Read ${post.title}`}
        >
          Read <FiArrowRight size={13} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogPreview() {
  const { data, loading } = useFetch('/blog', { limit: 3 });
  const posts = (data && data.length > 0) ? data : fallbackPosts;

  return (
    <section className="py-16 bg-white" aria-label="Blog preview">
      <div className="container-koonji">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Insights"
            title="From Our Blog"
            subtitle="Strategy, creativity, and industry perspective from the Koonji team."
          />
          <Link to="/blog" className="btn-outline shrink-0 self-start md:self-end">
            All Articles <FiArrowRight className="ml-1" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="card-light h-56 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
