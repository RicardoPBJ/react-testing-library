import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testando se ao renderizar a pagina about...', () => {
  test('Verificando a rota exata.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    expect(history.location.pathname).toBe('/about');
  });

  test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    renderWithRouter(<About />);

    const headerElement = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });

    expect(headerElement).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);

    const p1 = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    const p2 = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);

    const aboutImg = screen.getByRole('img', {
      name: /pokédex/i,
      src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    });

    expect(aboutImg).toBeInTheDocument();
    expect(aboutImg.getAttribute('src')).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
