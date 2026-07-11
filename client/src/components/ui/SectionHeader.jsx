import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}
    >
      {eyebrow && (
        <span className="eyebrow block mb-3">{eyebrow}</span>
      )}
      <h2
        className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
