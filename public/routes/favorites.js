var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'gif-data',
};

var pool = new pg.Pool(config);

// GET /favorites
router.get('/', function (req, res) {

  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('SELECT * FROM favs;', function (err, result) {
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});

// POST /favorites
router.post('/', function(req, res){

  pool.connect(function(err, client, done){
    if (err) {
      console.log('Error connecting the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('INSERT INTO favs (name, description, pic) VALUES ($1, $2, $3) RETURNING *;',
    [req.body.name, req.body.description, req.body.pic],
    function(err, result){
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }
      console.log('Got rows from the DB:', result.rows);

    res.send(result.rows);
});
});
});
