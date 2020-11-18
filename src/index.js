let homePage = require('./homePage')

let movies = homePage.leerJSON()

let preguntas = require("./preguntasFrecuentes")

module.exports = {
    homePage : function(req,res){
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    enCartelera : function(req,res){
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    contacto : function(req,res){
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    homePage : function(req,res){
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    preguntasFrecuentes : function (req,res){
     let faqs = preguntas.faqsJSON().faqs
        res.write('Preguntas frecuentes')
		res.write('\n\n')
		faqs.sort(function (a, b) {
		if (a.title > b.title) {
		return 1;
		}
		if (a.title < b.title) {
		return -1;
        }
		return 0;
		});
		res.write('Total de preguntas: ' + faqs.length)
		res.write('\n\n')
		faqs.forEach((faqs) => {
		res.write('Pregunta :' + faqs.faq_title)
		res.write('\n\n');
		res.write('Respuesta :' + faqs.faq_answer)
		res.write('\n\n');
		})
		res.end();
			
		break;
}
}