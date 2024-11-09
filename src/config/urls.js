export const API_BASE_URL = "http://172.20.10.6:3000"

export const getApiURL = (endpoint) => API_BASE_URL + endpoint

export const SIGNUP_API = getApiURL('/signup');