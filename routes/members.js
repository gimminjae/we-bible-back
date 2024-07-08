var express = require('express');
const memberRepository = require("../repository/member");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  const result = memberRepository.putData(req.body)
  res.send(result)
});

module.exports = router;
