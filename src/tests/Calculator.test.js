import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import App from '../App';

const labels = ['AC', 'DEL', '%', '/', '*', '-', '+', '=', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ops = ['AC', 'DEL', '%', '/', '*', '-', '+', '=', '.'];

describe('Render the components of Calculator', () => {
  test('renders Display component', () => {
    render(<Calculator />);
    expect(screen.getByRole('textbox')).toMatchSnapshot(); // Display component
  });

  labels.forEach((label) => {
    test(`renders ${label} Button component`, () => {
      render(<Calculator />);
      expect(screen.getByText(label)).toMatchSnapshot(); // All of the button components
    });
  });
});

describe('Render the rest of the components', () => {
  test('Render routes', async () => {
    render(<App />);

    expect(screen.getByText(/Math Magicians/i)).toMatchSnapshot(); // Nav component

    expect(screen.getByText(/Welcome to the World of Mathgic!/i)).toMatchSnapshot(); // Home component

    fireEvent.click(screen.getByText(/Calculator/i));
    expect(screen.getByText(/Let's perform some MATHGIC !!!/i)).toMatchSnapshot(); // Calculator component

    fireEvent.click(screen.getByText(/Quote/i));
    expect(screen.getByText(/Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. - William Paul Thurston/i)).toMatchSnapshot(); // Quote component
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

  test('2.5+5.5-3*3/2%5', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('%'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('3.5');
  });

  test('operators duplicate validation', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('/'));
    expect(screen.getByRole('textbox').value).toBe('2+');
  });

  test('decimal duplicate validation', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('/'));
    expect(screen.getByRole('textbox').value).toBe('2.5*');
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('10.5');
  });

  test('AC and DEL', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('DEL'));
    expect(screen.getByRole('textbox').value).toBe('90');
    fireEvent.click(screen.getByText('AC'));
    expect(screen.getByRole('textbox').value).toBe('0');
  });
});
