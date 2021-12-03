import { useCallback, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { FiLock } from 'react-icons/fi';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';

// assets
import logoWhiteImg from '../../assets/logo-white.svg';

// api
import api from '../../services/api';

import { Wrapper, Content } from './styles';

const SetPassWord = () => {
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordAgain, setInputPasswordAgain] = useState('');
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { search } = useLocation();
  const history = useHistory();

  const verifyInput = useCallback((inputValue: string): boolean=> {
    return !!inputValue
  },[])

  const handleSubmit = useCallback(async(event) => {
    event.preventDefault();

    if (!verifyInput(inputPassword) ||
    !verifyInput(inputPasswordAgain)) {
      setErrorMsg('Preencha todos os campos!')
      setIsModalErrorOpen(true);
      return;
    }

    if (inputPassword !== inputPasswordAgain) {
      setErrorMsg('As senhas devem ser iguais.');
      setIsModalErrorOpen(true);
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/;

    if (!inputPassword.match(regex)) {
      setErrorMsg('Senha precisa ter: entre 8 e 15 caracteres, letra maiúscula, letra minúscula, número e caractere especial');
      setIsModalErrorOpen(true);
      return;
    }

    const urlSearch = new URLSearchParams(search);
    const idParam = urlSearch.get('id');

    try {
      await api.put(`/user/password/${idParam}`, {
        password: inputPassword
      });
      setIsModalSuccessOpen(true);
    } catch (err) {
      setErrorMsg('Houve um problema ao redefinir sua senha. Tente novamente.')
      setIsModalErrorOpen(true);
    }
  }, [inputPassword, inputPasswordAgain, search, verifyInput]);

  const handleClickOkInSuccessModal = () => {
    setIsModalSuccessOpen(false);
    history.push('/login');
  }

  return (
    <Wrapper>
      <Content>
      <img src={logoWhiteImg} alt="logotipo Pergunta Aí" />
      <h2>Redefinição de senha</h2>
      <form onSubmit={handleSubmit}>
        <Input icon={FiLock} name="password1" type="password" placeholder="Digite a nova senha" onChange={(e) => setInputPassword(e.target.value)}/>
        <Input icon={FiLock} name="password2" type="password" placeholder="Repita a nova senha" onChange={(e) => setInputPasswordAgain(e.target.value)}/>
        <Button type="submit">Redefinir senha</Button>
      </form>
      </Content>
      {isModalErrorOpen &&
        <Modal type="feedback" close={() => setIsModalErrorOpen(false)} title={errorMsg} buttonText='OK'/>
      }
      {isModalSuccessOpen &&
        <Modal type="feedback" close={handleClickOkInSuccessModal} title='Sua senha foi redefinida com sucesso! Faça login para entrar na plataforma.' buttonText='OK'/>
      }
    </Wrapper>
  );
};

export default SetPassWord;
