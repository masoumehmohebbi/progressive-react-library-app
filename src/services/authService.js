import http from './httpService';

export function getOtp() {
  return http.post('/auth/signup');
}

export function checkOtp(data) {
  return http.post(`/auth/verify-email/${data}`);
}
