const db = require('../database/models');
const path = require('path');

const moviesController = {

    listar : function(req,res){
        //return res.send('Hola como vamos.... ');
        //       select * from movies 
        db.Movie.findAll()
        .then(peliculas =>{
            //return res.send(peliculas[0].title)
            res.render(path.resolve(__dirname, '../views/listarPeliculas'), {peliculas})
        })
        .catch(error => res.send(error))

    }

}
module.exports = moviesController;