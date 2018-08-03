var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//var scripts = [{ script: '/public/js/location.js' }];

var User = require('../models/user');

var Location = require('../models/location');



// Register
router.get('/register', function (req, res) {
	res.render('register');
});

// login
router.get('/login', function (req, res) {
	res.render('login');
});


// Register User
router.post('/register', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	//console.log(name);

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if (errors) {
		res.render('register', {
			errors: errors
		});

	} else {
		//console.log('PASSED')
		var newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password
		});

		User.createUser(newUser, function (err, user) {
			if (err) throw err;
			console.log(user);
		});
		req.flash('success_msg', 'You are registered and can now login');
		res.redirect('/users/login');
	}
});

passport.use(new LocalStrategy(
	function (username, password, done) {
		x=username;
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	})
);

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('/users/login');
});


// login
router.get('/location', function (req, res) {
	res.render('location');
});

router.get('/location', function (req, res) {
	console.log('ensayo');
	res.render('location');
	res.redirect('/users/location');
});




var UserLocation = require('../models/location');


router.post('/location', function (req, res) {
	var username = req.user.username;
	var latitude = req.body.latitude;
	var longitude = req.body.longitude;

	//	console.log(req.user.username);

	var newUserLocation = new UserLocation({
		username: username,
		latitude: latitude,
		longitude: longitude,
	});

	UserLocation.addLocation(newUserLocation, function (err, location) {
		if (err) throw err;
		console.log(location);
	});
});



module.exports = router;