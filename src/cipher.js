const cipher = {
   // Metodo encode
   encode: (desplazamiento,string) =>{
    let mensaje = string

    let iteracion = mensaje.length
    let mostrarMensaje = ''

    for (let i=0 ; i<iteracion ; i++) {
      if (mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90) {
        
        let posicionAcsii =(mensaje.charCodeAt(i) - 65 + desplazamiento) % 26 + 65
        let mensajeCifrado = String.fromCharCode(posicionAcsii)
        
        mostrarMensaje = mostrarMensaje + mensajeCifrado
      }
      else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122) {

        let posicionAcsii =(mensaje.charCodeAt(i) - 97 + desplazamiento) % 26 + 97
        let mensajeCifrado = String.fromCharCode(posicionAcsii)
        
        mostrarMensaje = mostrarMensaje + mensajeCifrado
      }
      else {
        mostrarMensaje = mostrarMensaje + mensaje[i]
      }
    }  
    /*console.log(mostrarMensaje)*/
    return mostrarMensaje
    
  },

  decode: (desplazamiento,string) =>{
    let mensaje = string

    let iteracion = mensaje.length
    let mostrarMensaje = ''

    for (let i=0; i<iteracion; i++) {
      if (mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90) {

        let posicionAcsii = (mensaje.charCodeAt(i) + 65 - desplazamiento) % 26 + 65
        let mensajeDecifrado = String.fromCharCode(posicionAcsii)
        mostrarMensaje = mostrarMensaje + mensajeDecifrado
      }
      else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <=122) {

        let posicionAcsii = (mensaje.charCodeAt(i) + 85 - desplazamiento) % 26 + 97
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
