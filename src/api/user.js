import request from '@/utils/request'

export function login(data) {
  return request({
    // url: '/vue-element-admin/user/login',
    url: '/youlai-auth/oauth/token',
    method: 'post',
    params: data
  })
}

export function getInfo() {
  return request({
    // url: '/vue-element-admin/user/info',
    url: '/youlai-admin/users/me',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/youlai-auth/oauth/logout',
    method: 'delete'
  })
}

