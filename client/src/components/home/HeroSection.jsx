import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

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
      className="relative min-h-[calc(100vh-72px)] mt-[72px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/homepagevideo.mp4" type="video/mp4" />
      </video>
      
      {/* Light Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" aria-hidden="true" />

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
