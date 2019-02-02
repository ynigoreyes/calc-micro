const { spawn } = require('child_process')
const pkgjson = require('../package.json')

console.log(`pushing for image ${pkgjson.version}`)

const ls = spawn('docker', ['push', `miggylol/tdg-game:${pkgjson.version}`])

ls.stdout.on('data', (data) => {
  console.log(data.toString())
})

ls.stderr.on('data', (data) => {
  console.error('err: ', data.toString())
})

ls.on('exit', (data) => {
  console.log('bye!')
})
