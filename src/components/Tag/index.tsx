import React from 'react';

import { Wrapper } from './styles';

type Props = {
  title: string;
}

const Tag = ({ title }: Props) => {
  return (
    <Wrapper>
      {title}
    </Wrapper>
  );
}

export default Tag;
