import { useState } from 'react'
import SEO from '../components/SEO'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    try {
      setStatus('loading')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', business: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO title="Contact" description="Ask for a quote, samples, or a consultation." url="/contact" />
      <section className="container-px mx-auto py-12 md:py-20 grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Let’s talk sustainable packaging</h1>
          <p className="mt-3 text-slate-700">Share your requirements and we’ll respond within one business day.</p>
          <form onSubmit={submit} className="mt-6 grid gap-4">
            <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <input type="email" className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Business" value={form.business} onChange={e=>setForm({...form, business:e.target.value})} />
            <textarea className="rounded-xl border border-slate-300 px-4 py-3 min-h-[120px]" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
            <button className="btn btn-primary" disabled={status==='loading'}>{status==='loading' ? 'Sending…' : 'Send Message'}</button>
            {status==='success' && <p className="text-sm text-brand-700">Thanks! We’ll be in touch shortly.</p>}
            {status==='error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
          </form>
        </div>
        <div>
          <div className="card p-6">
            <h2 className="font-semibold text-lg">Contact Details</h2>
            <p className="text-sm text-slate-600 mt-2">Email: <a href="mailto:info@renvia.sg" className="text-brand-700">info@renvia.sg</a></p>
            <p className="text-sm text-slate-600">Phone: <a href="tel:+6560000000" className="text-brand-700">+65 6000 0000</a></p>
            <div className="mt-4 aspect-[4/3] bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 text-sm">Google Map Placeholder</div>
          </div>
        </div>
      </section>
    </>
  )
}
