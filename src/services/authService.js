import http from './httpService';

export function getOtp(data) {
  return http.post('/auth/signup/', data);
}

export function checkOtp(data) {
  return http.post('/auth/otp/check/', data);
}

export function getTokens(data) {
  return http.post('auth/signin/', data);
}

export function verifyToken(data) {
  return http.post('/token/verify/', data);
}

export function logoutApi(data) {
  return http.post('/auth/signout/', data);
}

export function getUser() {
  return http.get('/profile/');
}
