import React, {useCallback, useState} from 'react';
import { FiSearch } from 'react-icons/fi';

import Input from '../Input'
import Button from '../Button'

import { Container } from './styles'

const TopicsNavBar: React.FC = () => {
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

      <Button>
        NOVO TÓPICO
      </Button>
    </Container>
  )
}

export default TopicsNavBar;









