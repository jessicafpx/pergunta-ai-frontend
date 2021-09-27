import React from 'react';

import avatar from '../../assets/avatar1.png';
import Button from '../../components/Button';

import { Header, Content } from './styles';

const Profile = () => {
  return (
    <>
      <Header>
        <figure>
          <img src={avatar} alt="avatar" />
          <button type="button">Editar avatar</button>
        </figure>
      </Header>
      <Content>
        <h1>Meu perfil</h1>
        <button type="button">Editar</button>
        <form>
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
        </form>

      </Content>
    </>
  );
};

export default Profile;
