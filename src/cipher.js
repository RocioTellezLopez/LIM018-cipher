const cipher = {
  // Metodo encode
  encode: (desplazamiento,mensaje) =>{

    if ( typeof mensaje !== 'string') {
      throw new TypeError('No has ingresado un texto');
    }  
    //let mensaje = string.toUpperCase() convertia los textos a mayusculas pero no mostraba resultado en minusculas
    let iteracion = mensaje.length
    let mostrarMensaje = ''
    for (let i=0 ; i<iteracion ; i++) {
      if (mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90) {
        let posicionAcsii =(mensaje.charCodeAt(i) - 65 + desplazamiento) % 26 + 65
        let mensajeCifrado = String.fromCharCode(posicionAcsii)
        mostrarMensaje = mostrarMensaje + mensajeCifrado
      } else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122) {
        let posicionAcsii =(mensaje.charCodeAt(i) - 97 + desplazamiento) % 26 + 97
        let mensajeCifrado = String.fromCharCode(posicionAcsii)
        mostrarMensaje = mostrarMensaje + mensajeCifrado
      } else {
        mostrarMensaje = mostrarMensaje + mensaje[i]
      }
    }  
    /*console.log(mostrarMensaje)*/
    return mostrarMensaje
  },

  decode: (desplazamiento,mensaje) =>{
    if ( typeof mensaje !== "string") {
      throw new TypeError('mensaje a mostrar', "cipher.js", 39)
    }
    //let mensaje = string

    let iteracion = mensaje.length
    let mostrarMensaje = ''
    for (let i=0; i<iteracion; i++) {
      if (mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90) {
        let posicionAcsii = (mensaje.charCodeAt(i) - 90 - desplazamiento) % 26 + 90
        let mensajeDecifrado = String.fromCharCode(posicionAcsii)
        mostrarMensaje = mostrarMensaje + mensajeDecifrado
      }
      else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <=122) {
        let posicionAcsii = (mensaje.charCodeAt(i) - 122 - desplazamiento) % 26 + 122
        let mensajeDecifrado = String.fromCharCode(posicionAcsii)
        mostrarMensaje = mostrarMensaje + mensajeDecifrado
      }
      else {
        mostrarMensaje = mostrarMensaje + mensaje[i]
      }
    }
    //console.log(mostrarMensaje)
    return mostrarMensaje
  }
}

//cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
//cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG')


export default cipher;
