#! /usr/bin/env node

import * as fs from 'fs'
console.log("Running with the power of 🐈")
if(process.argv.length < 3){
    console.log("No file specified")
    console.log("Usage: node index.js <file>")
    process.exit(1)
}

let code;
try{
    code = fs.readFileSync(process.argv[2], 'utf8')
}catch(e){
    console.log("Error reading file")
    console.log(e)
    process.exit(1)
}
let codeArray :string[] = [...code]

let iter = {
    stack: new Uint8Array(1024),
    stackPointer: 0,
    codePointer: 0,
}


while(iter.codePointer < codeArray.length){
    let currentChar = codeArray[iter.codePointer]
    switch (currentChar){
        case '😺':
            iter.stack[iter.stackPointer]++
            break;
        case '😸':
            iter.stack[iter.stackPointer]--
            break;
        case '🙀':
            process.stdout.write(String.fromCharCode(iter.stack[iter.stackPointer]))
            break;
        case '😾':
            if(iter.stackPointer !== 0){
                iter.stackPointer--
            }else{
                iter.stackPointer = iter.stack.length - 1
            }
            break;
        case '😽':
            if(iter.stackPointer == iter.stack.length - 1){
                iter.codePointer = 0
            }else{
                iter.stackPointer++
            }
            break;
    }
    iter.codePointer++
}

process.stdout.write('\n')


