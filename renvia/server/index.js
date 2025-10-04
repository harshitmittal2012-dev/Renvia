import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5055

app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], credentials: false }))
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, business, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const to = process.env.CONTACT_TO || 'info@renvia.sg'
    await transporter.sendMail({
      from: `Renvia Website <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business || '-'}\n\n${message}`,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('Email error', err)
    res.status(500).json({ ok: false, error: 'Failed to send email' })
  }
})

app.listen(PORT, () => {
  console.log(`Renvia server running on http://localhost:${PORT}`)
})
