const path = require('path');
const express = require('express');
const routes = express.Router();
const moviesController = require(path.resolve(__dirname, '../controllers/moviesController'));


routes.get('/movies', moviesController.listar);
routes.get('/movies/detail/:id', moviesController.detallePelicula)

module.exports = routes;