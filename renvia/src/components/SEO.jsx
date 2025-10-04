import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, url, image, schema }) {
  const site = 'https://www.renvia.sg'
  const fullTitle = title ? `${title} | Renvia` : 'Renvia — Eco-friendly Packaging Solutions'
  const fullUrl = url ? `${site}${url}` : site
  const img = image || '/og-image.svg'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={img} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
