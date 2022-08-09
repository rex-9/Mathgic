import Calculator from '../components/Calculator';
import Display from '../components/Display';

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const labels = ['AC', 'DEL', '%', '/', '*', '-', '+', '=', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

describe('Display', () => {
  test('renders Display component', () => {
    render(<Calculator />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Display' },
    });
  });
  labels.forEach(label => {
    test(`renders ${label} Button component`, () => {
      render(<Calculator />);
      fireEvent.change(screen.getByText(label), {
        target: { value: label },
      });
    });
  });
});
