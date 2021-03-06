import React, {useCallback, useMemo, useState} from 'react';
import { FiMessageSquare, FiThumbsUp } from 'react-icons/fi';

import { ITopic } from '../../models/topic'

import avatars from '../../assets/avatars'

import { Container } from './styles'
import { useHistory } from 'react-router';

import Tag from '../Tag';

interface Props {
  topic:ITopic
};

const Topic: React.FC<Props> = ({ topic }) => {
  const history = useHistory();

  const handleTopicClick = useCallback(()=>{
    history.push(`/topic-details/${ topic.id}`);
  },[]);

  const topicAvatar = useMemo(()=>{
    const foundedAvatar = avatars.find(avatar => avatar.avatarName === topic.avatar);
    return foundedAvatar;
  },[topic])

  return (
    <Container onClick={handleTopicClick} className={topic.status==='CLOSED' ? 'closed' : ''}>
      <p>{topic.title}</p>
      <div>
        <div className='user-container'>
          <img src={topicAvatar?.src || avatars[12].src} alt="avatar" className="avatar-img"/>
          <p>{topic.name || 'Usuário desativado'}</p>
        </div>
        <div className='interaction-container'>
          <p>{topic.totalOfAnswers}</p>
          <FiMessageSquare/>
        </div>
      </div>
      <div className="tags">
        {topic.tags?.map((tag: any) => {
          return (
            <Tag key={tag} title={tag} />
          )
        })}
      </div>
    </Container>
  )
}

export default Topic;









