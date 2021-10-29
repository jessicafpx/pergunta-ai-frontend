import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowLeft } from 'react-icons/fi';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';

// assets
import logoWhiteImg from '../../assets/logo-white.svg';

import { Wrapper, Content } from './styles';

const ForgotPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = useCallback(async(event) => {
    event.preventDefault();
  }, []);

  return (
    <Wrapper>
      <Content>
      <img src={logoWhiteImg} alt="logotipo Pergunta Aí" />
      <h2>Esqueceu sua senha?</h2>
      <p>Um link para redefinição de senha será enviado para o e-mail cadastrado na sua conta.</p>
      <form onSubmit={handleSubmit}>
        <Input icon={FiMail} name="email" type="text" placeholder="Digite seu e-mail"/>
        <Button type="submit">Enviar</Button>
      </form>
      <Link className="login" to="/login">
        <FiArrowLeft />
        Voltar para login
      </Link>
      </Content>
    </Wrapper>
  );
};

export default ForgotPassword;
