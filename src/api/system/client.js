import request from '@/utils/request'

const realClientUrl = {
  clientList: '/upms/client/list',
  clientAdd: '/upms/client',
  clientUpdate: '/upms/client',
  clientDelete: '/upms/client',
  clientApi: '/upms/client/api',
  clientIp: '/upms/client/ip'
}

const url = realClientUrl

export function clientList(params) {
  return request({
    url: url.clientList,
    method: 'post',
    data: params
  })
}

export function clientAdd(client) {
  return request({
    url: url.clientAdd,
    method: 'post',
    data: client
  })
}

export function clientUpdate(id, client) {
  const urlWithId = url.clientUpdate + '/' + id
  return request({
    url: urlWithId,
    method: 'put',
    data: client
  })
}

export function clientDelete(id) {
  const urlWithId = url.clientDelete + '/' + id
  return request({
    url: urlWithId,
    method: 'delete'
  })
}

export function clientApiGet(clientAppId, clientAuth) {
  const urlWithID = url.clientApi + '/' + clientAppId
  return request({
    url: urlWithID,
    method: 'post',
    data: clientAuth
  })
}

export function clientIpDel(clientAppId, clientAuth) {
  const urlWithID = url.clientApi + '/ip/' + clientAppId
  return request({
    url: urlWithID,
    method: 'post',
    data: clientAuth
  })
}

export function clientIpAdd(auth) {
  const urlWithID = url.clientIp
  return request({
    url: urlWithID,
    method: 'post',
    data: auth
  })
}

export function clientIpGet(clientAppId) {
  const urlWithID = url.clientIp + '/' + clientAppId
  return request({
    url: urlWithID,
    method: 'get'
  })
}

export function clientAuth(auth) {
  return request({
    url: url.clientApi,
    method: 'put',
    data: auth
  })
}
