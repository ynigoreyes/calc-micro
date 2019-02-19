const express = require('express')
const bp = require('body-parser')
const cors = require('cors')

const app = express()

const PORT = process.env.ADD_SERVICE_PORT || 8080

app.use(bp.json())
app.use(cors({ origin: true }))

app.post('*', (req, res) => {
  const { num1, num2 } = req.body
  console.log(req.body)
  res.json({ sum: num1 + num2 })
})

app.use('*', (req, res) => {
  res.status(404).json({ err: 'Add: NotFound' })
})

app.listen(PORT, () => {
  console.log(`connected on ${PORT}`)
})
