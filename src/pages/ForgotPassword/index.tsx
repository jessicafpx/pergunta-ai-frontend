import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiArrowLeft } from 'react-icons/fi';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';

// assets
import logoWhiteImg from '../../assets/logo-white.svg';

import { Wrapper, Content } from './styles';
import api from '../../services/api';
import Modal from '../../components/Modal';

const ForgotPassword = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);

  const history = useHistory();

  const handleSubmit = useCallback(async(event) => {
    event.preventDefault();

    try {
      await api.get('user/send-mail', {params: {toEmail: inputEmail}})
      setIsModalSuccessOpen(true);
    } catch (err) {
      setIsModalErrorOpen(true);
    }
  }, [inputEmail]);

  const handleClickOkInSuccessModal = () => {
    setIsModalSuccessOpen(false);
    history.push('/login');
  }

  return (
    <Wrapper>
      <Content>
      <img src={logoWhiteImg} alt="logotipo Pergunta Aí" />
      <h2>Esqueceu sua senha?</h2>
      <p>Um link para redefinição de senha será enviado para o e-mail cadastrado na sua conta.</p>
      <form onSubmit={handleSubmit}>
        <Input icon={FiMail} name="email" type="text" placeholder="Digite seu e-mail" onChange={(e) => setInputEmail(e.target.value)} />
        <Button type="submit">Enviar</Button>
      </form>
      <Link className="login" to="/login">
        <FiArrowLeft />
        Voltar para login
      </Link>
      </Content>

      {isModalErrorOpen &&
        <Modal type="feedback" close={() => setIsModalErrorOpen(false)} title='O e-mail informado não possui cadastro.' buttonText='OK'/>
      }
      {isModalSuccessOpen &&
        <Modal type="feedback" close={handleClickOkInSuccessModal} title='Enviamos um e-mail para você com o link de redefinição de senha.' buttonText='OK'/>
      }
    </Wrapper>
  );
};

export default ForgotPassword;
