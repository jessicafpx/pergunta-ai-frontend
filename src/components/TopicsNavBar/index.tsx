import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

import Button from '../Button'

import { Container } from './styles'

interface TopicsNavBarProps {
  filterTopics: (value: string) => void,
}

const TopicsNavBar: React.FC<TopicsNavBarProps> = ({ filterTopics }) => {
  const history = useHistory();

  const options = [
    'Todos',
    'Respondidos',
    'Abertos',
    'Fechados',
  ]
  return (
    <Container>
      <nav>
        <ul>
          {options.map(
            option => <li key={option} onClick={() => filterTopics(option)}>{option}</li>
          )}
        </ul>
      </nav>

      <Button onClick={() => history.push('/topic/new')}>
        NOVO TÓPICO
      </Button>
    </Container>
  )
}

export default TopicsNavBar;









