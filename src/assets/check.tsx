import React from 'react';

const CheckIcon = () => (
  <svg
    width="22"
    height="17"
    viewBox="0 0 22 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 10.5L6 15.5L20.5 1" stroke="#00EB84" strokeWidth="2" />
  </svg>
);

export default React.memo(CheckIcon);
export { default as CheckIcon } from './check';
