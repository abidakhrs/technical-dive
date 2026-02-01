import api from "./api";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface DashboardData {
  title: string;
  content: string;
}

export const loginApi = (data: LoginRequest) =>
  api.post<LoginResponse>("/auth/login", data);

export const getDashboard = () =>
  api.get("/dashboard");

export const addDashboard = (data: DashboardData) =>
  api.post("/dashboard", data);
