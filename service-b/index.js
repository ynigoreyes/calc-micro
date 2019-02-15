const express = require('express')
const cors = require('cors')

const app = express()

const PORT = 8080

app.use(cors({ origin: true }))

app.get('/', (req, res) => {
  res.send('Hello from K8s:users')
})

app.use('*', (req, res) => {
  res.status(404).json({ err: 'NotFound' })
})

app.listen(PORT, () => {
  console.log(`connected on ${PORT}`)
})
