import React from 'react';

const Login = () => {
  return (
    <>
      <div>
        <h3>Pergunta Aí</h3>
        <figure>
          <img src="" alt=""/>
          <figcaption>Imagem de pessoas com balões de conversa</figcaption>
        </figure>
        <h3>Aprenda e compartilhe conhecimento</h3>
      </div>
      <div>
        <h1>Pergunta Aí</h1>
        <h2>Faça seu login</h2>
        <form>
          <input type="text" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite uma senha" />
          <button type="submit">Entrar</button>
        </form>
        <a href="#">Esqueci minha senha</a>
        <a href="/signup">Criar conta</a>
      </div>
    </>
  );
};

export default Login;
