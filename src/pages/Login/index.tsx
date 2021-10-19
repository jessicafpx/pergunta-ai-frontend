import logoWhiteImg from '../../assets/logo-white.svg';
import logoBlueImg from '../../assets/logo-blue.svg';
import illustrationImg from '../../assets/illustration.png';

import { Wrapper } from './styles';

export default function Login() {
  return (
    <Wrapper>
      <aside>
        <figure>
          <img src={logoBlueImg} alt="logotipo Pergunta Aí" />
        </figure>
        <img src={illustrationImg} alt="pessoas com balões de conversa" id="illustration"/>
        <h3>Aprenda e compartilhe conhecimento</h3>
      </aside>
      <main>
        <img src={logoWhiteImg} alt="logotipo Pergunta Aí" />
        <h2>Faça seu login</h2>
        <form>
          <input type="text" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite uma senha" />
          <button type="submit">Entrar</button>
        </form>
        <a href="#">Esqueci minha senha</a>
        <a href="/signup">Criar conta</a>
      </main>
    </Wrapper>
  );
};
