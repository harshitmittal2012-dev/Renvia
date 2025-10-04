import SEO from '../components/SEO'

const tiers = [
  { name: 'Starter', price: 'From $199/mo', features: ['Small volumes', 'Standard SKUs', 'Email support'] },
  { name: 'Growth', price: 'From $499/mo', features: ['Medium volumes', 'Custom branding', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', features: ['Large volumes', 'Dedicated sourcing', 'Account manager'] }
]

export default function Pricing() {
  return (
    <>
      <SEO title="Pricing & Range" description="Transparent pricing with custom quotes available for any volume." url="/pricing" />
      <section className="container-px mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold">Pricing & Range</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map((t,i)=> (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-xl">{t.name}</h3>
              <p className="text-2xl font-bold mt-2">{t.price}</p>
              <ul className="mt-4 text-sm text-slate-600 list-disc pl-5 space-y-1">
                {t.features.map((f,idx)=> <li key={idx}>{f}</li>)}
              </ul>
              <a href="/contact" className="btn btn-primary mt-6">Request Custom Quote</a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
