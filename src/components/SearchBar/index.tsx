import React, {useCallback, useState} from 'react';
import { FiSearch } from 'react-icons/fi';

import Input from '../Input'

import { Container } from './styles'

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Digite um termo para buscar"icon={FiSearch}/>
      <select>
        <option>Selecione uma categoria</option>
        <option>Algoritmos</option>
        <option>Back-end</option>
        <option>Data Science</option>
        <option>DevOps</option>
        <option>Engenharia de Software</option>
        <option>Front-end</option>
        <option>Inovação e gestão</option>
        <option>Mobile</option>
        <option>UX e Design</option>
      </select>
    </Container>
  )
}

export default SearchBar;









