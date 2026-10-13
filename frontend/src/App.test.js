import { render, screen, within } from '@testing-library/react';
import App from './App';

test('links every model card to its public Hugging Face repository', () => {
  render(<App />);
  const models = document.getElementById('models');
  const cards = within(models).getAllByRole('article');
  expect(cards).toHaveLength(6);
  cards.forEach(card => {
    expect(within(card).getByRole('link', { name: /Model card/i })).toHaveAttribute(
      'href', expect.stringMatching(/^https:\/\/huggingface\.co\/patronus-studio\//)
    );
  });
});

test('distinguishes the accepted article from publication and exposes the current CV', () => {
  render(<App />);
  expect(within(document.getElementById('publication')).getByText(/Accepted · In production/)).toBeInTheDocument();
  expect(within(document.getElementById('education')).getByText('Currently enrolled')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute('href', expect.stringContaining('/CV_Dominik_Hommer.pdf'));
  expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute('aria-expanded', 'false');
});
