const memberService = require("../service/member.service")

module.exports = {
  getMember: (req, res, next) => {
    console.log(req)
    res.send("get member")
  },
  createMember: (req, res, next) => {
    const { body } = req
    const result = memberService.createMember(body)
    res.send(result)
  },
  updateMember: (req, res, next) => {
    console.log(req)
    res.send("update member")
  },
  deleteMember: (req, res, next) => {
    console.log(req)
    res.send("delete member")
  },
}
