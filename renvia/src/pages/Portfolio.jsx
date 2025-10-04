import SEO from '../components/SEO'

export default function Portfolio() {
  return (
    <>
      <SEO title="Portfolio & Case Studies" description="Impact snapshots showcasing reduced plastic, better branding and delighted customers." url="/portfolio" />
      <section className="container-px mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold">Portfolio & Case Studies</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[1,2,3,4].map(i=> (
            <article key={i} className="card overflow-hidden">
              <div className="aspect-[16/9] bg-slate-100" />
              <div className="p-6">
                <h3 className="font-semibold">Brand {i} — Before & After</h3>
                <p className="text-sm text-slate-600 mt-1">We replaced mixed plastics with fully compostable packaging, cutting packaging-related emissions by 34%.</p>
                <ul className="mt-3 text-sm text-slate-600 list-disc pl-5 space-y-1">
                  <li>Result: -34% footprint</li>
                  <li>Customer rating: 4.8/5 (+0.4)</li>
                  <li>Time to switch: 3 weeks</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
