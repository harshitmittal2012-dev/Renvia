import SEO from '../components/SEO'

const data = [
  { title: 'Restaurants', desc: 'Switch to compostable containers that keep meals fresh in transit.' },
  { title: 'Cafes', desc: 'Recyclable cups and plastic-free lids for hot and iced drinks.' },
  { title: 'Caterers', desc: 'Bulk-friendly packs and custom branding for events.' },
  { title: 'Delivery Platforms', desc: 'Durable packaging designed for couriers and long routes.' }
]

export default function Industries() {
  return (
    <>
      <SEO title="Industries We Serve" description="Solutions for restaurants, cafes, caterers and delivery companies." url="/industries" />
      <section className="container-px mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold">Industries We Serve</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((d,i)=> (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-lg">{d.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
