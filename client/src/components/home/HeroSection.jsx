import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

// Aperture/iris SVG decoration
function ApertureDecoration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Radial blue glow behind */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#2457E5] opacity-[0.05] blur-[100px]" />

      {/* Aperture rings */}
      <svg
        className="absolute w-[700px] h-[700px] opacity-[0.08] aperture-ring-1"
        viewBox="0 0 700 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="350" cy="350" r="280" stroke="#2457E5" strokeWidth="1" strokeDasharray="8 12" />
        <circle cx="350" cy="350" r="200" stroke="#4A74F0" strokeWidth="1" strokeDasharray="4 16" />
      </svg>
      <svg
        className="absolute w-[900px] h-[900px] opacity-[0.05] aperture-ring-2"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="450" cy="450" r="380" stroke="#2457E5" strokeWidth="1" strokeDasharray="16 8" />
        <circle cx="450" cy="450" r="300" stroke="#4A74F0" strokeWidth="0.5" />
      </svg>

      {/* Camera aperture blades (simplified) */}
      <svg
        className="absolute w-[400px] h-[400px] opacity-[0.06]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect
            key={i}
            x="190"
            y="80"
            width="20"
            height="120"
            rx="4"
            fill="#2457E5"
            transform={`rotate(${angle} 200 200)`}
          />
        ))}
        <circle cx="200" cy="200" r="60" stroke="#4A74F0" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-28"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(36,87,229,0.05) 0%, transparent 70%), linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
        }}
        aria-hidden="true"
      />

      <ApertureDecoration />

      {/* Content */}
      <motion.div
        className="container-koonji relative z-10 mt-12 pb-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.span variants={itemVariants} className="eyebrow inline-block mb-6">
          Nepal's Premier Creative Agency
        </motion.span>

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-semibold leading-[1.1] tracking-[-0.01em] text-gray-900 max-w-5xl mx-auto"
        >
          We Build Advertising{' '}
          <span
            className="italic text-brand"
          >
            That Moves People
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-7 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          We craft bold campaigns, powerful brands, and performance-driven content that connects
          your business with the right audience at the right moment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/portfolio" id="hero-see-work-cta" className="btn-outline px-7 py-3 text-base">
            See Our Work <FiArrowRight className="ml-1" />
          </Link>
          <Link to="/contact-us" id="hero-contact-cta" className="btn-primary px-7 py-3 text-base">
            Get in Touch
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-brand to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
