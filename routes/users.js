var express = require("express")
var router = express.Router()

const memberController = require("../member/controller/member.controller")
// import memberController from "../member/controller/member.controller"
/**
 * user apis
 */

// get user by id
router.get("/", memberController.getMember)

// create user ===== kakao, google, naver ... +
router.post("/", memberController.createMember)

// update user
router.put("/", memberController.updateMember)

// delete user
router.delete("/", memberController.deleteMember)

module.exports = router
