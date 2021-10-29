import { useCallback, useState } from 'react';
import { FiLock } from 'react-icons/fi';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';

// assets
import logoWhiteImg from '../../assets/logo-white.svg';

import { Wrapper, Content } from './styles';

const SetPassWord = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = useCallback(async(event) => {
    event.preventDefault();
  }, []);

  return (
    <Wrapper>
      <Content>
      <img src={logoWhiteImg} alt="logotipo Pergunta Aí" />
      <h2>Redefinição de senha</h2>
      <form onSubmit={handleSubmit}>
        <Input icon={FiLock} name="password1" type="password" placeholder="Digite a nova senha"/>
        <Input icon={FiLock} name="password2" type="password" placeholder="Repita a nova senha"/>
        <Button type="submit">Redefinir senha</Button>
      </form>
      </Content>
    </Wrapper>
  );
};

export default SetPassWord;
