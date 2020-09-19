import request from '@/utils/request'

const realApiUrl = {
  routerTree: '/admin/menu/route',
  menuTree: '/admin/menu/tree',
  menuAdd: '/admin/menu',
  menuUpdate: '/admin/menu',
  menuDelete: '/admin/menu',
  permList: '/admin/menu/perm',
  menuApi: '/admin/menu/api'
}

const url = realApiUrl

export function menuTree() {
  return request({
    url: url.menuTree,
    method: 'get'
  })
}
export function routerTree() {
  return request({
    url: url.routerTree,
    method: 'get'
  })
}

export function menuAdd(menu) {
  return request({
    url: url.menuAdd,
    method: 'post',
    data: menu
  })
}

export function menuUpdate(id, menu) {
  const urlWithID = url.menuUpdate + '/' + id
  return request({
    url: urlWithID,
    method: 'put',
    data: menu
  })
}

export function menuDelete(id) {
  const urlWithID = url.menuDelete + '/' + id
  return request({
    url: urlWithID,
    method: 'delete'
  })
}

export function menuApi(menuId) {
  const urlWithID = url.menuApi + '/' + menuId
  return request({
    url: urlWithID,
    method: 'get'
  })
}

export function menuAuth(auth) {
  return request({
    url: url.menuApi,
    method: 'put',
    data: auth
  })
}

export function hasPerm(url) {
  return request({
    url: url,
    method: 'get'
  })
}

export function permList() {
  return request({
    url: url.permList,
    method: 'get'
  })
}
