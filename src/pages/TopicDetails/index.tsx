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
import { findAvatarByString } from '../../utils/findAvatar';
import NoTopics from '../../components/NoTopics';
import { ITopic } from '../../models/topic';

const TopicDetails = () => {
  const { idTopic } = useParams<any>();
  const { user } = useAuth();
  const history = useHistory();

  const [topic, setTopic] = useState({} as ITopic);
  const [isMyTopic, setIsMyTopic] = useState(false);
  const [answerId, setAnswerId] = useState(0);
  const [answerMessage, setAnswerMessage] = useState('');

  // MODAL STATES
  const [modalMessage, setModalMessage] = useState('');
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalConfirmation, setIsModalConfirmation] = useState(false);
  const [isModalAnswerDeleteOpen, setIsModalAnswerDeleteOpen] = useState(false);
  const [isModalTopicDeleteOpen, setIsModalTopicDeleteOpen] = useState(false);

  const fetchTopicData = useCallback(async () => {
    try {
      const {data: currentTopic} = await api.get(`topics/${idTopic}`);
      setTopic(currentTopic);
    } catch (err) {
      console.error(err);
    }
  }, [idTopic]);

  useEffect(() => {
    if (idTopic) {
      fetchTopicData();
    }
  }, [idTopic]);

  useEffect(() => {
    if (topic.authorId === user.id) setIsMyTopic(true);
  }, [topic.authorId, user.id]);


  const handleAnswerSubmit = useCallback( async (event)=>{
    event.preventDefault();
    const answerPayload = {
      message: answerMessage,
      topicId: topic.id,
      authorId: user.id
    }

    try{
      await api.post('answer', answerPayload);
      fetchTopicData();
      setAnswerMessage('');
    } catch (err) {
      setModalMessage('Erro ao enviar a resposta. Tente novamente mais tarde.')
      setIsModalErrorOpen(true);
    }

  },[answerMessage, topic.id, user.id]);

  const handleCloseTopic = async ()=>{
    const closeTopicPayload = {
      title: topic.title,
      message: topic.message,
      status: 'CLOSED',
      authorId: user.id
    }

    try{
      await api.put(`topics/${idTopic}`, closeTopicPayload);
      setModalMessage('Tópico fechado com sucesso!');
      setIsModalSuccessOpen(true);
      fetchTopicData();
      setIsModalConfirmation(false);
    } catch(err) {
      setModalMessage('Erro ao fechar o tópico. Tente novamente mais tarde.');
      setIsModalErrorOpen(true);
    }
  };

  const closeTopicDispatch = () => {
    if (topic.status !== 'CLOSED'){
      setModalMessage('Tem certeza que deseja fechar o tópico? Ele não poderá mais ser respondido.');
      setIsModalConfirmation(true);
    } else {
      setModalMessage('O tópico já está fechado.');
      setIsModalErrorOpen(true);
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div className="topic-box">
          <h3>{topic.title}</h3>
          <div className="tags">
            {topic.tags?.map((tag: any) => {
              return (
                <Tag key={tag} title={tag} />
              )
            })}
          </div>
          <p>{topic.message}</p>
          <div className="topic-footer">
            <div className='user-container'>
              <img src={findAvatarByString(topic.avatar)} alt="avatar" className="avatar-img"/>
              <p>{topic.authorName || 'Usuário desativado'}</p>
            </div>
            {isMyTopic && (
              <div className='buttons-box'>
                <FiCheckSquare size={24} color={topic.status === 'CLOSED' ? '#00BEBB' : '#737380'} onClick={closeTopicDispatch}/>
                <FiEdit size={24} color='#737380' onClick={() => history.push(`/topic/edit/${idTopic}`)}/>
                <FiTrash size={24} color='#737380' onClick={()=> setIsModalTopicDeleteOpen(true)}/>
              </div>
            )}
          </div>
        </div>
        {topic.status !== 'CLOSED' &&
          <form className="answer-box" onSubmit={handleAnswerSubmit}>
            <textarea wrap="off" placeholder="Digite uma resposta" onChange={(e) => setAnswerMessage(e.target.value)} value={answerMessage}/>
            <Button type="submit" isDisabled={answerMessage.length<10} className="submit-button">
              Responder
            </Button>
          </form>
        }
        <div className="answer-wrapper">
          <h4>Respostas</h4>
          {topic.answers?.length>0 ? topic.answers.map((answer) => {
            return (
              <div key={answer.id} className='answer-item'>
                <p>{answer.message}</p>
                <div className='answer-footer'>
                  <div className='user-container'>
                    <img src={findAvatarByString(answer.authorAvatar)} alt="avatar" className="avatar-img"/>
                    <p>{answer.authorName || 'Usuário desativado'}</p>
                  </div>
                  {answer.authorId === user.id &&
                    <div className='buttons-box'>
                      <FiTrash size={24} color='#737380'
                        onClick={() => {
                          setAnswerId(answer.id);
                          setIsModalAnswerDeleteOpen(true);
                        }}/>
                    </div>
                  }
                </div>
              </div>
            )
          }) : (
            <div className="no-topics">
              <NoTopics isAnswer/>
            </div>)
          }
        </div>

      </Wrapper>

      {isModalErrorOpen &&
        <Modal type="feedback" close={() => setIsModalErrorOpen(false)} title={modalMessage} buttonText='OK'/>
      }
      {isModalSuccessOpen &&
        <Modal type="feedback" close={() => setIsModalSuccessOpen(false)} title={modalMessage} buttonText='OK'/>
      }
      {isModalConfirmation &&
        <Modal type="close-topic" closeTopic={handleCloseTopic} close={() => setIsModalConfirmation(false)} title={modalMessage} buttonText='OK'/>
      }
      {isModalAnswerDeleteOpen &&
        <Modal type="answerDelete" fetchTopicData={fetchTopicData} idAnswer={answerId} close={() => setIsModalAnswerDeleteOpen(false)} />
      }
      {isModalTopicDeleteOpen &&
        <Modal type="topicDelete" idTopic={idTopic} close={() => setIsModalTopicDeleteOpen(false)} />
      }
    </>
  );
};

export default TopicDetails;

