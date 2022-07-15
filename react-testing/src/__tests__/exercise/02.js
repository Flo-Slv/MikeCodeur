// test avec React Testing Library
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Hello from '../../components/hello';

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
	// 🐶 Utilise le `render` de testing-library.
	// Note : Aucune div est necessaire à la création.
	// render retourne un objet avec avec tout un tas de choses utiles pour nos tests
	// mais ici nous allons uniquement utiliser le 'container' qui est l'élement DOM
	// contenant notre composant
	const { container } = render(<Hello name="John" />)

	const envoyer = container.querySelector('input');
	const label = container.firstChild.querySelector('div');

	// expect(label.textContent).toBe(`Bonjour John`);
	expect(label).toHaveTextContent(`Bonjour John`);
	fireEvent.click(envoyer);
	expect(label.textContent).toBe(`Merci`);
});
