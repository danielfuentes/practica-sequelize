const express = require('express');
const app = express();

const moviesRoutes = require('./routes/moviesRoutes');

app.set('view engine','ejs' );

app.use(moviesRoutes);

app.listen(3001, () => {console.log('Servidor corriendo en el puerto 3001 ')});