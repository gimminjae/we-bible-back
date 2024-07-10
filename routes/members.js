var express = require("express");
const memberRepository = require("../repository/member");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", async function (req, res, next) {
  const result = await memberService.createMember(req.body);
  res.send(result);
});

module.exports = router;
