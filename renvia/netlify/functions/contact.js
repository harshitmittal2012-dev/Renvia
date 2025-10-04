export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ ok: false, error: 'Method Not Allowed' }) }
  }

  try {
    const data = JSON.parse(event.body || '{}')
    const { name, email, business, message } = data
    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'Missing required fields' }) }
    }

    // NOTE: For demo purposes, we are not sending an email.
    // In production, add Nodemailer SMTP here using Netlify environment variables.
    // Example (pseudo):
    // const transporter = nodemailer.createTransport({ host: process.env.EMAIL_HOST, ... })
    // await transporter.sendMail({ from: process.env.EMAIL_FROM, to: process.env.CONTACT_TO, subject: ..., text: ... })

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true })
    }
  } catch (err) {
    console.error('Contact function error', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'Server error' }) }
  }
}
