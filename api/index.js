const express = require('express')
const bp = require('body-parser')
const cors = require('cors')

const app = express()

const PORT = 8081

app.use(cors({ origin: true }))
app.use(bp.json())

app.post('/api/v1/game', (req, res) => {
  console.log('works')
  res.json({ msg: 'Works' })
})

app.use('*', (req, res) => {
  res.status(404).json({ err: 'NotFound' })
})

app.listen(PORT, () => {
  console.log(`connected on ${PORT}`)
})
