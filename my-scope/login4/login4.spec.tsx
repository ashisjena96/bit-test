import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogin4 } from './login4.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicLogin4 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
