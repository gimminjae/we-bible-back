var express = require("express")
var router = express.Router()

/**
 * user apis
 */

// get user by id
router.get("/", function (req, res, next) {
  res.send("respond with a resource")
})

// create user ===== kakao, google, naver ... +
router.post("/", function (req, res, next) {
  res.send("respond with a resource")
})

// update user
router.put("/", function (req, res, next) {
  res.send("respond with a resource")
})

// delete user
router.delete("/", function (req, res, next) {
  res.send("respond with a resource")
})

module.exports = router
