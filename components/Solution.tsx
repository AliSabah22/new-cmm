export default function Solution() {
  const pillars = [
    {
      number: '01',
      title: 'Lead Engine',
      description: 'A predictable system that generates qualified leads month after month without agency dependency.',
    },
    {
      number: '02',
      title: 'Conversion Framework',
      description: 'Proven processes that turn leads into booked jobs at premium prices with minimal friction.',
    },
    {
      number: '03',
      title: 'Operational Control',
      description: 'You own the system. You control the dials. You scale when you decide to scale.',
    },
    {
      number: '04',
      title: 'Strategic Positioning',
      description: 'Move from commodity contractor to premium operator with clear market differentiation.',
    },
    {
      number: '05',
      title: 'Scaling Infrastructure',
      description: 'Build once, scale infinitely. Frameworks that grow with your business, not against it.',
    },
  ]

  return (
    <section id="system" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            The System
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A private marketing operating system that installs a permanent job-acquisition machine inside your business.
          </p>
        </div>

        <div className="space-y-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="border border-charcoal bg-charcoal/20 p-8 rounded-sm hover:border-gold/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-gold font-bold text-2xl tracking-tight">{pillar.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-white/70 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
