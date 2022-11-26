import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o component App quando renderizado', () => {
  test('Quando App é renderizado é exibido na tela um link com o texto Home.', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', {
      name: /home/i,
    });

    expect(homeLink).toBeInTheDocument();
  });

  test('Quando App é renderizado o segundo link deve possuir o texto About.', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', {
      name: /About/i,
    });

    expect(aboutLink).toBeInTheDocument();
  });

  test('Quando App é renderizado O terceiro link deve possuir o texto Favorite Pokémon.', () => {
    renderWithRouter(<App />);

    const favoritesLink = screen.getByRole('link', {
      name: /Favorite Pokémon/i,
    });

    expect(favoritesLink).toBeInTheDocument();
  });
});

describe('Testando os Links', () => {
  test('Se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', {
      name: /home/i,
    });

    userEvent.click(homeLink);

    expect(history.location.pathname).toBe('/');
  });

  test('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);
    const favoritesLink = screen.getByRole('link', {
      name: /Favorite Pokémon/i,
    });

    userEvent.click(favoritesLink);

    expect(history.location.pathname).toBe('/favorites');
  });

  test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', {
      name: /About/i,
    });

    userEvent.click(aboutLink);

    expect(history.location.pathname).toBe('/about');
  });
});
