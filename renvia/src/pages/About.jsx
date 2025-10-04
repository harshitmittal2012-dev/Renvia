import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Renvia’s mission is to make sustainable packaging the default for food brands in Singapore." url="/about" />
      <section className="container-px mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold">Our Story</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">We founded Renvia to help hospitality brands transition to low-impact packaging without tradeoffs. We source certified compostable and recyclable materials, design for performance, and deliver reliably across Singapore.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1,2,3].map(i=> (
            <div key={i} className="card p-6">
              <div className="h-40 bg-slate-100 rounded-xl" aria-label="Team member" />
              <h3 className="mt-4 font-semibold">Team Member {i}</h3>
              <p className="text-sm text-slate-600">Sustainability Specialist</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
