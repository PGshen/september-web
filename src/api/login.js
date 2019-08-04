/* eslint-disable semi */
import request from '@/utils/request'

const realApiUrl = {
  login: '/login',
  logout: '/logout',
  userInfo: '/user/now'
};

const url = realApiUrl;

export function loginByEmail(email, password) {
  const data = {
    email,
    password
  };
  return request({
    url: '/login/loginbyemail',
    method: 'post',
    data
  });
}

export function login(data) {
  return request({
    url: url.login,
    method: 'post',
    data
  });
}

export function logout() {
  return request({
    url: url.logout,
    method: 'post'
  });
}

export function getInfo() {
  return request({
    url: url.userInfo,
    method: 'post'
  });
}
