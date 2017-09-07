var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var searchString = req.body.search.trim().toLowerCase();
	var db = req.app.get('db');
  if ((searchString.length === 40 || searchString.length === 64) && searchString.substr(0,2) != '0x')
    searchString = '0x' + searchString;

	if (searchString.length === 2) {
		return next({ message: "Error: Invalid search string!" });
	}
	else if (searchString.length === 42) {
		res.redirect('/account/' + searchString);
	}
	else if (searchString.length === 66) {
		db.find({transactionHash: searchString}).exec(function (err, event) {
		if (err) {
			return next(err);
	  }
		res.redirect('/event/' + event[0]._id)});
	}
	else {
		return next({ message: "Error: Invalid search string!" });
	}
});

module.exports = router;
