export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-px mx-auto py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-xl text-brand-700">
            <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700" />
            Renvia
          </div>
          <p className="mt-3 text-sm text-slate-600">Eco-friendly packaging solutions for food delivery and takeaway businesses in Singapore.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="/products">Compostable Boxes</a></li>
            <li><a href="/products">Paper Cups</a></li>
            <li><a href="/products">Cutlery</a></li>
            <li><a href="/products">Eco Wraps</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-slate-600">Singapore • info@renvia.sg • +65 6000 0000</p>
          <p className="text-xs text-slate-500 mt-2">© {new Date().getFullYear()} Renvia Pte. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
