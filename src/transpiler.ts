interface Opt {
    strict?: boolean; // strict mode
}


export function transpile (code:string, options:Opt) {
    let meow = code
    .replace(/\+/g, '😺')
    .replace(/\-/g, '😸')
    .replace(/\./g, '🙀')
    .replace(/\</g, '😾')
    .replace(/\>/g, '😽')
    .replace(/\[/g, '😿')
    .replace(/\]/g, '😹')
    if(options.strict && meow.includes(',')){
        throw new Error(`Unallowed character ',' at ${code.indexOf(',')} strict mode; meowscript@0.0.3`)
    }
    return meow
}
    