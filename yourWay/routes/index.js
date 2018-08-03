var express = require('express');
var router = express.Router();

/**
var User = require('../models/user');
var Location = require('../models/location');
 */

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}


var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
//var url = 'mongodb://mongo-server/';   
module.exports = router;
var resultArray = [];
router.get('/index', function(req, res, next) {

	mongo.connect(url, function(err, db) {
		assert.equal(null, err);
		var dbo = db.db('yourWay')
	  var cursor = dbo.collection('location').find({"username": req.user.username});
		
		cursor.forEach(function(doc, err) {
		assert.equal(null, err);
		
		resultArray.push(doc);
		
		//console.log(resultArray);
	  }, function() {
		db.close();
		res.render('index', {items: resultArray});
	  });
	});
  });
   

