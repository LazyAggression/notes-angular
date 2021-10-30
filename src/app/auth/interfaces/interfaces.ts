export interface AuthResponse {
  accessToken?: string;
  status?: number;
  error?: string;
  username?: string;
  name?: string;
  user_id?: number;
}

export interface User {
  user_id: number;
  username: string;
  name: string;
}
