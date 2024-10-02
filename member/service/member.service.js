// import { v4 as uuidv4 } from "uuid"
const dateUtil = require("../../util/date")
const uuid = require("uuid")

const memberService = {
  createMember: (member) => {
    const now = dateUtil.getCurrentDateTime()
    const saveMember = {
      id: uuid.v4(),
      name: member.name,
      createDateTime: now,
      updateDateTime: now,
      loginType: "",
    }
    console.log("member: ", saveMember)
    return "success"
  },
  getMember: (member) => {
    return "get member"
  },
  updateMember: (member) => {
    return "update member"
  },
  deleteMember: (member) => {
    return "delete member"
  },
}

module.exports = memberService
