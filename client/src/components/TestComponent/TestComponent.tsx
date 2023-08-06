import React, { FC } from 'react';
import { Box } from '@mui/material';

type TestComponentProps = {
  name: string;
};

const TestComponent: FC<TestComponentProps> = ({ name }) => {
  return <Box>{name || 'John'}</Box>;
};

export default TestComponent;
