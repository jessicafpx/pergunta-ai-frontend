import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiCamera, FiArrowLeft, FiEdit, FiTrash, FiChevronRight, FiLogOut } from 'react-icons/fi';

import Modal from '../../components/Modal';
import Button from '../../components/Button';

import avatars from '../../assets/avatars';

import { Header, Content, Title, Form, Input } from './styles';
import { useAuth } from '../../contexts/auth';
import api from '../../services/api';

const Profile = () => {
  const { signOut, user, updateUser } = useAuth();

  const [isChangeAvatarModalOpen, setIsChangeAvatarModalOpen] = useState(false);
  const [isAccountDeleteModalOpen, setIsAccountDeleteModalOpen] = useState(false);
  const [isPasswordChangeModalOpen, setIsPasswordChangeModalOpen] = useState(false);

  const [inputName, setInputName] = useState(user.name);
  const [inputCourse, setInputCourse] = useState(user.course);
  const [inputBirth, setInputBirth] = useState(user.birthDate);
  const [isDisabled, setIsDisabled] = useState(true);

  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);

  const history = useHistory();

  const handleAvatarModalOpen = () => {
    setIsChangeAvatarModalOpen(!isChangeAvatarModalOpen);
  };

  const handleAccountModalOpen = () => {
    setIsAccountDeleteModalOpen(!isAccountDeleteModalOpen);
  };

  const handlePasswordChangeModalOpen = () => {
    setIsPasswordChangeModalOpen(!isPasswordChangeModalOpen);
  };

  const findAvatar = () => {
    const findedAvatar = avatars.find((item) => item.avatarName === user.avatar);
    if (findedAvatar) return findedAvatar?.src;

    return avatars[0].src;
  };

  const handleLogOut = useCallback(async() => {
    signOut();
    history.push('/');
  }, [history, signOut]);

  const handleProfileUpdate = useCallback(async(event) => {
    event.preventDefault();

    const newUser = {...user, name: inputName, course: inputCourse, birthDate: inputBirth}
    updateUser(newUser);

    try {
      await api.put(`/user/${user.id}`, {
        name: newUser.name,
        course: newUser.course,
        avatarOptions: newUser.avatar,
        birthDate: newUser.birthDate
      });

      setIsModalSuccessOpen(true);
      setIsDisabled(true);
    } catch (err) {
      setIsModalErrorOpen(true);
    }

  }, [inputBirth, inputCourse, inputName, updateUser, user]);



  return (
    <>
      <Header>
        <Link to="/">
          <FiArrowLeft color="#f8f8f8" size="24" className="arrow-left"/>
        </Link>
        <FiLogOut color="#f8f8f8" size="24" className="logout" onClick={handleLogOut}/>
      </Header>
      <Content>
        <figure>
          <img src={findAvatar()} alt="avatar" />
          <button type="button" onClick={handleAvatarModalOpen} >
            <FiCamera color="#f8f8f8" size="24"/>
          </button>
        </figure>
        <Title>
          <h1>Meu perfil</h1>
          <div className="buttons">
            <button type="button" onClick={() => setIsDisabled(state => !state)}>
              <FiEdit color="#02B5B2" size="24"/>
            </button>
            <button type="button" onClick={handleAccountModalOpen}>
              <FiTrash color="#02B5B2" size="24"/>
            </button>
          </div>
        </Title>
        <Form onSubmit={handleProfileUpdate}>
          <fieldset>
            <legend>
              Nome
            </legend>
            <Input type="text" disabled={isDisabled} value={inputName} onChange={(e) => setInputName(e.target.value)} isDisabled={isDisabled}/>
          </fieldset>
          <fieldset>
            <legend>
              Curso
            </legend>
            <Input type="text" disabled={isDisabled} value={inputCourse} onChange={(e) => setInputCourse(e.target.value)} isDisabled={isDisabled}/>
          </fieldset>
          <fieldset>
            <legend>
              E-mail
            </legend>
            <Input type="text" disabled value={user.email} isDisabled/>
          </fieldset>
          <fieldset>
            <legend>
              Data de nascimento
            </legend>
            <Input type="text" placeholder="aaaa-mm-dd" disabled={isDisabled} value={inputBirth} onChange={(e) => setInputBirth(e.target.value)} isDisabled={isDisabled}/>
          </fieldset>
          <fieldset className="input-password" onClick={() => setIsPasswordChangeModalOpen(state => !state)}>
            <legend>
              Senha
            </legend>
            <Input type="text" disabled placeholder="******" />
            <FiChevronRight color="#012C50" size="24"/>
          </fieldset>
          <Button type="submit" isDisabled={isDisabled}>
            Confirmar alterações
          </Button>
        </Form>

      </Content>

      {isModalErrorOpen &&
        <Modal type="feedback" close={() => setIsModalErrorOpen(false)} title="Houve um erro ao alterar suas informações. Por favor, revise e tente novamente." buttonText='OK'/>
      }
      {isModalSuccessOpen &&
        <Modal type="feedback" close={() => setIsModalSuccessOpen(false)} title='Suas informações foram alteradas com sucesso!' buttonText='OK'/>
      }

      {isChangeAvatarModalOpen &&
        <Modal type="avatar" close={handleAvatarModalOpen} />
      }
      {isAccountDeleteModalOpen &&
        <Modal type="accountDelete" close={handleAccountModalOpen} />
      }
      {isPasswordChangeModalOpen &&
        <Modal type="passwordChange" close={handlePasswordChangeModalOpen} />
      }
    </>
  );
};

export default Profile;
