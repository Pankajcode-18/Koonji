import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function CtaBanner() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1A3FB8 50%, #2457E5 100%)',
      }}
      aria-label="Call to action"
    >
      {/* Subtle aperture decoration */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-[600px] h-[600px] rounded-full border border-white opacity-[0.04]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white opacity-[0.06]" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white opacity-[0.08]" />
      </div>

      <div className="container-koonji relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow block mb-4 text-white/70"
        >
          Let's Work Together
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-3xl mx-auto"
        >
          Ready to Create Something{' '}
          <span className="italic opacity-90">Extraordinary?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg text-white/70 max-w-xl mx-auto"
        >
          Let's talk about how we can help your business grow. No hard sell — just a genuine conversation about your goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact-us"
            id="cta-banner-contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand font-semibold rounded-md hover:bg-white/90 transition-all duration-200 hover:shadow-[0_6px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
          >
            Start a Project <FiArrowRight />
          </Link>
          <a
            href={`https://calendly.com/koonji`}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-banner-calendly"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white font-semibold rounded-md border border-white/30 hover:bg-white/10 transition-all duration-200"
          >
            Schedule a Free Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
