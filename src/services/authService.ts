import { GetOtpProps, CheckOtpProps } from '../types/Auth';
import http from './httpService';

type LogOutApiProps = {
  refresh_token: string;
};
type GetTokenProps = {
  username_or_email?: string;
  password: string;
};
export function getOtp(data: GetOtpProps) {
  return http.post('/auth/signup/', data);
}

export function checkOtp(data: CheckOtpProps) {
  return http.post('/auth/otp/check/', data);
}

export function getTokens(data: GetTokenProps) {
  return http.post('auth/signin/', data);
}

export function logoutApi(data: LogOutApiProps) {
  return http.post('/auth/signout/', data);
}

export function getUser() {
  return http.get('/profile/');
}
