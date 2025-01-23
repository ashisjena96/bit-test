import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogin1 } from './login1.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicLogin1 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
