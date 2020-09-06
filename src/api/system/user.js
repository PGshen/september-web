import request from '@/utils/request'

const realApiUrl = {
  userList: '/upms/user/list',
  userAdd: '/upms/user',
  userUpdate: '/upms/user',
  userDelete: '/upms/user',
  userRole: '/upms/user/role',
  userEnable: '/upms/user/ban'
}

const url = realApiUrl

export function userList(listQuery) {
  return request({
    url: url.userList,
    method: 'post',
    data: listQuery
  })
}

export function userAdd(user) {
  return request({
    url: url.userAdd,
    method: 'post',
    data: user
  })
}

export function userRole(userId) {
  const userRoleUrl = process.env.USE_CRAP_API ? url.userRole : url.userRole + '/' + userId
  return request({
    url: userRoleUrl,
    method: 'get'
  })
}

export function userUpdate(userId, user) {
  const userUpdUrl = process.env.USE_CRAP_API ? url.userUpdate : url.userUpdate + '/' + userId
  return request({
    url: userUpdUrl,
    method: 'put',
    data: user
  })
}

export function userEnable(userId) {
  const userEnableUrl = process.env.USE_CRAP_API ? url.userEnable : url.userEnable + '/' + userId
  return request({
    url: userEnableUrl,
    method: 'put'
  })
}

export function userDel(userId) {
  const delUrl = process.env.USE_CRAP_API ? url.userDelete : url.userDelete + '/' + userId
  return request({
    url: delUrl,
    method: 'delete'
  })
}
