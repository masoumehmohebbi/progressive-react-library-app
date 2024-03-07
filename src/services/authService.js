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
export function logoutApi(data) {
  return http.post('/auth/signout/', data);
  // return http.post("/user/logout").then(({ data }) => data.data);
}
