import { useState, useEffect } from 'react';

import Card from './Card';

import useCounter from './use-counter';

const ForwardCounter = () => {
 
  const forward = true;
  const counter = useCounter(forward);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
