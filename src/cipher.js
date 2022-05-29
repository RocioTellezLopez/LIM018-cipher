const cipher = {
   // ...
   encode: (desplazamiento,mensaje) =>{
    let repeticion = mensaje.length
    let mostrarMensaje = ''

    for (let i=0 ; i<repeticion ; i++) {
      let posicionAcsii =(mensaje.charCodeAt(i) - 65 + desplazamiento) % 26 + 65
      let mensajeCifrado = String.fromCharCode(posicionAcsii)
      mostrarMensaje = mostrarMensaje + mensajeCifrado
      
    }
    console.log(mostrarMensaje)
    return mostrarMensaje

  }

  decode: (desplazamiento,mensaje) => {}

}
 

cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ')


export default cipher;
