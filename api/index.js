const express = require('express')
const bp = require('body-parser')

const app = express()

app.use(bp.json())
app.post('/api/v1/game', (req, res) => {
  console.log('works')
  res.json({ msg: 'Works' })
})

app.listen(8081, () => {
  console.log('connected on 8081')
})
