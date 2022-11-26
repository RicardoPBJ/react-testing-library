import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Ao renderizar a pagina FavoritePokemon...', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos.', () => {
    renderWithRouter(<FavoritePokemon />);

    const notFoundText = screen.getByText(/no favorite pokémon found/i);

    expect(notFoundText).toBeInTheDocument();
  });
});
