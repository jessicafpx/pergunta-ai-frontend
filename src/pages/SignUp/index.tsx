import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// api
import api from '../../services/api';

// assets
import logoBlueImg from '../../assets/logo-blue.svg';
import illustrationImg from '../../assets/illustration.png';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Wrapper } from './styles';
import Modal from '../../components/Modal';

export default function SignUp() {
  const history = useHistory();

  const [inputName, setInputName] = useState('');
  const [inputCourse, setInputCourse] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordAgain, setInputPasswordAgain] = useState('');
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  const verifyInput = useCallback((inputValue: string): boolean=> {
    return !!inputValue
  },[])

  const handleSubmit = useCallback(async(event) => {
    event.preventDefault();
    if (!verifyInput(inputName) ||
    !verifyInput(inputCourse) ||
    !verifyInput(inputEmail) ||
    !verifyInput(inputPassword) ||
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

    if (inputName.length < 6) {
      setErrorMsg('O nome precisa ter pelo menos 6 caracteres.');
      setIsModalErrorOpen(true);
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/;

    if (!inputPassword.match(regex)) {
      setErrorMsg('Senha precisa ter: entre 8 e 15 caracteres, letra maiúscula, letra minúscula, número e caractere especial.');
      setIsModalErrorOpen(true);
      return;
    }

    if (!inputEmail.match('@pucgo.edu.br')) {
      setErrorMsg('O e-mail precisa ser do domínio @pucgo.edu.br.');
      setIsModalErrorOpen(true);
      return;
    }

    if (inputCourse.length < 3) {
      setErrorMsg('O curso precisa ter pelo menos 3 caracteres.');
      setIsModalErrorOpen(true);
      return;
    }

    const newUser = {
      name: inputName,
      email: inputEmail,
      password: inputPassword,
      course: inputCourse
    }

    try {
      await api.post('user/registration', newUser)
      setIsModalSuccessOpen(true);

    } catch (err) {
      setErrorMsg('Houve um problema no seu cadastro. Tente novamente.')
      setIsModalErrorOpen(true);
    }

  }, [inputCourse, inputEmail, inputName, inputPassword, inputPasswordAgain, verifyInput]);

  const handleClickOkInSuccessModal = () => {
    setIsModalSuccessOpen(false);
    history.push('/login');
  }

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
          <h2>Faça seu cadastro</h2>
          <form onSubmit={handleSubmit}>
            <Input id="name"  type="text" placeholder="Nome e sobrenome" onChange={(e) => setInputName(e.target.value)}/>
            <Input id="course" type="text" placeholder="Digite seu curso" onChange={(e) => setInputCourse(e.target.value)}/>
            <Input id="email" type="text" placeholder="Digite seu e-mail" onChange={(e) => setInputEmail(e.target.value)}/>
            <Input id="password1" type="password" placeholder="Digite uma senha" onChange={(e) => setInputPassword(e.target.value)}/>
            <Input id="password2" type="password" placeholder="Repita a senha" onChange={(e) => setInputPasswordAgain(e.target.value)}/>
            <Button type="submit">Cadastrar</Button>
          </form>
          <Link className="login" to="/login">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </div>
      </main>
      {isModalErrorOpen &&
        <Modal type="feedback" close={() => setIsModalErrorOpen(false)} title={errorMsg} buttonText='OK'/>
      }
      {isModalSuccessOpen &&
        <Modal type="feedback" close={handleClickOkInSuccessModal} title='Seu cadastro foi realizado com sucesso! Faça login para entrar na plataforma.' buttonText='OK'/>
      }
    </Wrapper>
  );
};
