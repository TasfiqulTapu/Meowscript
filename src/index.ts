import * as fs from 'fs'
console.log("Running with the power of 🐈 ")
if(process.argv.length < 3){
    console.log("Usage: node index.js <file>")
    process.exit(1)
}

let code = fs.readFileSync(process.argv[2], 'utf8')
let codeArray :string[] = [...code]

let compiler = {
    stack: new Uint8Array(1024),
    stackPointer: 0,
    codePointer: 0,
}

// console.log(codeArray)

while(compiler.codePointer < codeArray.length){
    let currentChar = codeArray[compiler.codePointer]
    switch (currentChar){
        case '😻':
            compiler.stack[compiler.stackPointer]++
            break;
        case '😾':
            compiler.stack[compiler.stackPointer]--
            break;
        case '🙀':
            process.stdout.write(String.fromCharCode(compiler.stack[compiler.stackPointer]))
            break;
    }
    compiler.codePointer++
}

process.stdout.write('\n')


