import React from 'react';
import { screen } from '@testing-library/react';
import { Pokemon } from '../components';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

const isFavorite = true;
const pokemon = pokemonList[0];

describe('Teste o componente <Pokemon.js />', () => {
  test('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ isFavorite } />);

    const { image } = pokemon;

    expect(screen.getByRole('img', { name: /pikachu sprite/i }).getAttribute('src')).toBe(image);
  });
  test('A imagem do pokemon possui o alt correto', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ isFavorite } />);

    const { name } = pokemon;

    expect(screen.getByRole('img', { name: /pikachu sprite/i }).getAttribute('alt')).toBe(`${name} sprite`);
  });
  test('A imagem de favorito star possui o src /star-icon.svg', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ isFavorite } />);

    expect(screen.getByRole('img', { name: /pikachu is marked as favorite/i }).getAttribute('src')).toBe('/star-icon.svg');
  });
  test('A imagem de favorito star possui o alt <name> is marked as favorite', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ isFavorite } />);

    const { name } = pokemon;

    expect(screen.getByRole('img', { name: /pikachu is marked as favorite/i }).getAttribute('alt')).toBe(`${name} is marked as favorite`);
  });
  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ isFavorite } />);

    const { type } = pokemon;

    expect(screen.getByText(`${type}`)).toBeInTheDocument();
  });
  test('É exibido na tela um link com o href /pokemon/<id>', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ isFavorite } />);

    const { id } = pokemon;

    expect(screen.getByRole('link', { name: /more details/i }).getAttribute('href')).toBe(`/pokemon/${id}`);
  });
});
