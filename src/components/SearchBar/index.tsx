import React, {useCallback, useState} from 'react';
import { FiSearch, FiChevronDown, FiChevronUp} from 'react-icons/fi';

import Input from '../Input'

import { Container, SearchInput, DropMenu } from './styles'

const SearchBar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const options = ['Todos','Algoritmos', 'Back-end', 'Data Science', 'DevOps', 'Engenharia de Software', 'Front-end', 'Inovação e gestão', 'Mobile', 'UX e Design' ]
  const handleDropDownOpen = useCallback((event)=> {
    setIsDropDownOpen(state => !state)
  },[]);

  const handleSelectCategory = useCallback((event)=> {
    setSelectedCategory(event.target.innerHTML)
  },[]);

  return (
    <Container>
      <SearchInput>
        <FiSearch/>
        <input type="text" placeholder="Digite um termo para buscar"/>
      </SearchInput>


      <DropMenu onClick={handleDropDownOpen}>
        <input disabled placeholder="Selecionar categoria" value={selectedCategory}/>
        { isDropDownOpen ? <FiChevronUp/> : <FiChevronDown/> }

        {isDropDownOpen &&
          <div>
            {options.map( option =>
              <option onClick={handleSelectCategory}>{option}</option>
            )}
          </div>
        }
      </DropMenu>
    </Container>
  )
}

export default SearchBar;









