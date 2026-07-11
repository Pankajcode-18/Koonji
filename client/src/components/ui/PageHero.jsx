import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, titleHighlight, description, bgImage }) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden border-b border-gray-100 bg-slate-50">
      {/* Background Image with Light Overlay */}
      {bgImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${bgImage})` }} 
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />
        </>
      )}
      
      {/* Fallback pattern if no image */}
      {!bgImage && (
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, var(--color-brand) 0%, transparent 70%)' }} aria-hidden="true" />
      )}
      
      <div className="container-koonji relative z-10 text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow block mb-4"
          >
            {eyebrow}
          </motion.span>
        )}
        
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 max-w-4xl mx-auto"
        >
          {title} {titleHighlight && <span className="text-brand">{titleHighlight}</span>}
        </motion.h1>
        
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
