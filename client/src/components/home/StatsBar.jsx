import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 2012, label: 'Year Founded', suffix: '', prefix: '', disableComma: true },
  { value: 500, label: 'Projects Delivered', suffix: '+', prefix: '' },
  { value: 98, label: 'Client Satisfaction', suffix: '%', prefix: '' },
];

function Counter({ value, suffix, prefix, start, disableComma }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {prefix}{disableComma ? count : count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.2 });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="border-y border-gray-200 bg-white"
      aria-label="Company statistics"
    >
      <div className="container-koonji py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-gray-200">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-8 reveal reveal-delay-${i + 1}`}
            >
              <div className="font-serif text-4xl md:text-5xl font-semibold text-brand mb-2">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  start={inView}
                  disableComma={stat.disableComma}
                />
              </div>
              <div className="text-slate-500 text-sm tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
