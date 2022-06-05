const cipher = {
   // Metodo encode
   encode: (desplazamiento,string) =>{
    let mensaje = string.toUpperCase()

    let iteracion = mensaje.length
    let mostrarMensaje = ''

    for (let i=0 ; i<iteracion ; i++) {
      let posicionAcsii =(mensaje.charCodeAt(i) - 65 + desplazamiento) % 26 + 65
      let mensajeCifrado = String.fromCharCode(posicionAcsii)
      mostrarMensaje = mostrarMensaje + mensajeCifrado
      
    }
    console.log(mostrarMensaje)
    return mostrarMensaje

  },

  decode: (desplazamiento,string) =>{
    let mensaje = string.toUpperCase()

    let iteracion = mensaje.length
    let mostrarMensaje = ''

    for (let i=0; i<iteracion; i++) {
      let posicionAcsii = (mensaje.charCodeAt(i) + 65 - desplazamiento) % 26 + 65
      let mensajeDecifrado = String.fromCharCode(posicionAcsii)
      mostrarMensaje = mostrarMensaje + mensajeDecifrado 
    }
    //console.log(mostrarMensaje)
    return mostrarMensaje
  }

}
 

//cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
//cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG')


export default cipher;
