interface Member {
    createdAt: Date
    updatedAt: Date
    loginType: string
    useYn: boolean
    auth: string
    username: string
    password: string
    nickname: string
    name: string
    email: string
    // createdAt: member.createdAt,
    //     updatedAt: member.updatedAt,
    //     loginType: member.loginType,
    //     useYn: member.useYn,
    //     auth: member.auth,
    //     username: member.username,
    //     password: member.password,
    //     nickname: member.nickname,
    //     name: member.name,
    //     email: member.email,
}
const memberRepository = require("../repository/member");
const memberService = {
    createMember(member: Member) {
        memberRepository.putData(member)
    }
}

module.exports = memberService