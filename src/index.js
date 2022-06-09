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
    if (textValue !== '' && offSetValue !== '') {
        let mostrar = cipher.encode(offSetValue,textValue)
        //let mostrar = cipher.encode(offSet, textoIngresado)
        resultadoTexto.innerHTML = mostrar
        //console.log(mostrar)
        mensajeAlerta.innerHTML = ''
    }
    else if (textValue === '' && offSetValue === '') {
        mensajeAlerta.innerHTML = 'Ops! Te falto ingresar tu mensaje'
    } else {
        mensajeAlerta.innerHTML = 'Ops! No ingresaste datos'
    }

})

botonDescifrar.addEventListener('click', () =>{
    let textValue = textoIngresado.value
    let offSetValue = parseInt(offSet.value)
    if (textValue !== '' && offSetValue !== '') {
        let mostrar = cipher.decode(offSetValue,textValue)
        resultadoTexto.innerHTML = mostrar
        mensajeAlerta.innerHTML = ''
    } else if (offSetValue !== ''){
        mensajeAlerta.innerHTML = 'Ops! No ingresaste tu mensaje'
    } else {
        mensajeAlerta.innerHTML = 'Ops! No ingresaste datos'
    }
})

botonLimpiar.addEventListener('click', () =>{
    textoIngresado.value = ''
    offSet.value = ''
    resultadoTexto.innerHTML = ''
    mensajeAlerta.innerHTML = ''
})

console.log(cipher);