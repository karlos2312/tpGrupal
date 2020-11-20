let homePage = require('./homePage')

let movies = homePage.peliculas()
const masVotadas = require('./masVotadas');
let preguntas = require('./preguntasFrecuentes')
let contacto = require('./contacto.js')

module.exports = {
    homePage : function(req,res){
        movies.forEach(movie => {
            res.write(movie +'\n')
        });
        
        res.end()
    },
    
    enCartelera: function(req,res){
        let cartelera = enCartelera.enCartelera();
        res.write(' >> EN CARTELERA <<< \n'); 
        res.write('Total de películas: ' + cartelera.length + '\n'); 
        res.write('Listados de películas:  ')  
        cartelera.forEach(movie => {
            res.write('>_ Título: ' + movie.title + '\n');
            res.write('Reseña: ' + movie.overview +'\n\n')
            });
        res.end()
    },
    masVotadas: function(req,res){
        let votadas = masVotadas.masVotadas()   
        res.write('Mas Votadas \n \n');
        res.write('Total de películas más votadas: ' + votadas.length + '\n'); 
        res.write('Rating promedio: ' + masVotadas.promedioRating() + '\n')
        res.write('Listados de películas:  ')
        votadas.forEach(movie => {
            res.write('>_Título: ' + movie.title + '\n');
            res.write('>_Rating: ' + movie.vote_average + '\n');
            res.write('>_Reseña: ' + movie.overview + '\n\n');
            });
        res.end()
    },    
    contacto: function (req, res) {
        res.write(contacto.contacto())
        res.end()
    },
    preguntasFrecuentes : function (req,res){
     let faqs = preguntas.faqsJSON().faqs
        res.write('Preguntas frecuentes')
		res.write('\n\n')
		res.write('Total de preguntas: ' + faqs.length)
		res.write('\n\n')
		faqs.forEach((faqs) => {
		res.write('Pregunta :' + faqs.faq_title)
		res.write('\n\n');
		res.write('Respuesta :' + faqs.faq_answer)
		res.write('\n\n');
		})
		res.end()
}
}