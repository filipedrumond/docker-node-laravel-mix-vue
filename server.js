'use strict';

const express = require('express');
var routes = require('./routes');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

app.use('/build', express.static('html/build'));

/* NO ROUTES HERE TRATAMENTO PARA O VUE GERENCIAR MAS CUIDADO FUTURO PARA CASO DE POSTS OU TRATAMENTO DE FOTOS ETC */
app.use('*', routes);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Running on docker -> http://${HOST}:${505}`);