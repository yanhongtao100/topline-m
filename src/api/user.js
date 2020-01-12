import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    // headers: {
    //   'Content-type': 'application/json'
    // },
    // params: '',
    data
  })
}
export const getSmsCode = mobile => {
  return request({
    method: 'get',
    url: `/app/v1_0/sms/codes/${mobile}`

  })
}
// 获取当前用户信息
export const getUserInfo = () => {
  return request({
    method: 'get',
    url: `/app/v1_0/user`

  })
}
// 获取指定用户信息
export const getUserById = (userId) => {
  return request({
    method: 'get',
    url: `/app/v1_0/users/${userId}`

  })
}
