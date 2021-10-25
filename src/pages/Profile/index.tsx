import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiCamera, FiArrowLeft, FiEdit, FiTrash, FiChevronRight } from 'react-icons/fi';

import Modal from '../../components/Modal';
import Button from '../../components/Button';

import avatars from '../../assets/avatars';

import { Header, Content, Title, Form } from './styles';

const Profile = () => {
  const [isChangeAvatarModalOpen, setIsChangeAvatarModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('avatar8');
  const [avatar, setAvatar] = useState('avatar8');

  const handleModalOpen = () => {
    setIsChangeAvatarModalOpen(!isChangeAvatarModalOpen);
  };

  const handleConfirmAvatarChange = () => {
    setAvatar(selectedAvatar);
    handleModalOpen();
  };

  const findAvatar = () => {
    const findedAvatar = avatars.find((item) => item.avatarName === avatar);
    return findedAvatar?.src;
  };

  return (
    <>
      <Header>
        <Link to="/">
          <FiArrowLeft color="#f8f8f8" size="24"/>
        </Link>
      </Header>
      <Content>
        <figure>
          <img src={findAvatar()} alt="avatar" />
          <button type="button" onClick={handleModalOpen} >
            <FiCamera color="#f8f8f8" size="24"/>
          </button>
        </figure>
        <Title>
          <h1>Meu perfil</h1>
          <div className="buttons">
            <button type="button">
              <FiEdit color="#02B5B2" size="24"/>
            </button>
            <button type="button">
              <FiTrash color="#02B5B2" size="24"/>
            </button>
          </div>
        </Title>
        <Form>
          <fieldset>
            <legend>
              Nome
            </legend>
            <input type="text"/>
          </fieldset>
          <fieldset>
            <legend>
              Curso
            </legend>
            <input type="text"/>
          </fieldset>
          <fieldset>
            <legend>
              E-mail
            </legend>
            <input type="text"/>
          </fieldset>
          <fieldset>
            <legend>
              Data de nascimento
            </legend>
            <input type="text" placeholder="dd/mm/aaaa"/>
          </fieldset>
          <fieldset className="input-password">
            <legend>
              Senha
            </legend>
            <input type="text" placeholder="******"/>
            <FiChevronRight color="#012C50" size="24"/>
          </fieldset>
          <Button type="submit">Confirmar alterações</Button>
        </Form>

      </Content>

      {isChangeAvatarModalOpen &&
        <Modal close={handleModalOpen} confirm={handleConfirmAvatarChange} title="Alterar avatar" buttonText="Confirmar alteração">
          <div className="avatars">
            {avatars.map((avatar) => {
              let selected = '';
              if (avatar.avatarName === selectedAvatar) {
                selected = 'selected'
              }
              return <img key={avatar.avatarName} src={avatar.src} className={selected} alt="avatar" onClick={() => setSelectedAvatar(avatar.avatarName)}/>
            })}
          </div>
        </Modal>}
    </>
  );
};

export default Profile;
