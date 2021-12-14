import React, {useCallback, useState, useRef} from 'react';
import { FiSearch, FiChevronDown, FiChevronUp} from 'react-icons/fi';
import { useHistory } from 'react-router';
import Button from '../Button';

import { SearchContainer, NavContainer, SearchInput, DropMenu } from './styles'

interface SearchBarProps {
  searchTopics: (searchValue: string, selectedTag: string) => void,
  filterTopicsByTag: (value: string) => void,
  filterTopicsByNavOption: (value: string) => void,
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTopics, filterTopicsByTag, filterTopicsByNavOption }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas categorias');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedNavOption, setSelectedNavOption ] = useState('Todos')
  const searchInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const navOptions = [
    'Todos',
    'Respondidos',
    'Abertos',
    'Fechados',
  ]
  const tagsOptions = ['Todas categorias','Algoritmos', 'Back-end', 'Data Science', 'DevOps', 'Engenharia de Software', 'Front-end', 'Inovação e gestão', 'Mobile', 'UX e Design' ]
  const handleDropDownOpen = useCallback((event)=> {
    setIsDropDownOpen(state => !state)
  },[]);

  const handleSelectCategory = (event: any)=> {
    if(searchInputRef.current) searchInputRef.current.value = '';
    setSelectedCategory(event.target.innerHTML)
    filterTopicsByTag(event.target.innerHTML)
  };

  const handleFilterTopicsByNavOption = (option: string) => {
    setSelectedNavOption(option);
    if(searchInputRef.current) searchInputRef.current.value = '';
    setSelectedCategory('Todas categorias');
    filterTopicsByNavOption(option)
  };

  return (
    <>
      <SearchContainer>
        <SearchInput>
          <FiSearch/>
          <input ref={searchInputRef} type="text" placeholder="Digite um termo para buscar" onChange={(e) => searchTopics(e.target.value, selectedCategory)}/>
        </SearchInput>


        <DropMenu onClick={handleDropDownOpen}>
          <input disabled placeholder="Selecionar categoria" value={selectedCategory} />
          { isDropDownOpen ? <FiChevronUp/> : <FiChevronDown/> }

          {isDropDownOpen &&
            <div>
              {tagsOptions.map( option =>
                <option key={option} onClick={handleSelectCategory}>{option}</option>
              )}
            </div>
          }
        </DropMenu>
      </SearchContainer>
      <NavContainer>
        <nav>
          <ul>
            {navOptions.map(
              option => <li className={selectedNavOption===option ? 'selected-nav-option' : ''} key={option} onClick={() => handleFilterTopicsByNavOption(option)}>{option}</li>
            )}
          </ul>
        </nav>

        <Button onClick={() => history.push('/topic/new')}>
          NOVO TÓPICO
        </Button>
      </NavContainer>
    </>
  )
}

export default SearchBar;









