import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const login = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};
