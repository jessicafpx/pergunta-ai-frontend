import { Link } from 'react-router-dom';

import { FiCamera, FiArrowLeft, FiEdit, FiTrash } from 'react-icons/fi';

import avatar from '../../assets/avatar1.png';
import Button from '../../components/Button';

import { Header, Content, Title, Form } from './styles';

const Profile = () => {

  const handleAvatarChange = () => {

  }

  return (
    <>
      <Header>
        <Link to="/">
          <FiArrowLeft color="#f8f8f8" size="24"/>
        </Link>
      </Header>
      <Content>
        <figure>
          <img src={avatar} alt="avatar" />
          <button type="button">
              <FiCamera onClick={handleAvatarChange} color="#f8f8f8" size="24"/>
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
    </>
  );
};

export default Profile;
