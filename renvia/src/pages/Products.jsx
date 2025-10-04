import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'

const catalog = [
  { title: 'Compostable Boxes', desc: 'From plant fibers with excellent heat retention and leak resistance.', specs: ['500ml, 750ml, 1000ml, 1200ml', 'Vented lids', 'Custom branding'], priceRange: '$0.12–$0.28 / unit' },
  { title: 'Paper Cups', desc: 'PLA-lined cups for hot and cold beverages with recyclable lids.', specs: ['8oz, 12oz, 16oz', 'Strawless lid options', 'CMYK print'], priceRange: '$0.05–$0.15 / unit' },
  { title: 'Cutlery', desc: 'CPLA and birchwood cutlery that performs like traditional plastics.', specs: ['Fork, Spoon, Knife', 'Wrapped sets', 'Heat resistant'], priceRange: '$0.03–$0.08 / unit' },
  { title: 'Delivery Bags', desc: 'Recyclable paper delivery bags with reinforced handles.', specs: ['S, M, L', 'Moisture resistant', 'Custom print'], priceRange: '$0.12–$0.20 / unit' },
  { title: 'Eco Wraps', desc: 'Grease-proof wraps made from FSC-certified paper.', specs: ['Sheets & rolls', 'Food safe inks', 'Compostable'], priceRange: '$0.01–$0.05 / unit' }
]

export default function Products() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: catalog.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: item.title,
        description: item.desc,
      }
    }))
  }
  return (
    <>
      <SEO title="Products & Solutions" description="Explore compostable boxes, cups, cutlery, delivery bags and eco wraps." url="/products" schema={schema} />
      <section className="container-px mx-auto py-12 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold">Products & Solutions</h1>
          <a href="/catalogue.pdf" className="btn btn-outline">Download Catalogue</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((item, i)=> <ProductCard key={i} {...item} />)}
        </div>
      </section>
    </>
  )
}
