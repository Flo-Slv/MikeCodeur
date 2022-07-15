// Test de formulaires
// http://localhost:3000/alone/exercise/04.js

/* eslint-disable no-unused-vars */
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginForm from '../../components/loginForm';

test('formulaire de login avec username et password" ', () => {
	let submittedUsername = '';
	let submittedPassword = '';

	// const handleSubmit = formData => {
	// 	submittedUsername = formData.username;
	// 	submittedPassword = formData.password;
	// }

	const handleMockFunction = jest.fn();
	// render(<LoginForm onSubmit={handleSubmit} />);
	render(<LoginForm onSubmit={handleMockFunction} />);

	const username = 'Flo';
	const password = '12345';

	const inputUsername = screen.getByText(/Nom d'utilisateur :/i);
	const inputPassword = screen.getByRole('textbox', { name: /Mot de passe :/i} );
	const button = screen.getByRole('button', { name: /Connexion/i} );

	userEvent.type(inputUsername, username);
	userEvent.type(inputPassword, password);
	userEvent.click(button);

	expect(handleMockFunction).toHaveBeenCalled();
	expect(handleMockFunction).toHaveBeenCalledTimes(1);
	expect(handleMockFunction).toHaveBeenCalledWith({
		username,
		password
	});

	// expect(submittedUsername).toBe(username);
	// expect(submittedPassword).toBe(password);
});
