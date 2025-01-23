import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogin } from './login.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicLogin />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
