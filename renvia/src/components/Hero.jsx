import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="container-px mx-auto pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="badge">Singapore • Sustainable Packaging</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Packaging that puts the planet first.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Renvia helps restaurants, cafes and delivery brands switch to compostable and recyclable packaging—without compromising quality or performance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
            <Link to="/products" className="btn btn-outline">View Our Range</Link>
          </div>
          <ul className="mt-6 text-sm text-slate-600 grid gap-2">
            <li>• Certified compostable materials</li>
            <li>• Custom branding and sizes</li>
            <li>• Reliable local delivery</li>
          </ul>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-100 to-brand-300" />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-brand-600/10" />
        </motion.div>
      </div>
    </section>
  )
}
