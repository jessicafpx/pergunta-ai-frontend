import React from 'react';
import { useHistory } from 'react-router';

import Button from '../Button'

import { Container } from './styles'

const TopicsNavBar: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <nav>
        <ul>
          <li>Todos</li>
          <li>Recentes</li>
          <li>Mais Curtidos</li>
          <li>Abertos</li>
          <li>Fechados</li>
        </ul>
      </nav>

      <Button onClick={() => history.push('/topic/new')}>
        NOVO TÓPICO
      </Button>
    </Container>
  )
}

export default TopicsNavBar;









