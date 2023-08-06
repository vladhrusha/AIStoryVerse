import React, { FC } from 'react';
import { Box, Fdfsd } from '@mui/material';

type TestComponentProps = {
  name: string;
};
// console.log(a);
// const a = 'wedwed';
const TestComponent: FC<TestComponentProps> = ({ name }) => {
  return <Box>{name || 'John'}</Box>;
};

export default TestComponent;
