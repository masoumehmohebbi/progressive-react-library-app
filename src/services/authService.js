import http from './httpService';

export function getOtp(data) {
  return http.post('/auth/signup/', data);
}

export function checkOtp(data) {
  return http.post('/auth/verify-email/', data);
}

export function getTokens(data) {
  return http.post('auth/signin/', data);
}
