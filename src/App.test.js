import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react link', () => {
  render(<App />);
  const clearBtn = screen.getByText(/AC/i);
  expect(clearBtn).toBeInTheDocument();
});
