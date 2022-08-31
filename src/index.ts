import * as fs from 'fs'
console.log("Running with the power of 🐈 ")
if(process.argv.length < 3){
    console.log("Usage: node index.js <file>")
    process.exit(1)
}

let code = fs.readFileSync(process.argv[2], 'utf8')
let codeArray :string[] = [...code]

let iter = {
    stack: new Uint8Array(1024),
    stackPointer: 0,
    codePointer: 0,
}

// console.log(codeArray)

while(iter.codePointer < codeArray.length){
    let currentChar = codeArray[iter.codePointer]
    switch (currentChar){
        case '😺':
            iter.stack[iter.stackPointer]++
            break;
        case '😾':
            iter.stack[iter.stackPointer]--
            break;
        case '🙀':
            process.stdout.write(String.fromCharCode(iter.stack[iter.stackPointer]))
            break;
    }
    iter.codePointer++
}

process.stdout.write('\n')


