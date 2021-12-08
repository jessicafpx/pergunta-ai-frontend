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

type Topic = {
  id: number;
  message: string;
  creationDate: string;
  authorName: string;
  status: string;
  answers: any[];
  tags: string[];
  title?: string;
  avatar: string;
}

const TopicDetails = () => {
  const { idTopic } = useParams<any>();
  const { user } = useAuth();
  const history = useHistory();

  const [topic, setTopic] = useState({} as Topic);
  const [isMyTopic, setIsMyTopic] = useState(false);
  const [isMyAnswer, setIsMyAnswer] = useState(false);

  useEffect(() => {
    const fetchTopicData = async () => {
      try {
        const {data: currentTopic} = await api.get(`topics/${idTopic}`);
        setTopic(currentTopic)
        console.log(currentTopic);





      } catch (err) {
      }
    }

    if (idTopic) {
      fetchTopicData();
    }
  }, []);

  useEffect(() => {
    if (topic.authorName === user.name) setIsMyTopic(true);
  }, [topic.authorName, user.name]);

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
            {topic.tags?.map((tag: any) => {
              return (
                <Tag title={tag} />
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
                <FiCheckSquare size={24} color='#737380' />
                <FiEdit size={24} color='#737380' onClick={() => history.push(`/topic/edit/${idTopic}`)}/>
                <FiTrash size={24} color='#737380' />
              </div>
            )}
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
          {topic.answers?.length>0 ? topic.answers.map((answer) => {
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
          }) : (
            <div className="no-topics">
              <NoTopics isAnswer/>
            </div>)
          }
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

