const { spawn } = require('child_process')
const pkgjson = require('../package.json')

console.log(`building for image ${pkgjson.version}`)

const ls = spawn('docker', ['build', '-t', 'miggylol/client', '.'])

ls.stdout.on('data', (data) => {
  console.log(data.toString())
})

ls.stderr.on('data', (data) => {
  console.log('err: ', data.toString())
})

ls.on('exit', (data) => {
  console.log('bye!')
})
