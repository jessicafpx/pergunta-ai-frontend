import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';

// assets
import logoWhiteImg from '../../assets/logo-white.svg';
import logoBlueImg from '../../assets/logo-blue.svg';
import illustrationImg from '../../assets/illustration.png';

import { useAuth } from '../../contexts/auth';

import { Wrapper } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmitForm = useCallback(async e =>{
    e.preventDefault();

    if (!email.match('@pucgo.edu.br')) {
      setErrorMsg('O e-mail precisa ser do domínio @pucgo.edu.br.');
      setIsModalErrorOpen(true);
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/;

    if (!password.match(regex)) {
      setErrorMsg('Senha precisa ter: entre 8 e 15 caracteres, letra maiúscula, letra minúscula, número e caractere especial');
      setIsModalErrorOpen(true);
      return;
    }

    try {
      await signIn({ email, password });
      history.push("/");
    } catch (err) {
      setErrorMsg('E-mail ou senha inválidos. Por favor, revise e tente novamente.')
      setIsModalErrorOpen(true);
    }
  }, [email, history, password, signIn])

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

      {isModalErrorOpen &&
        <Modal type="feedback" close={() => setIsModalErrorOpen(false)} title={errorMsg} buttonText="OK"/>
      }
    </Wrapper>
  );
};
