import { apiClient } from "@/libs/api/client";

const PATH = "/auth";

const authenticate = async () => {
  const { data } = await apiClient.post("/auth/login");
  return data;
};

const register = async () => {
  await apiClient.post(`${PATH}/register`);
};

const AuthService = {
  authenticate,
  register,
};

export { AuthService };
