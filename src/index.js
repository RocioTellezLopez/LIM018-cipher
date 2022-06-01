import cipher from './cipher.js';

let textoIngresado = document.getElementById('textContainer');
let offSet = document.getElementById('offSet');
let botonCifrar = document.getElementById('cipherButton');
let botonLimpiar = document.getElementById('cleanButton');
let resultadoTexto = document.getElementById('cipherResult');

botonCifrar.addEventListener('click', () =>{
    let textValue = textoIngresado.value
    let offSetValue = parseInt(offSet.value)

    let mostrar = cipher.encode(offSetValue,textValue)
    //let mostrar = cipher.encode(offSet, textoIngresado)
    resultadoTexto.innerHTML = mostrar
    //console.log(mostrar)

})

botonLimpiar.addEventListener('click', () =>{
    //document.getElementById('mainContent').reset()
})

console.log(cipher);
