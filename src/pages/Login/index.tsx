import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

// assets
import logoWhiteImg from '../../assets/logo-white.svg';
import logoBlueImg from '../../assets/logo-blue.svg';
import illustrationImg from '../../assets/illustration.png';

import { Wrapper } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmitForm = useCallback(async (e)=>{
    e.preventDefault();
    console.log({email, password})

    history.push("/profile");
  }, [email, password])

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
        <div className="content">
          <img src={logoWhiteImg} alt="logotipo Pergunta Aí" />
          <h2>Faça seu login</h2>
          <form onSubmit={handleSubmitForm}>
            <Input icon={FiMail} name="email" type="text" placeholder="Digite seu e-mail" onChange={(e)=>setEmail(e.target.value)}/>
            <Input icon={FiLock} name="password" type="password" placeholder="Digite a senha" onChange={(e)=>setPassword(e.target.value)} />
            <Button type="submit">Entrar</Button>
          </form>
          <Link to="/forgot-password">Esqueci minha senha</Link>
          <Link className="signup" to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </div>
      </main>
    </Wrapper>
  );
};
