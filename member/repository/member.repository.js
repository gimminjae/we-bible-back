import { updateItem, createItem } from "../../global/db"

const tableName = "member"

const memberRepository = {
  save: (member) => {
    if (member.id) {
      updateItem(tableName, member)
    } else {
      createItem(tableName, member)
    }
  },
}
module.export = memberRepository
