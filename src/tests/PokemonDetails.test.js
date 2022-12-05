import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';
import App from '../App';

const pokemon = pokemonList[0];

describe('Teste o componente <PokemonDetails.js />', () => {
  test('É exibido na tela um h2 com o texto <name> Details', () => {
    renderWithRouter(<App />);

    const { type, name } = pokemon;

    userEvent.click(screen.getByRole('button', { name: `${type}` }));

    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    expect(screen.getByRole('heading', { name: `${name} Details` })).toBeInTheDocument();
  });
  test('É exibido na tela um h2 com o texto Summary', () => {
    renderWithRouter(<App />);

    const { type } = pokemon;

    userEvent.click(screen.getByRole('button', { name: `${type}` }));

    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    expect(screen.getByRole('heading', { name: /summary/i })).toBeInTheDocument();
  });
  test('É exibido na tela um texto contendo <summary>', () => {
    renderWithRouter(<App />);

    const { type, summary } = pokemon;

    userEvent.click(screen.getByRole('button', { name: `${type}` }));

    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    expect(screen.getByText(`${summary}`)).toBeInTheDocument();
  });
  test('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
    renderWithRouter(<App />);

    const { type, name } = pokemon;

    userEvent.click(screen.getByRole('button', { name: `${type}` }));

    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    expect(screen.getByRole('heading', { name: `Game Locations of ${name}` })).toBeInTheDocument();
  });
  test('São exibidas na tela imagens de localização com o src correto', () => {
    renderWithRouter(<App />);

    const { type, name, foundAt } = pokemon;

    userEvent.click(screen.getByRole('button', { name: `${type}` }));

    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    const imgs = screen.getAllByRole('img', { name: `${name} location` });

    imgs.forEach((img, index) => {
      expect(img.getAttribute('src')).toBe(foundAt[index].map);
    });
  });
  test('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    renderWithRouter(<App />);

    const { type } = pokemon;

    userEvent.click(screen.getByRole('button', { name: `${type}` }));

    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    expect(screen.getByText(/pokémon favoritado\?/i)).toBeInTheDocument();
  });
});
