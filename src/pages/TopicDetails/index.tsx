import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import { FiCheck, FiCheckSquare, FiEdit, FiPlus, FiTrash } from 'react-icons/fi';

// components
import Button from '../../components/Button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Tag from '../../components/Tag';

// context
import { DefaultContext } from '../../contexts/defaultContext';
import { useAuth } from '../../contexts/auth';

// api
import api from '../../services/api';


import avatars from '../../assets/avatars'

import { Wrapper } from './styles';

type Topic = {
  id: number;
  message: string;
  creationDate: string;
  authorName: string;
  status: string;
  answers: any[];
  tags: string[];
  title?: string;
}
const mockTopic: Topic = {
  id: 21,
  message: "Estou integrando a emissão de nota fiscal numa aplicação, e a API me retorna um link html pra impressão. O problema é que quando jogo pra imprimir pela biblioteca react-print, usando o dangerouslySetInnerHTML, a qualidade sai bem ruim na impressora térmica. ",
  creationDate: "2021-12-06T22:06:54.392809",
  authorName: "Jessica Peixoto",
  status: "NOT_ANSWERED",
  answers: [
    {
      id: 7,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec massa nec orci posuere euismod. Phasellus lobortis ipsum laoreet augue ornare porttitor. Nulla facilisi. Duis cursus ...',
      authorAvatar: 'AVATAR6',
      authorName: 'Fulano da Silva Sauro',
      answers: 3,
    },
    {
      id: 5,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec massa nec orci posuere euismod. Phasellus lobortis ipsum laoreet augue ornare porttitor. Nulla facilisi. Duis cursus ...',
      authorAvatar: 'AVATAR3',
      authorName: 'Ciclano de Azevedo',
      answers: 5,
    },
  ],
  tags: [
    "Front-end",
    "Engenharia de Software"
  ],
  title: "Teste título"
}


const TopicDetails = () => {
  const { idTopic } = useParams<any>();
  const { user } = useAuth();
  const history = useHistory();

  const [topic, setTopic] = useState({} as Topic);

  useEffect(() => {
    const fetchTopicData = async () => {
      setTopic(mockTopic);
      // try {
      //   const {data: currentTopic} = await api.get(`topicss/${idTopic}`);

      // } catch (err) {
      // }
    }

    if (idTopic) {
      fetchTopicData();
    }
  }, []);

  const handleClickOkInSuccessModal = () => {
    // setIsModalSuccessOpen(false);
  }



  return (
    <>
      <Header />
      <Wrapper>
        <div className="topic-box">
          <h3>{topic.title}</h3>
          <div className="tags">
            {topic.tags.map((tag: any) => {
              return (
                <Tag title={tag} />
              )
            })}
          </div>
          <p>{topic.message}</p>
          <div className="topic-footer">
            <div className='user-container'>
              <img src={avatars[12].src} alt="avatar" className="avatar-img"/>
              <p>{topic.authorName || 'Usuário desativado'}</p>
            </div>
            <div className='buttons-box'>
              <FiCheckSquare size={24} color='#737380' />
              <FiEdit size={24} color='#737380' />
              <FiTrash size={24} color='#737380' />
            </div>
          </div>
        </div>
        <div className="answer-box">
          <textarea wrap="off" placeholder="Digite uma resposta" onChange={(e) => {}} value=''/>
          <Button type="submit" isDisabled={false} className="submit-button" form="topicForm">
            Responder
          </Button>
        </div>
        <div className="answer-wrapper">
          <h4>Respostas</h4>
          {topic.answers.map((answer) => {
            return (
              <div className='answer-item'>
                <p>{answer.message}</p>
                <div className='answer-footer'>
                  <div className='user-container'>
                    <img src={avatars[12].src} alt="avatar" className="avatar-img"/>
                    <p>{answer.authorName || 'Usuário desativado'}</p>
                  </div>
                  <div className='buttons-box'>
                    <FiEdit size={24} color='#737380' />
                    <FiTrash size={24} color='#737380' />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </Wrapper>

      {/* {isModalErrorOpen &&
        <Modal type="feedback" close={() => setIsModalErrorOpen(false)} title={modalMsg} buttonText='OK'/>
      }
      {isModalSuccessOpen &&
        <Modal type="feedback" close={handleClickOkInSuccessModal} title={modalMsg} buttonText='OK'/>
      } */}
    </>
  );
};

export default TopicDetails;

