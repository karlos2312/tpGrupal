const fs = require('fs')

module.exports = {
    bd : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    },
    peliculas:function(){
        let arrayCompleto=this.leerJSON()
        let titulos=[]
        arrayCompleto.movies.forEach(peliculas => {
            titulos.push(peliculas.title)

        });
        titulos.sort()
        return titulos
    }
}
