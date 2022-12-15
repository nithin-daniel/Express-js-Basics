var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values=['Alan','Abel','Hello']
  const person={name:"Alan", admin:false}


  res.render('index', {person});
});

module.exports = router;
