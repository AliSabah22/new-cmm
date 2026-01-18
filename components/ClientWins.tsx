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
          Client's Recent Wins
        </h2>
        <p className="text-center text-white/60 mb-12">Real operators. Real systems. Real results.</p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {[
            'tmp4qpf0e0n.jpeg',
            'tmp646f3jk2.jpeg',
            'tmp98rlhkgj.jpeg',
            'tmp9f8qvi_f.jpeg',
            'tmpa6rjzhul.jpeg',
            'tmpadgr6vja.jpeg',
            'tmpc57x_c86.jpeg',
            'tmpd7ezhcpi.jpeg',
            'tmpfuyhee34.jpeg',
            'tmpgb6i6z5j.jpeg',
            'tmpgyxcyzmy.jpeg',
            'tmphw8iy466.jpeg',
            'tmpk4ecnacl.jpeg',
            'tmpmdm7irgk.jpeg',
            'tmpozpdxg91.jpeg',
            'tmpql7w_h5r.jpeg',
            'tmptm6v5ay1.jpeg',
            'tmpvu9qz6eq.jpeg',
            'tmpw1zqzwfx.jpeg',
          ].map((filename, index) => (
            <div key={index} className="break-inside-avoid mb-4 border border-charcoal bg-charcoal/30 rounded-sm overflow-hidden">
              <img 
                src={`/client's_recent_wins/${filename}`}
                alt={`Client Win ${index + 1}`}
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
    </section>
  )
}
