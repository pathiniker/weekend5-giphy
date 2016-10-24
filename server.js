const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const favorites = require('./routes/favorites');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/favorites', favorites);


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
app.listen(3000);
