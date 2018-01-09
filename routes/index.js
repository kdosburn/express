var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){
	res.render('index', { 
		title: 'Bob Loblaw\'s Law Blog',
		age: req.query.age || 29,
		name: req.query.name || 'Kendra'
	})
});

router.get('/users/:id', function(req, res){
	console.log(req.params);
	res.send(req.params.id, 200);
});

module.exports = router;
