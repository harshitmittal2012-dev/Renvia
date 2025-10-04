import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navClasses = ({ isActive }) =>
  `px-3 py-2 rounded-full font-medium transition-colors ${isActive ? 'text-brand-700 bg-brand-50' : 'text-slate-700 hover:text-brand-700'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-px mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl text-brand-700">
          <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700" />
          Renvia
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/products" className={navClasses}>Products</NavLink>
          <NavLink to="/industries" className={navClasses}>Industries</NavLink>
          <NavLink to="/portfolio" className={navClasses}>Portfolio</NavLink>
          <NavLink to="/pricing" className={navClasses}>Pricing</NavLink>
          <NavLink to="/about" className={navClasses}>About</NavLink>
          <NavLink to="/faq" className={navClasses}>FAQ</NavLink>
          <NavLink to="/blog" className={navClasses}>Blog</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          <a href="/catalogue.pdf" className="btn btn-outline">Download Catalogue</a>
        </div>
        <button onClick={() => setOpen(v=>!v)} className="md:hidden p-2 rounded-lg border border-slate-300" aria-label="Toggle navigation">
          <span className="i"/>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-px py-3 grid gap-2">
            <NavLink onClick={()=>setOpen(false)} to="/products" className={navClasses}>Products</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/industries" className={navClasses}>Industries</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/portfolio" className={navClasses}>Portfolio</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/pricing" className={navClasses}>Pricing</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/about" className={navClasses}>About</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/faq" className={navClasses}>FAQ</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/blog" className={navClasses}>Blog</NavLink>
            <Link onClick={()=>setOpen(false)} to="/contact" className="btn btn-primary mt-2">Get a Quote</Link>
            <a onClick={()=>setOpen(false)} href="/catalogue.pdf" className="btn btn-outline">Download Catalogue</a>
          </div>
        </div>
      )}
    </header>
  )
}
