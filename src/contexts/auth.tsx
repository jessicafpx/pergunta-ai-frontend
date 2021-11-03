import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatarOptions: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SigInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SigInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  // salvar dados de autenticação num estado:
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@PerguntaAi:token');
    const user = localStorage.getItem('@PerguntaAi:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState; // se não encontrar
  });

  const signIn = useCallback(async ({ email, password }) => {
    const authRes = await api.post('auth', {
      email,
      password,
    });

    const {id, token} = authRes.data;

    const userRes = await api.get(`user/${id}`)
    const { name, avatarOptions } = userRes.data;

    const user = { id, name, email, avatarOptions }
    console.log(user)

    localStorage.setItem('@PerguntaAi:token', token);
    localStorage.setItem('@PerguntaAi:user', JSON.stringify(user));

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@PerguntaAi:token');
    localStorage.removeItem('@PerguntaAi:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@PerguntaAi:user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
