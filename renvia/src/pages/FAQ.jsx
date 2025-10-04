import SEO from '../components/SEO'

const faqs = [
  { q: 'What materials do you use?', a: 'We prioritize compostable plant fibers (bagasse), FSC-certified paper, and CPLA. Each item is selected for performance and end-of-life impact.' },
  { q: 'Are your products certified?', a: 'Yes. Our range includes items certified to EN 13432 or ASTM D6400 for compostability. Certificates are available upon request.' },
  { q: 'Do you offer custom branding?', a: 'Absolutely. We support custom printing, embossing and sizing. Minimum order quantities (MOQ) vary by product.' },
  { q: 'What are the MOQs?', a: 'Stock items have no MOQs beyond carton quantities. Custom print typically starts from 5,000–20,000 units depending on the SKU.' },
  { q: 'How fast is delivery?', a: 'For stock items in Singapore, delivery is typically 2–4 business days. Custom orders depend on artwork approval and production slots.' },
  { q: 'Do you provide samples?', a: 'Yes, free standard samples are available for businesses. Premium sample kits and courier fees may apply.' },
  { q: 'Can you help me choose the right items?', a: 'Yes. Tell us your menu and operations, and we’ll recommend SKUs that balance performance, cost and sustainability.' },
  { q: 'What about recycling and composting in Singapore?', a: 'We help clients design for local waste systems and share best practices to maximize real-world impact.' },
]

export default function FAQ() {
  return (
    <>
      <SEO title="FAQ" description="Answers to common questions about materials, certifications, MOQs and delivery." url="/faq" />
      <section className="container-px mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h1>
        <div className="mt-8 grid gap-4">
          {faqs.map((f,i)=> (
            <details key={i} className="card p-4">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
