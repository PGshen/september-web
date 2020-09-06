import request from '@/utils/request'

const realApiUrl = {
  apiTree: '/upms/api/tree',
  apiAdd: '/upms/api',
  apiUpdate: '/upms/api',
  apiDelete: '/upms/api'
}

const url = realApiUrl

export function apiTree() {
  return request({
    url: url.apiTree,
    method: 'get'
  })
}

export function apiAdd(api) {
  return request({
    url: url.apiAdd,
    method: 'post',
    data: api
  })
}

export function apiUpdate(id, api) {
  const urlWithId = url.apiUpdate + '/' + id
  return request({
    url: urlWithId,
    method: 'put',
    data: api
  })
}

export function apiDelete(id) {
  const urlWithId = url.apiDelete + '/' + id
  return request({
    url: urlWithId,
    method: 'delete'
  })
}
