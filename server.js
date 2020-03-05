'use strict';

const express = require('express');
var routes = require('./routes');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

app.use('/build', express.static('html/build'));
app.use('*', routes);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Running on docker -> http://${HOST}:${505}`);