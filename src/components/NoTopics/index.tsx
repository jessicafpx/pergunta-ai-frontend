import React from 'react';

// assets
import noTopicsImg from '../../assets/no-topics.png';

import { Wrapper } from './styles';

type NoTopicsProps = {
  isAnswer?: boolean;
}

const NoTopics: React.FC <NoTopicsProps>= ({isAnswer}) => {
  return (
    <Wrapper>
      <img src={noTopicsImg} alt="no topics" className="no-topics-img"/>
      {isAnswer ? (
        <p>Nenhuma resposta por aqui...</p>
      ) : (
        <p>Nenhuma pergunta por aqui...</p>
      )}
    </Wrapper>
  );
}

export default NoTopics;
