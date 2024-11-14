import axios from "axios";
import { AuthModel, UserModel } from "./_models";

const USE_MOCK = true; // تفعيل الوضع المحلي
const API_URL = import.meta.env.VITE_APP_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`;
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

// بيانات محلية للتطوير
const mockAuthResponse: AuthModel = {
  api_token: "mock-token-123456",
};

const mockUserResponse: UserModel = {
  id: 1,
  username: "admin",
  password: undefined,
  email: "admin@demo.com",
  first_name: "Admin",
  last_name: "User",
  fullname: "Admin User",
  roles: [1],
};

// Server should return AuthModel
export function login(email: string, password: string) {
  if (USE_MOCK) {
    return Promise.resolve({ data: mockAuthResponse });
  }
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  });
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  if (USE_MOCK) {
    return Promise.resolve({ data: mockAuthResponse });
  }
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  if (USE_MOCK) {
    return Promise.resolve({ data: { result: true } });
  }
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

export function getUserByToken(token: string) {
  if (USE_MOCK) {
    return Promise.resolve({ data: mockUserResponse });
  }
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  });
}