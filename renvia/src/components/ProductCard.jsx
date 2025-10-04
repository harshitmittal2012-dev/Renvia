export default function ProductCard({ title, desc, specs = [], img = '', priceRange = '' }) {
  return (
    <div className="card overflow-hidden">
      <div className="aspect-[4/3] bg-slate-100" aria-label={title} role="img" />
      <div className="p-5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{desc}</p>
        {specs?.length > 0 && (
          <ul className="mt-3 text-sm text-slate-600 list-disc pl-5 space-y-1">
            {specs.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        )}
        {priceRange && <p className="mt-3 text-sm text-slate-700"><span className="font-semibold">Est.</span> {priceRange}</p>}
        <div className="mt-4 flex gap-3">
          <a href="/contact" className="btn btn-primary">Request a Quote</a>
          <a href="#" className="btn btn-outline">Details</a>
        </div>
      </div>
    </div>
  )
}
