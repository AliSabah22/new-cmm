'use client'

import { useState, useEffect, useRef } from 'react'
import RollingNumber from './RollingNumber'

export default function TrustProof() {
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { 
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasStarted])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          Proof Of Installed Systems
        </h2>

        {/* Trustpilot Section */}
        <div className="mb-16 border border-charcoal bg-charcoal/20 p-8 rounded-sm">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">Trustpilot Rating</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl font-bold text-gold">5.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-gold fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-white/70 text-sm">Based on verified contractor reviews</p>
          </div>

          {/* Trustpilot Review Screenshots */}
          <div className="mt-8">
            <h4 className="text-lg font-bold mb-4 text-center">Verified Reviews</h4>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
              {[
                'tmp05rfdxt6.jpeg',
                'tmp0bw0ldnr.jpeg',
                'tmp0oz3piob.jpeg',
                'tmp5fnl73lu.jpeg',
                'tmp6w0b1_os.jpeg',
                'tmp93jrucb2.jpeg',
                'tmp9ad1cjsy.jpeg',
                'tmp_3_8grrs.jpeg',
                'tmp_75h30ir.jpeg',
                'tmpb41m1g2v.jpeg',
                'tmpdfd5lka7.jpeg',
                'tmpfxvfilpw.jpeg',
                'tmpir8wvksi.jpeg',
                'tmpked2c5t5.jpeg',
                'tmpku9kzd27.jpeg',
                'tmpmbfx76t9.jpeg',
                'tmpox8i9vvj.jpeg',
                'tmppzpyeh1c.jpeg',
                'tmpqpn4gm_6.jpeg',
                'tmps7u7v1hm.jpeg',
                'tmpsqrf2vvk.jpeg',
                'tmptgyjfkrz.jpeg',
                'tmpvh5afj8e.jpeg',
                'tmpwnai5oky.jpeg',
                'tmpxgkxlvur.jpeg',
                'tmpy5xpdwvj.jpeg',
                'tmpy938a1dq.jpeg',
                'tmpz8bze8iu.jpeg',
                'tmpzn1uqglo.jpeg',
              ].map((filename, index) => (
                <div key={index} className="break-inside-avoid mb-4 border border-charcoal bg-charcoal/30 rounded-sm overflow-hidden">
                  <img 
                    src={`/trustpilot-reviews/${filename}`}
                    alt={`Trustpilot Review ${index + 1}`}
                    className="w-full h-auto block"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${filename}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booked Jobs Screenshots Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">Recent Booked Jobs</h3>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {[
              'tmp0a7fp0y_.jpeg',
              'tmp1cvgtyz_.jpeg',
              'tmp1m38yp3l.jpeg',
              'tmp31qp23m4.jpeg',
              'tmp3x_mw5qs.jpeg',
              'tmp3zg519ou.jpeg',
              'tmp4rndftce.jpeg',
              'tmp4w8zn_0a.jpeg',
              'tmp54hgtqwj.jpeg',
              'tmp8_st7ggq.jpeg',
              'tmp8khqs01t.jpeg',
              'tmp8u1ftwml.jpeg',
              'tmp93lblksl.jpeg',
              'tmpaqea8rxv.jpeg',
              'tmpaticiicp.jpeg',
              'tmpbcwcgnj9.jpeg',
              'tmpbwsotpv0.jpeg',
              'tmpbxgxd_7q.jpeg',
              'tmpffzfwdts.jpeg',
              'tmpiax3ce4l.jpeg',
              'tmpix2l0mce.jpeg',
              'tmpkzwrck4m.jpeg',
              'tmpmxla6mvv.jpeg',
              'tmpnv0ywejk.jpeg',
              'tmpnw6ui6jy.jpeg',
              'tmpoeqhxccj.jpeg',
              'tmppph8hbtp.jpeg',
              'tmpqy6k5ext.jpeg',
              'tmpsvbhcb4l.jpeg',
              'tmpsvko0kn3.jpeg',
              'tmpty0mpib6.jpeg',
              'tmpty1n89e9.jpeg',
              'tmpux41fgpb.jpeg',
              'tmpym57chg5.jpeg',
              'tmpzkaggn1e.jpeg',
            ].map((filename, index) => (
              <div key={index} className="break-inside-avoid mb-4 border border-charcoal bg-charcoal/30 rounded-sm overflow-hidden">
                <img 
                  src={`/recent_booked_jobs/${filename}`}
                  alt={`Booked Job ${index + 1}`}
                  className="w-full h-auto block"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${filename}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
