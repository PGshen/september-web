import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data
//   })
// }

export function getInfo(token) {
  return request({
    url: '/upms/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/upms/user/logout',
    method: 'post'
  })
}
