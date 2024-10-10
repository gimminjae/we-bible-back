const db = require("../../global/db")

const tableName = "member"

const memberRepository = {
  save: (member) => {
    db.createItem(tableName, member)
  },
}
module.exports = memberRepository
