export default function Testimonials() {
  const testimonials = [
    {
      name: 'Kenny & Chase Flood',
      company: 'KNC SprayFoam',
      quote: 'We went from NO calls to being overwhelmed with calls',
      embedUrl: 'https://www.youtube.com/embed/lXBGCpa_vF0?si=1HJeJ8sKmfW67sGL',
    },
    {
      name: 'Neil & Frank Wall',
      company: 'All Season Estate Care',
      quote: 'We have booked $60,000 worth of jobs in 1.5 Months',
      embedUrl: 'https://www.youtube.com/embed/gMkae1x1h9U?si=Qunudfgrs82LqF2w',
    },
    {
      name: 'Ty Schmirler',
      company: 'Calgary Kitchen Restyling',
      quote: 'I\'ve booked $100,000+ in one month from just spending $2.5K on ads',
      embedUrl: 'https://www.youtube.com/embed/OyPZDYxqfrQ?si=_2jXTn1IjlWqv72m',
    },
    {
      name: 'Justin Schlenger',
      company: 'JSM Custom Remodelling',
      quote: 'I would never have had this kind of success so quickly if it wasn\'t for CMM',
      embedUrl: 'https://www.youtube.com/embed/-AvFzlbxznA?si=36Hx9qG6fESl8CV5',
    },
    {
      name: 'Julian Farinaccio',
      company: 'Peintres PCE',
      quote: 'I have booked an extra $80,000 and now i need to hire a sales rep',
      embedUrl: 'https://www.youtube.com/embed/SPzezayw9Ro?si=bRKqBUUS_tRnTULB',
    },
    {
      name: 'David Vilot',
      company: 'Cajun Maintenance',
      quote: 'I went from spending $6K a month on SEO to not having to ANYMORE',
      embedUrl: 'https://www.youtube.com/embed/JQraWswDFFI?si=DQMxi6tJnEpHrlHU',
    },
    {
      name: 'David Price - Williams',
      company: 'Revitalised Living',
      quote: 'I\'ve booked $125,000 worth of jobs in one month working with the CMM',
      embedUrl: 'https://www.youtube.com/embed/vgrdBPP_z0c?si=EaNRzUZxVDYpz5CS',
    },
    {
      name: 'Aaron Smyth',
      company: 'North 53 Construction',
      quote: 'I\'ve spent $1,800 on ads and I got $200,000 in estimates',
      embedUrl: "https://www.youtube.com/embed/4DGPft_jtgs?si=BAHr6WUarmF-yTQ7",
    },
    {
      name: 'Matt McLean',
      company: '19k Design',
      quote: 'Booked out 6-7 Months in only 5 weeks',
      embedUrl: 'https://www.youtube.com/embed/HKpRaQx0Qes?si=TC9AOM9QRk4Cej1t',
    },
    {
      name: 'Clayton Pierre',
      company: 'ProPlastering Bristol',
      embedUrl: 'https://www.youtube.com/embed/l3RbB1LUwNg?si=J29-ttRnaltq2AfT',
    },
    {
      name: 'Matthew Leonhardt',
      company: 'Hardtwood Deck Builders',
      quote: 'From $0 to $400,000 in Quotes in Just 3 Months',
      embedUrl: 'https://www.youtube.com/embed/UIc1R7KyEZw?si=7TYQ7kaDGUUaJLoT',
    },
    {
      name: 'Chris Caruso',
      company: 'London Exterior Cleaners',
      quote: 'Bookd $300,000 from Facebook ads & more than DOUBLED my business',
      embedUrl: 'https://www.youtube.com/embed/mezftmcZkYU?si=9oyZ67OKlrcp6gvX',
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
              <div className="aspect-video bg-charcoal relative w-full">
                {testimonial.embedUrl ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={testimonial.embedUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/30 text-center p-8">
                    <div>
                      <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <p className="text-sm">Video Testimonial</p>
                    </div>
                  </div>
                )}
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
