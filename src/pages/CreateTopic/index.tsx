import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useParams } from 'react-router';
import Button from '../../components/Button';

import Header from '../../components/Header';

import { Wrapper, Content } from './styles';

const CreateTopic = () => {
  const { origin } = useParams<any>();

  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <>
      <Header />
      <Wrapper>
    	  <Content>
          {origin === 'edit' && <h1>Editar pergunta</h1>}
          {origin === 'new' && <h1>Nova pergunta</h1>}


          <input type="text" placeholder="Digite o título da sua pergunta" />
          <textarea wrap="off" placeholder="O que você quer perguntar?" />

          <section className="buttons">
            <button className="select-button">
              <FiPlus color="#00BEBB" size="24" />
              Selecionar categoria
            </button>
            <Button type="submit" isDisabled={isDisabled} className="submit-button">
              Salvar pergunta
            </Button>
          </section>
        </Content>
      </Wrapper>
    </>
  );
};

export default CreateTopic;
