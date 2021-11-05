export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  birthDate: string;
  course: string;
}

export interface AuthState {
  token: string;
  user: User;
}

export interface SigInCredentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: User;
  signIn(credentials: SigInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}
