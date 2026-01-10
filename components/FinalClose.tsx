'use client'

export default function FinalClose() {
  return (
    <section id="apply" className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal border-y border-charcoal">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
          Stop Renting Your Growth.
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-gold text-balance leading-tight">
          Install Your System.
        </h2>

        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Take control of your client acquisition. Build permanent infrastructure. Scale on your terms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-gold text-dark px-10 py-5 rounded-sm font-bold text-lg hover:bg-gold-light transition-colors tracking-wide uppercase">
            Get The System
          </button>
          <button className="w-full sm:w-auto border-2 border-gold text-gold px-10 py-5 rounded-sm font-bold text-lg hover:bg-gold/10 transition-colors tracking-wide uppercase">
            Apply For Mastermind
          </button>
        </div>

        <div className="mt-16 pt-12 border-t border-charcoal">
          <p className="text-white/50 text-sm uppercase tracking-wide">Private Growth Operating System</p>
          <p className="text-2xl font-bold mt-2">CMM</p>
        </div>
      </div>
    </section>
  )
}
