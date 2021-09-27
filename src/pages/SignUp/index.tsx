import React from 'react';

const SignUp = () => {
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
        <h2>Faça seu cadastro</h2>
        <form>
          <input type="text" placeholder="Nome e sobrenome" />
          <input type="text" placeholder="Digite seu curso" />
          <input type="text" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite uma senha" />
          <button type="submit">Cadastrar</button>
        </form>
        <a href="/login"> Voltar para login</a>
      </div>
    </>
  );
};

export default SignUp;
