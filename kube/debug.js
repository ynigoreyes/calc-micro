const { spawn } = require('child_process')

const ls = spawn('kubectl', ['exec', process.argv[2], '--', 'printenv'])

ls.stderr.on('data', (data) => {
  console.log(data.toString())
})

ls.stdout.on('data', (data) => {
  console.log(data.toString())
})

