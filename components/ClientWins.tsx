export default function ClientWins() {
  // Placeholder data - replace with actual client wins
  const wins = [
    {
      contractor: 'Contractor A',
      status: 'Active Pipeline',
      value: '$XX,XXX',
      jobs: 'X jobs',
    },
    {
      contractor: 'Contractor B',
      status: 'Active Pipeline',
      value: '$XX,XXX',
      jobs: 'X jobs',
    },
    {
      contractor: 'Contractor C',
      status: 'Active Pipeline',
      value: '$XX,XXX',
      jobs: 'X jobs',
    },
    {
      contractor: 'Contractor D',
      status: 'Active Pipeline',
      value: '$XX,XXX',
      jobs: 'X jobs',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal border-y border-charcoal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">
          Live Pipelines Running Right Now
        </h2>
        <p className="text-center text-white/60 mb-12">Real operators. Real systems. Real results.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {wins.map((win, index) => (
            <div key={index} className="border border-gold/30 bg-dark/50 p-6 rounded-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{win.contractor}</h3>
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-sm uppercase tracking-wide">
                    {win.status}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-charcoal">
                <div>
                  <p className="text-white/60 text-sm mb-1">Pipeline Value</p>
                  <p className="text-2xl font-bold text-gold">{win.value}</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Jobs in Queue</p>
                  <p className="text-2xl font-bold">{win.jobs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
