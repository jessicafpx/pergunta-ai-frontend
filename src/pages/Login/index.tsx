import logoWhiteImg from '../../assets/logo-white.svg';
import logoBlueImg from '../../assets/logo-blue.svg';
import illustrationImg from '../../assets/illustration.png';

import { Wrapper } from './styles';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const handleSubmitForm = useCallback(async (e)=>{
    e.preventDefault();

    console.log({email, password})

  },[email, password])

  return (
    <Wrapper>
      <aside>
        <figure>
          <img src={logoBlueImg} alt="logotipo Pergunta Aí" />
        </figure>
        <img src={illustrationImg} alt="pessoas com balões de conversa" id="illustration"/>
        <h3>Aprenda e compartilhe conhecimento</h3>
      </aside>
      <main>
        <img src={logoWhiteImg} alt="logotipo Pergunta Aí" />
        <h2>Faça seu login</h2>
        <form onSubmit={handleSubmitForm}>
          <input name="email" type="text" placeholder="Digite seu e-mail" onChange={(e)=>setEmail(e.target.value)} />
          <input name="password" type="password" placeholder="Digite uma senha" onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit">Entrar</button>
        </form>
        <a href="#">Esqueci minha senha</a>
        <Link to="/signup">Criar conta</Link>
      </main>
    </Wrapper>
  );
};
