interface Member {
    id?: string
    name: string
    auth: string
    createdDateTime: string
    updatedDateTime: string
    loginType: 'KAKAO' | 'NAVER' | 'GOOGLE' | 'NONE'
}