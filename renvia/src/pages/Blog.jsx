import SEO from '../components/SEO'

const posts = [
  { title: 'Compostable vs Recyclable: What’s Best for Your Brand?', excerpt: 'Understand the tradeoffs between compostable and recyclable materials in Singapore’s waste system.' },
  { title: 'How To Switch Packaging in 3 Weeks', excerpt: 'A practical roadmap to transition SKUs without disrupting operations.' },
  { title: 'Design Tips for Better Delivery Performance', excerpt: 'Vent holes, lid fit and material choice matter—here’s how to optimize.' }
]

export default function Blog() {
  return (
    <>
      <SEO title="Insights & Sustainability" description="Thoughts on packaging, materials and the future of food delivery." url="/blog" />
      <section className="container-px mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold">Insights & Sustainability</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((p,i)=> (
            <article key={i} className="card p-6">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{p.excerpt}</p>
              <a href="#" className="btn btn-outline mt-4">Read More</a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
