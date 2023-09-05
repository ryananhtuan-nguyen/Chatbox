import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const messages = await db.getMessage()
    res.json(messages)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const messages = req.body
    await db.addMessage(messages.message)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
export default router
