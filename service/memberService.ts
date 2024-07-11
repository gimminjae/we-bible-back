import memberRepository from "../repository/memberRepository"

const memberService = {
    createMember(member: Member) {
        memberRepository.save(member)
    },
    getById(id: number) {
        return memberRepository.findById(id)
    }
}

// module.exports = { memberService }
export default memberService