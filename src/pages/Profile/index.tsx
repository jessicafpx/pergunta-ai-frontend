import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiCamera, FiArrowLeft, FiEdit, FiTrash } from 'react-icons/fi';

import Modal from '../../components/Modal';
import Button from '../../components/Button';

import avatar from '../../assets/avatar8.png';
import avatars from '../../assets/avatars';

import { Header, Content, Title, Form } from './styles';

const Profile = () => {
  const [isChangeAvatarModalOpen, setIsChangeAvatarModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('avatar8');

  const handleAvatarChange = () => {
    setIsChangeAvatarModalOpen(!isChangeAvatarModalOpen);
  }

  const findAvatar = () => {
    const findedAvatar = avatars.find((item) => item.avatarName === selectedAvatar);
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
          <button type="button" onClick={handleAvatarChange} >
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
            <input type="text"/>
          </fieldset>
          <fieldset>
            <legend>
              Senha
            </legend>
            <input type="text"/>
          </fieldset>
          <Button type="submit">Confirmar alterações</Button>
        </Form>

      </Content>

      {isChangeAvatarModalOpen &&
        <Modal close={handleAvatarChange} title="Alterar avatar" buttonText="Confirmar alteração">
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
