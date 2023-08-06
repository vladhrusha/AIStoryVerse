import React from 'react';
import { screen, render } from '@testing-library/react';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
  it('1', () => {
    const name = 'Vlad';
    render(<TestComponent name={name} />);
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('2', () => {
    const name = '';
    render(<TestComponent name={name} />);
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});
