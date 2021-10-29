import { useCallback } from "react";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// api
import api from '../../services/api';

// assets
import logoWhiteImg from '../../assets/logo-white.svg';
import logoBlueImg from '../../assets/logo-blue.svg';
import illustrationImg from '../../assets/illustration.png';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Wrapper } from './styles';

export default function SignUp() {
  const handleSubmit = useCallback(async(event) => {
    event.preventDefault();
    const users = await api.get('user')
    console.log(users)
  }, []);

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
          <h2>Faça seu cadastro</h2>
          <form onSubmit={handleSubmit}>
            <Input id="name" name="name" type="text" placeholder="Nome e sobrenome" />
            <Input id="course" name="course" type="text" placeholder="Digite seu curso" />
            <Input id="email" name="email" type="text" placeholder="Digite seu e-mail" />
            <Input id="password" name="password" type="password" placeholder="Digite uma senha" />
            <Button type="submit">Cadastrar</Button>
          </form>
          <Link className="login" to="/login">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </div>
      </main>
    </Wrapper>
  );
};
