export default function Testimonials() {
  // Placeholder for video testimonials
  // Replace with actual testimonial data
  const testimonials = [
    {
      name: 'Contractor Name',
      company: 'Company Name',
      quote: 'Testimonial quote goes here...',
      videoId: 'placeholder-video-id',
    },
    {
      name: 'Contractor Name',
      company: 'Company Name',
      quote: 'Testimonial quote goes here...',
      videoId: 'placeholder-video-id',
    },
    {
      name: 'Contractor Name',
      company: 'Company Name',
      quote: 'Testimonial quote goes here...',
      videoId: 'placeholder-video-id',
    },
  ]

  return (
    <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal border-y border-charcoal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          Operators Who Installed The System
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-charcoal bg-dark/50 rounded-sm overflow-hidden">
              <div className="aspect-video bg-charcoal flex items-center justify-center">
                {/* Video placeholder - replace with actual video embed */}
                <div className="text-white/30 text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="text-sm">Video Testimonial</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
