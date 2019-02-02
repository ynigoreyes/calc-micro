const { spawn } = require('child_process')
const pkgjson = require('../package.json')

console.log(`building for image ${pkgjson.version}`)

const ls = spawn('docker', ['build', '-t', `miggylol/tdg-client:${pkgjson.version}`, '.'])

ls.stdout.on('data', (data) => {
  console.log('std: ', data.toString())
})

ls.stderr.on('data', (data) => {
  console.log('err: ', data.toString())
})

ls.on('exit', (data) => {
  console.log('bye!')
})
