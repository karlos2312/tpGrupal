const fs = require('fs')
module.exports={
    contacto : function(){
        let titulo = `Contactanos \n\n\n`;
        let mensaje = `​¿Tenés algo para contarnos?\n\n Nos encanta escuchar a nuestros
        clientes. Si deseas contactarnos podés escribirnos al siguiente email:
        dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta,
        sugerencia o reclamo y será respondido a la brevedad posible. Recordá que
        también podes consultar la sección de Preguntas Frecuentes para obtener
        respuestas inmediatas a los problemas más comunes.`
        return titulo + mensaje
    }
}
