import React from 'react';

// assets
import noTopicsImg from '../../assets/no-topics.png';

import { Wrapper } from './styles';


const NoTopics: React.FC = () => {
  return (
    <Wrapper>
      <img src={noTopicsImg} alt="no topics" className="no-topics-img"/>
      <p>Nenhuma pergunta por aqui...</p>
    </Wrapper>
  );
}

export default NoTopics;
