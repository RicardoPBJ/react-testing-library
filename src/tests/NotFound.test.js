import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Ao renderizar o componente NotFound... ', () => {
  test('', () => {
    renderWithRouter(<NotFound />);

    const h2Element = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
  });

  test('', () => {
    renderWithRouter(<NotFound />);

    const notFoundImg = screen.getByRole('img', {
      src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    });

    expect(notFoundImg).toBeInTheDocument();
    expect(notFoundImg.getAttribute('src')).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
