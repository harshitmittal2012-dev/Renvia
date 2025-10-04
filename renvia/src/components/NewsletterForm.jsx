import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    try {
      setStatus('loading')
      // Placeholder: integrate Mailchimp API or form action here
      await new Promise(r => setTimeout(r, 600))
      setStatus('success')
      setEmail('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={e=>setEmail(e.target.value)}
        placeholder="Your email"
        className="flex-1 rounded-full border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-300"
      />
      <button className="btn btn-primary" disabled={status==='loading'}>
        {status==='loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status==='success' && <span className="text-sm text-brand-700">Thanks for subscribing!</span>}
      {status==='error' && <span className="text-sm text-red-600">Something went wrong.</span>}
    </form>
  )
}
