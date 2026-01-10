export default function ProblemLock() {
  const problems = [
    {
      title: 'Agency Dependency',
      description: 'Your growth is outsourced. When they change, you change. When they fail, you fail.',
    },
    {
      title: 'Rented Leads',
      description: 'Every dollar is a lease payment. Stop working, and the leads stop flowing.',
    },
    {
      title: 'No Predictability',
      description: 'You can\'t forecast. You can\'t plan. You\'re always one slow month away from crisis.',
    },
    {
      title: 'No Ownership',
      description: 'You don\'t own your system. You don\'t control your growth. You\'re renting your success.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal border-y border-charcoal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">
          You Don't Have A Lead Problem.
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-gold text-balance">
          You Have A Control Problem.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {problems.map((problem, index) => (
            <div key={index} className="border-l-2 border-gold/30 pl-6 py-4">
              <h3 className="text-xl font-bold mb-3 text-gold">{problem.title}</h3>
              <p className="text-white/70 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
