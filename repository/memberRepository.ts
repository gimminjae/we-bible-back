const { db } = require("./db")

const table = "member"
const memberRepository = {
    save(member: Member) {
        db.putData(table, member)
    },
    findById(id: number) {
        const param = { memId: id }
        return db.getDataById(table, param)
    },
    findByCondition(params: any) {
        return db.getDatas(table, params)
    }
}

// module.exports = { memberRepository }
export default memberRepository