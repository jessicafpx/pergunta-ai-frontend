import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import { FiPlus } from 'react-icons/fi';

// components
import Button from '../../components/Button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Tag from '../../components/Tag';

// context
import { DefaultContext } from '../../contexts/defaultContext';

// api
import api from '../../services/api';


import { Wrapper, Content } from './styles';

const CreateTopic = () => {
  const { origin, idTopic } = useParams<any>();
  const history = useHistory();

  const [isModalTagsOpen, setIsModalTagsOpen] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputMsg, setInputMsg] = useState('');
  const [modalMsg, setModalMsg] = useState('');
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);

  const isDisabled = useMemo(() => {
    return inputTitle.length<5 || inputMsg.length<10;
  }, [inputMsg, inputTitle])

  const { selectedTags, setSelectedTags } = useContext(DefaultContext) as any;

  useEffect(() => {
    setSelectedTags([] as string[]);
  }, []);


  const handleClickOkInSuccessModal = () => {
    setIsModalSuccessOpen(false);
    history.push('/');
  }

  const formSubmit = useCallback(async(event)=> {
    event.preventDefault();

    const newTopic = {
      title: inputTitle,
      message: inputMsg,
      tags: selectedTags
    }

    const editedTopic = {
      title: inputTitle,
      message: inputMsg,
    }

    if (origin === 'new') {
      try {
        await api.post('topics', newTopic);
        setModalMsg('Pergunta enviada com sucesso!');
        setIsModalSuccessOpen(true);
      } catch (err) {
        setModalMsg('Houve um problema ao enviar sua pergunta. Tente novamente.');
        setIsModalErrorOpen(true);
      }
    } else if (origin === 'edit') {
      try {
        await api.put(`topics/${idTopic}`, editedTopic);
        setModalMsg('Pergunta editada com sucesso!');
        setIsModalSuccessOpen(true);
      } catch (err) {
        setModalMsg('Houve um problema ao editar sua pergunta. Tente novamente.');
        setIsModalErrorOpen(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputMsg, inputTitle, selectedTags])

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
              {origin === 'new' && (
                <button className="select-button" type="button" onClick={() => setIsModalTagsOpen(true)}>
                  <FiPlus color="#00BEBB" size="24" />
                  Selecionar categoria
                </button>
              )}
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
      {isModalErrorOpen &&
        <Modal type="feedback" close={() => setIsModalErrorOpen(false)} title={modalMsg} buttonText='OK'/>
      }
      {isModalSuccessOpen &&
        <Modal type="feedback" close={handleClickOkInSuccessModal} title={modalMsg} buttonText='OK'/>
      }
    </>
  );
};

export default CreateTopic;

