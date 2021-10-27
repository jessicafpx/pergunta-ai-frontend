import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import getValidationErrors from "../../utils/getValidationErrors";
import * as Yup from 'yup';
import api from '../../services/api';

export default function SignUp() {

  const handleSubmit = useCallback(async(event) => {
    event.preventDefault();
    const users = await api.get('user')
    console.log(users)
  }, []);


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
        <form onSubmit={handleSubmit}>
          <input id="name" name="name" type="text" placeholder="Nome e sobrenome" />
          <input id="course" name="course" type="text" placeholder="Digite seu curso" />
          <input id="email" name="email" type="text" placeholder="Digite seu e-mail" />
          <input id="password" name="password" type="password" placeholder="Digite uma senha" />
          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/login">Voltar para login</Link>

      </div>
    </>
  );
};
