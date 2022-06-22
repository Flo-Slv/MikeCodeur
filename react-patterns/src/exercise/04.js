// Props Drilling
// http://localhost:3000/alone/exercise/04.js
/* eslint-disable no-unused-vars */
import * as React from 'react';

// 🐶 Fais évoluer le Header en ajoutant en deux composants enfants <Login /> <MenuBarInfo />
// Login retourne <div>Connexion au site : {siteName} </div>
// MenuBarInfo : <div>Vous avez {nbMessages} messages</div>

// 🐶 Tu vas devoir faire transiter les props depuis App -> Header -> Login/MenuBarInfo

const Login = ({ siteName }) => {
	return <div>
		Connexion au site: {siteName}
	</div>;
};

const MenuBarInfo = ({ nbMessages }) => {
	return <>
		Vous avez {nbMessages} messages.
	</>;
};

const Header = ({ siteName, nbMessages }) => {
	return <>
		<Login siteName={siteName} />
		<MenuBarInfo  nbMessages={nbMessages} />
		<h1>Bienvenue sur {siteName} </h1>
	</>;
};

const Content = ({siteName}) => {
	return <div>Article du site {siteName} </div>;
};

const Footer = ({ siteName, email }) => {
	return <>
		<CGV siteName={siteName} />
		<About siteName={siteName} email={email} />
	</>;
};

const CGV = ({siteName}) => {
	return <div>CGV du site : {siteName} </div>;
};

const About = ({ siteName, email }) => {
	// 🐶 Tu vas devoir faire évoluer <About> pour qu'il utilise l'email de App
	// 🤖 <div>Contactez nous : {email}</div>
	return <>
		<div>A propos du site : {siteName} </div>
		<div>Contactez nous : {email}</div>
	</>;
};

const App = () => {
	const siteName = 'mikecodeur.com';
	const email = 'contact@mikecodeur.com';
	const nbMessages = 18;

	return <>
		<Header siteName={siteName} nbMessages={nbMessages} />
		<Content siteName={siteName} />
		<Footer siteName={siteName} email={email}/>
	</>;
};

export default App;
