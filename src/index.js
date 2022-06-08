import cipher from './cipher.js';

let textoIngresado = document.getElementById('textContainer')
let offSet = document.getElementById('offSet')
let botonCifrar = document.getElementById('encodeButton')
let botonDescifrar = document.getElementById('decodeButton')
let botonLimpiar = document.getElementById('cleanButton')
let resultadoTexto = document.getElementById('cipherResult')
let mensajeAlerta = document.getElementById('mensajeAlerta')

botonCifrar.addEventListener('click', () =>{
    let textValue = textoIngresado.value
    let offSetValue = parseInt(offSet.value)
    if (textValue !== '') {
        let mostrar = cipher.encode(offSetValue,textValue)
        //let mostrar = cipher.encode(offSet, textoIngresado)
        resultadoTexto.innerHTML = mostrar
        //console.log(mostrar)
    } else {
        mensajeAlerta.innerHTML = 'No ingresaste tu mensaje'
    }
    
})

botonDescifrar.addEventListener('click', () =>{
    let textValue = textoIngresado.value
    let offSetValue = parseInt(offSet.value)

    let mostrar = cipher.decode(offSetValue,textValue)
    //let mostrar = cipher.encode(offSet, textoIngresado)
    resultadoTexto.innerHTML = mostrar
    //console.log(mostrar)
})

botonLimpiar.addEventListener('click', () =>{
    textoIngresado.value = ''
    offSet.value = ''
    resultadoTexto.value = ''

})

console.log(cipher);