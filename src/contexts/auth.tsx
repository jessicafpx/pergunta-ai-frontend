import React, { createContext, useCallback, useState, useContext } from 'react';
import { AuthContextData, AuthState, User } from '../models/user';
import api from '../services/api';
import { DefaultContext } from './defaultContext';

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
    const { name, avatarOptions, birthDate, course } = userRes.data;

    const avatar = avatarOptions || 'avatar1';

    const user = { id, name, email, avatar, birthDate, course }

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
