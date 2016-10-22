const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const favorites = require('favorites');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/favorites', favorites);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
app.listen(3000);
