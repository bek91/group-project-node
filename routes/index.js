var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hoya Guide' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET coffee page. */
router.get('/coffee', function(req, res, next) {
  res.render('Coffee');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('Contact');
});


/* GET hello page. */
router.get('/academic', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  var name = req.query.name || "World" // double pipes is an OR operator that allows us to use a default value if the url params are null / not specified
  var message = "Hello, " + name
  res.render('academic', { message: message });
});

module.exports = router;
