import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogin3 } from './login3.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicLogin3 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
