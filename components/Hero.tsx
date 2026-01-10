'use client'

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            We Help Residential Contractors Grow Their Business
            <span className="block mt-4 text-gold">WITHOUT Hiring Marketing Agencies Or Paying For Leads</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed text-weight-bold">
            Install a private client-acquisition system that runs in under 4 hours/month and gives you predictable job flow PERMANENTLY.
          </p>
        </div>

        {/* Community / Mastermind Cards */}
        <div id="community" className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Community Card */}
          <div className="bg-white rounded-sm shadow-lg overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-dark px-6 py-5">
              <h3 className="text-2xl sm:text-3xl font-bold">
                <span className="text-gold">Contractor Marketing</span>{' '}
                <span className="text-white">Community</span>
              </h3>
            </div>
            
            {/* Body */}
            <div className="px-6 py-6 bg-white">
              <p className="text-dark mb-4 leading-relaxed">
                Learn how to run profitable Facebook ads in less than 4 hours a month (for free)
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Designed for businesses spending less than $500 per month on ads.
              </p>
              
              {/* CTA Button */}
              <a 
                href="https://www.skool.com/contractormarketing/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gold hover:bg-gold-dark text-dark font-bold py-3 px-6 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                Join Group <span>&gt;</span>
              </a>
            </div>
          </div>

          {/* Mastermind Card */}
          <div className="bg-white rounded-sm shadow-lg overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-dark px-6 py-5">
              <h3 className="text-2xl sm:text-3xl font-bold">
                <span className="text-gold">Contractor Marketing</span>{' '}
                <span className="text-white">Mastermind</span>
              </h3>
            </div>
            
            {/* Body */}
            <div className="px-6 py-6 bg-white">
              <p className="text-dark mb-4 leading-relaxed">
                Get one-on-one support, advanced training, more templates, and grow your business faster.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Designed for businesses spending more than $500 per month on ads.
              </p>
              
              {/* CTA Button */}
              <a 
                href="https://thecmm.com/schedule-auto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gold hover:bg-gold-dark text-dark font-bold py-3 px-6 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                Learn More <span>&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}