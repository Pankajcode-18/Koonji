// Trusted By marquee strip
const clients = [
  'TechNova Nepal', 'MountainBrew Tea', 'YatraCo Travel', 'NepMart',
  'Himalayan Organics', 'BankLink Nepal', 'Everest Resort', 'KTM Eats',
  'Nepal Tourism Board', 'Sunrise Finance', 'PeakPro Solutions', 'GreenPath NGO',
];

function ClientLogo({ name }) {
  return (
    <div className="flex items-center justify-center px-10 shrink-0 group">
      <span className="text-slate-400 text-sm font-medium tracking-wide group-hover:text-brand transition-colors duration-200 whitespace-nowrap select-none">
        {name}
      </span>
    </div>
  );
}

export default function TrustedBy() {
  // Duplicate the array for seamless marquee loop
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 bg-white border-y border-gray-200" aria-label="Trusted by clients">
      <div className="container-koonji mb-8 text-center">
        <span className="eyebrow">Trusted By</span>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <ClientLogo key={`${client}-${i}`} name={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
