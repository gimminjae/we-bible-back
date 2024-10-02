module.exports = {
  getMember: (req, res, next) => {
    console.log(req)
    res.send("get member")
  },
  createMember: (req, res, next) => {
    console.log(req)
    res.send("create member")
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
