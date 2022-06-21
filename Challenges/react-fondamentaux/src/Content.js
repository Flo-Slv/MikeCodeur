import { useState } from 'react';

const Content = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let handleInput = event => {
		if (event.target.name == "email")
			return setEmail(event.target.value);

		if (event.target.name == "password")
			return setPassword(event.target.value);
	};

	let handleSubmit = event => {
		event.preventDefault();
		alert(`Bonjour ${email} ! Votre mdp est: ${password}`);
	};

	return (
		<div className="App-content">
			<form className="content" onSubmit={handleSubmit}>
				<>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						name="email"
						value={email}
						onChange={handleInput}
					/>
				</>

				<>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handleInput}
					/>
				</>

				<>
					<button type="submit">
						Login
					</button>
				</>
			</form>
		</div>
	);
};

export default Content;
