import { useCallback, useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router';

import { FiPlus } from 'react-icons/fi';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';

import { DefaultContext } from '../../contexts/defaultContext';

import { Wrapper, Content } from './styles';
import Tag from '../../components/Tag';

const CreateTopic = () => {
  const { origin } = useParams<any>();

  const [isModalTagsOpen, setIsModalTagsOpen] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputMsg, setInputMsg] = useState('');

  const isDisabled = useMemo(() => {
    return !inputTitle || !inputMsg;
  }, [inputMsg, inputTitle])

  const { selectedTags } = useContext(DefaultContext) as any;

  const formSubmit = useCallback((event)=> {
    event.preventDefault();


  }, [])

  return (
    <>
      <Header />
      <Wrapper>
    	  <Content>
          {origin === 'edit' && <h1>Editar pergunta</h1>}
          {origin === 'new' && <h1>Nova pergunta</h1>}

          <form id="topicForm" onSubmit={formSubmit}>
            <input type="text" placeholder="Digite o título da sua pergunta" onChange={(e) => setInputTitle(e.target.value)}/>
            <textarea wrap="off" placeholder="O que você quer perguntar?" onChange={(e) => setInputMsg(e.target.value)}/>


              <div className="tags">
                {selectedTags.map((tag: any) => {
                  return (
                    <Tag title={tag} />
                  )
                })}
              </div>

            <section className="buttons">
              <button className="select-button" onClick={() => setIsModalTagsOpen(true)}>
                <FiPlus color="#00BEBB" size="24" />
                Selecionar categoria
              </button>
              <Button type="submit" isDisabled={isDisabled} className="submit-button" form="topicForm">
                Salvar pergunta
              </Button>
            </section>
          </form>
        </Content>
      </Wrapper>
      {isModalTagsOpen &&
        <Modal type="tags" close={() => setIsModalTagsOpen(false)} buttonText='Confirmar categorias'/>
      }
    </>
  );
};

export default CreateTopic;

