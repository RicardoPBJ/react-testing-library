import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Ao renderizar o componente Pokedex...', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon.', () => {
    renderWithRouter(<App />);

    const pokedexH2 = screen.getByRole('heading', {
      name: /encountered pokémon/i,
    });

    expect(pokedexH2).toBeInTheDocument();
  });

  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('button', { name: /próximo pokémon/i })).toBeInTheDocument();
  });

  test('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);

    const atributtesButton = screen.getAllByTestId('pokemon-type-button');
    const buttonAll = screen.getByRole('button', { name: /all/i });
    const nextButton = screen.getByTestId('next-pokemon');

    const elements = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    atributtesButton.forEach((button, index) => {
      expect(button).toHaveTextContent(elements[index]);
    });

    userEvent.click(atributtesButton[0]);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    userEvent.click(atributtesButton[1]);
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
    userEvent.click(nextButton);
    expect(screen.getByText(/rapidash/i)).toBeInTheDocument();
    userEvent.click(atributtesButton[2]);
    expect(screen.getByText(/caterpie/i)).toBeInTheDocument();
    userEvent.click(atributtesButton[3]);
    expect(screen.getByText(/ekans/i)).toBeInTheDocument();
    userEvent.click(atributtesButton[4]);
    expect(screen.getByText(/alakazam/i)).toBeInTheDocument();
    userEvent.click(nextButton);
    expect(screen.getByText(/mew/i)).toBeInTheDocument();
    userEvent.click(atributtesButton[5]);
    expect(screen.getByText(/snorlax/i)).toBeInTheDocument();
    userEvent.click(atributtesButton[6]);
    expect(screen.getByText(/dragonair/i)).toBeInTheDocument();
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);
    expect(buttonAll).toHaveTextContent('All');
  });
});
