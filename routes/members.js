var express = require("express");
// const memberService = require("../service/memberService")
import memberService from "../service/memberService"
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
