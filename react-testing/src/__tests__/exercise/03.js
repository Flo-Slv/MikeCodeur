// Test en boite noir
// http://localhost:3000/alone/exercise/03.js

import * as React from 'react';
import Hello from '../../components/helloreset';
// eslint-disable-next-line no-unused-vars
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
	render(<Hello name="John" />);

	const envoyer = screen.getByRole('button', { name: /envoyer/i });
	const reset = screen.getByRole('button', { name: /reset/i });

	const label = screen.getByRole('status');

	expect(label).toHaveTextContent(`Bonjour John`);
	// fireEvent.click(envoyer);
	userEvent.click(envoyer);

	expect(label).toHaveTextContent(`Merci`);
	// fireEvent.click(reset);
	userEvent.click(reset);
	expect(label).toHaveTextContent(`Bonjour John`);
});
