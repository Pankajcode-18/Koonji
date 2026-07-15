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
      className="relative flex flex-col md:block mt-[72px] md:min-h-[calc(100vh-72px)] overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* Background Video Container */}
      <div className="relative w-full aspect-video md:absolute md:inset-0 md:h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/logo-video.mp4" type="video/mp4" />
        </video>
        
        {/* Light Overlay to ensure text readability - only active on desktop when text is over the video */}
        <div className="hidden md:block absolute inset-0 bg-white/50 backdrop-blur-[2px]" aria-hidden="true" />
      </div>

      {/* Content */}
      <motion.div
        className="container-koonji relative z-10 pt-10 pb-16 md:py-0 text-center flex flex-col items-center justify-center md:min-h-[calc(100vh-72px)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.span variants={itemVariants} className="eyebrow inline-block mb-6 md:mt-12">
          Nepal's Premier Creative Agency
        </motion.span>

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-semibold leading-[1.1] tracking-[-0.01em] text-gray-900 max-w-5xl mx-auto px-4 md:px-0"
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

        {/* Scroll indicator - hidden on mobile since text pushes down */}
        <motion.div
          variants={itemVariants}
          className="hidden md:flex mt-20 flex-col items-center gap-2 absolute bottom-12"
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
