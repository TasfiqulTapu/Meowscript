import * as fs from 'fs'
console.log(" The power of 🐈 ")

let code = fs.readFileSync(process.argv[2], 'utf8')
console.log(code.toString())

