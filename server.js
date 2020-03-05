'use strict';

const express = require('express');
const path = require('path');
const router = express.Router();

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.use('/', router);
app.use('/build', express.static('html/build'));

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Running on docker -> http://${HOST}:${505}`);