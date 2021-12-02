import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router';

// assets
import logoWhiteImg from '../../assets/logo-white.svg';

// context
import { useAuth } from '../../contexts/auth';

// utils
import { findAvatar } from '../../utils/findAvatar';

import { Container } from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();

  return (
    <Container>
      <img src={logoWhiteImg} alt="logotipo Pergunta Aí" className="logo" onClick={() => history.push('/')}/>

      <button className="avatar-area" onClick={() => history.push('/profile')}>
        <img src={findAvatar(user)} alt="avatar" className="avatar-img"/>
        <h4>Olá, <strong>{user.name}</strong></h4>
        <FiChevronRight color="#fff" size="24"/>
      </button>
     </Container>
  );
};

export default Header;
