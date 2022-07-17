// mocker les requêtes HTTP
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react';

import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import msw from 'msw';
import { setupServer } from 'msw/node';

import LoginSubmit from '../../components/loginSubmit';
import mockHandlers from '../../test/mock-handlers.js';

const sleep = t => new Promise(resolve => setTimeout(resolve, t));

// const server = setupServer(
// 	msw.rest.post('https://example.com/api/login', (req, res, ctx) => {
// 		if (!req.body.username)
// 			return res(
// 				ctx.status(400),
// 				ctx.json({ errorMessage: 'Username mandatory !' }),
// 				ctx.delay(100)
// 			);
//
// 		if (!req.body.password)
// 			return res(
// 				ctx.status(400),
// 				ctx.json({ errorMessage: 'Password mandatory !' }),
// 				ctx.delay(100)
// 			);
//
// 		return res(
// 			ctx.json({
// 				username: req.body.username
// 			}),
// 			ctx.delay(100)
// 		);
// 	})
// );

const server = setupServer(...mockHandlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('login api affiche le nom de l\'utilisateur connecté ', async () => {
	render(<LoginSubmit />);

	const username = faker.internet.userName();
	const password = faker.internet.password();

	const usernameElement = screen.getByText(/Nom d'utilisateur :/i);
	const passwordElement = screen.getByText(/Mot de passe :/i);
	const submitbuttonElement = screen.getByRole('button', { name: /Connexion/i });

	userEvent.type(usernameElement, username);
	userEvent.type(passwordElement, password);
	userEvent.click(submitbuttonElement);

	// await waitFor(() => sleep(150));
	await waitForElementToBeRemoved(() => screen.getByText(/chargement.../i));
	expect(screen.getByText(username)).toBeInTheDocument();
});

test('Test si le message d\'erreur est bon', async () => {
	render(<LoginSubmit />);

	const username = faker.internet.userName();
	const password = faker.internet.password();

	const usernameElement = screen.getByText(/Nom d'utilisateur :/i);
	const passwordElement = screen.getByText(/Mot de passe :/i);
	const submitbuttonElement = screen.getByRole('button', { name: /Connexion/i });

	userEvent.type(usernameElement, username);
	userEvent.click(submitbuttonElement);

	await waitForElementToBeRemoved(() => screen.getByText(/chargement.../i));
	// expect(screen.getByRole('alert')).toHaveTextContent('le password est obligatoire');
	expect(screen.getByRole('alert').textContent).toMatchInlineSnapshot(`"le password est obligatoire"`)
});

test('Test erreur 503', async () => {
	server.use(
		msw.rest.post('https://example.com/api/login', (req, res, ctx) => {
			return res(
				ctx.status(503),
				ctx.json({ errorMessage: 'Unvailaible server !'} ),
				ctx.delay(100)
			);
		})
	);

	render(<LoginSubmit />);

	const username = faker.internet.userName();
	const password = faker.internet.password();

	const usernameElement = screen.getByText(/Nom d'utilisateur :/i);
	const passwordElement = screen.getByText(/Mot de passe :/i);
	const submitbuttonElement = screen.getByRole('button', { name: /Connexion/i });

	userEvent.type(usernameElement, username);
	userEvent.click(submitbuttonElement);

	await waitForElementToBeRemoved(() => screen.getByText(/chargement.../i));
	expect(screen.getByRole('alert').textContent).toMatchInlineSnapshot(`"Unvailaible server !"`);
});
