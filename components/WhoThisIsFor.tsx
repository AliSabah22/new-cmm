export default function WhoThisIsFor() {
  const forList = [
    { title: 'Residential Contractors Only', description: 'This is built specifically for your industry. Not generic. Not adapted. Purpose-built.' },
    { title: 'Real Operators', description: 'You run a business. You understand systems. You want control.' },
    { title: 'Not Beginners', description: 'This is for established contractors ready to scale, not those still figuring out the basics.' },
    { title: 'Not Agency Hoppers', description: 'If you\'re looking for the next quick fix, this isn\'t it. This is permanent infrastructure.' },
  ]

  const notFor = [
    'Beginners still learning the trade',
    'Those looking for quick-fix marketing tricks',
    'Contractors unwilling to invest in their growth',
    'Anyone comfortable with renting their success',
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          Who This Is For
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {forList.map((item, index) => (
            <div key={index} className="border-l-2 border-gold pl-6 py-4">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border border-charcoal bg-charcoal/20 p-8 rounded-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-white/60">This System Is Not For:</h3>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {notFor.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/60">
                <span className="text-gold mt-1">×</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
