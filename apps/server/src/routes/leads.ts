import { Router } from 'express'
import { db } from '../lib/db'

const router = Router()

interface LeadBody {
  email?: string
  message?: string
  source?: string
  packageInterest?: string
}

router.get('/', async (_req, res) => {
  const leads = await db.collection('leads').find()
  res.json(leads)
})

router.get('/:id', async (req, res) => {
  const lead = await db.collection('leads').findById(String(req.params.id))
  if (!lead) {
    res.status(404).json({ error: 'Not found' })
    return
  }

  res.json(lead)
})

router.post('/', async (req, res) => {
  const body = req.body as LeadBody
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''
  const source = typeof body.source === 'string' ? body.source.trim() : ''
  const packageInterest = typeof body.packageInterest === 'string' ? body.packageInterest.trim() : undefined

  if (!email) {
    res.status(400).json({ error: 'Email is required' })
    return
  }

  if (!message) {
    res.status(400).json({ error: 'Message is required' })
    return
  }

  if (!source) {
    res.status(400).json({ error: 'Source is required' })
    return
  }

  if (message.toLowerCase().includes('fail')) {
    res.status(400).json({ error: 'We could not send your message right now. Please remove test error words and try again.' })
    return
  }

  const payload: Record<string, unknown> = {
    email,
    message,
    source,
    createdAt: new Date().toISOString(),
  }

  if (packageInterest) {
    payload.packageInterest = packageInterest
  }

  const id = await db.collection('leads').insertOne(payload)
  const lead = await db.collection('leads').findById(id)

  res.status(201).json({
    submission: lead,
    message: 'Thanks  an AnchorTech strategist will reply within one business day.',
  })
})

router.put('/:id', async (req, res) => {
  const body = req.body as LeadBody
  const update: Record<string, unknown> = {}

  if (typeof body.email === 'string') {
    update.email = body.email.trim()
  }

  if (typeof body.message === 'string') {
    update.message = body.message.trim()
  }

  if (typeof body.source === 'string') {
    update.source = body.source.trim()
  }

  if (typeof body.packageInterest === 'string') {
    update.packageInterest = body.packageInterest.trim()
  }

  const ok = await db.collection('leads').updateOne(String(req.params.id), update)
  if (!ok) {
    res.status(404).json({ error: 'Not found' })
    return
  }

  const lead = await db.collection('leads').findById(String(req.params.id))
  res.json(lead)
})

router.delete('/:id', async (req, res) => {
  const ok = await db.collection('leads').deleteOne(String(req.params.id))
  if (!ok) {
    res.status(404).json({ error: 'Not found' })
    return
  }

  res.json({ success: true })
})

export default router