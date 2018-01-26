var express = require('express');
var router = express.Router();

router.get('/:account/:offset?', function(req, res, next) {
  var db = req.app.get('db');

  if (!req.params.offset) {
    req.params.offset = 0;
  } else {
    req.params.offset = parseInt(req.params.offset);
  }
  db.find({_id: req.params.account}).exec(function (err, balance) {

    if (err) {
      return res.status(401).json({
        "status":"FAILED",
        "error":err
      });
    }

    if (balance.length === 0 || !balance[0]._id) {
      return res.status(401).json({
        "status":"FAILED",
        "message":"Account not found!"});
    }

    db.find({$or: [{ "args._from": req.params.account }, { "args._to": req.params.account }]}).sort({ timestamp: -1 }).skip(req.params.offset).limit(500).exec(function(err, events) {
      return res.status(200).json({
        "status":"SUCCESS",
        "message": events
    });
  });
});
});

module.exports = router;
