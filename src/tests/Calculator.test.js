import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import App from '../App';

const labels = ['AC', 'DEL', '%', '/', '*', '-', '+', '=', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ops = ['AC', 'DEL', '%', '/', '*', '-', '+', '=', '.'];

describe('Calculator', () => {
  test('renders Display component', () => {
    render(<Calculator />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  labels.forEach((label) => {
    test(`renders ${label} Button component`, () => {
      render(<Calculator />);
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});

describe('Operations', () => {
  numbers.forEach((number) => {
    test(`clicks ${number} Button component`, () => {
      render(<Calculator />);
      fireEvent.click(screen.getByText(number));
      expect(screen.getByRole('textbox').value).toBe(number);
    });
  });

  ops.forEach((op) => {
    test(`clicks ${op} Button component`, () => {
      render(<Calculator />);
      const initialValue = screen.getByRole('textbox').value;
      fireEvent.click(screen.getByText(op));
      const { value } = screen.getByRole('textbox');
      if (initialValue !== '0') {
        expect(value).toBe(op);
      }
    });
  });
});

test('full app rendering/navigating', async () => {
  render(<App />);

  expect(screen.getByText(/Welcome to the World of Mathgic! ✨/i)).toBeInTheDocument();

  await userEvent.click(screen.getByText(/Calculator/i));
  expect(screen.getByText(/Let's perform some MATHGIC !!!/i)).toBeInTheDocument();

  await userEvent.click(screen.getByText(/Quote/i));
  expect(screen.getByText(/Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. - William Paul Thurston/i)).toBeInTheDocument();
});
