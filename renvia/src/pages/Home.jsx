import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import NewsletterForm from '../components/NewsletterForm'

export default function Home() {
  const products = [
    { title: 'Compostable Boxes', desc: 'Leak-resistant, heat-holding boxes from plant fibers.', specs: ['Sizes: 500–1200ml', 'Microwave safe', 'Home & industrial compostable'], priceRange: '$0.12–$0.28 / unit' },
    { title: 'Paper Cups', desc: 'PLA-lined cups with secure lids for hot and cold beverages.', specs: ['8–16oz', 'Custom print available', 'Plastic-free lids'], priceRange: '$0.05–$0.15 / unit' },
    { title: 'Cutlery', desc: 'Durable CPLA and birchwood cutlery sets.', specs: ['Fork, Spoon, Knife', 'Wrapped sets available', 'Heat resistant'], priceRange: '$0.03–$0.08 / unit' }
  ]

  return (
    <>
      <SEO
        title="Eco-friendly Packaging in Singapore"
        description="Sustainable, compostable packaging for delivery and takeaway. Switch with confidence and reduce your footprint."
        url="/"
      />
      <Hero />

      <section className="container-px mx-auto py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Solutions</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p,i)=> <ProductCard key={i} {...p} />)}
        </div>
      </section>

      <section className="container-px mx-auto py-12 md:py-20">
        <div className="card p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold">Join our sustainability newsletter</h3>
          <p className="text-slate-600 mt-2">Monthly insights on eco materials, regulations and packaging trends.</p>
          <div className="mt-6 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}
