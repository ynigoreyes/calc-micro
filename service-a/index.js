const express = require('express')
const bp = require('body-parser')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 8080

app.use(cors({ origin: true }))
app.use(bp.json())

app.get('/', (req, res) => {
  res.send('Welcome to K8s: API')
})

app.use('*', (req, res) => {
  res.status(404).json({ err: 'NotFound' })
})

app.listen(PORT, () => {
  console.log(`connected on ${PORT}`)
})
