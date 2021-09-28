import React from 'react';

import {Wrapper, BackgroundWrapper, FormWrapper} from './styles';
import backgroundImg from '../../assets/backgroundImg.png';
import logoMiniImg from '../../assets/logo-mini.png';
import logoImg from '../../assets/logo.png';

const SignUp = () => {
  return (
    <Wrapper>
      <BackgroundWrapper>
        <img src={logoMiniImg}></img>
        <img src={backgroundImg} alt=""/>
        <h3>Aprenda e compartilhe conhecimento</h3>
      </BackgroundWrapper>
      <FormWrapper>
        <img src={logoImg}></img>
        <h2>Faça seu cadastro</h2>
        <form>
          <input type="text" placeholder="Nome e sobrenome" />
          <input type="text" placeholder="Digite seu curso" />
          <input type="text" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite uma senha" />
          <button type="submit">Cadastrar</button>
        </form>
        <a href="/login"> Voltar para login</a>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignUp;
