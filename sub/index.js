const express = require('express')
const cors = require('cors')
const bp = require('body-parser')

const app = express()

const PORT = process.env.SUB_SERVICE_PORT || 8080

app.use(bp.json())
app.use(cors({ origin: true }))

app.post('/', (req, res) => {
  const { num1, num2 } = req.body
  res.json({ diff: num1 - num2 })
})

app.use('*', (req, res) => {
  res.status(404).json({ err: 'Sub: NotFound' })
})

app.listen(PORT, () => {
  console.log(`connected on ${PORT}`)
})
