// Hook Perso
// http://localhost:3000/alone/exercise/04.js

import * as React from 'react';

const themes = {
	light: {
		ul: {listStyleType: 'square'},
		li: {background: '#eeeeee', color: '#000000'},
		foreground: '#000000',
		background: '#eeeeee'
	},
	dark: {
		ul: {listStyleImage: "url('https://www.w3schools.com/css/sqpurple.gif')"},
		li: {background: '#222222', color: 'white'},
		foreground: '#ffffff',
		background: '#222222'
	}
};

const ThemeContext = React.createContext(themes.light);

const Toolbar = () => {
	return <div>
		<Button />
		<List />
	</div>;
};

const Button = () => {
	// const [theme] = React.useContext(ThemeContext);
	const [theme] = useTheme();

	return <button style={{background: theme.background, color: theme.foreground}}>
		Envoyer
	</button>;
};

const List = () => {
	const items = ['react', 'angular', 'vue'];

	// const [theme] = React.useContext(ThemeContext);
	const [theme] = useTheme();

	return <ul style={{...theme.ul}}>
		{items.map((item, index) => {
			return <Item key={index} theme={theme}>{item}</Item>
		})}
	</ul>;
};

const Item = ({ children }) => {
	// const [theme] = React.useContext(ThemeContext);
	const [theme] = useTheme();

	return <li style={{...theme.li}}>{children}</li>;
}

// const CheckBox = ({ darkMode, onChange }) => {
const CheckBox = () => {
	// const theme = React.useContext(ThemeContext);
	// const [theme, setTheme] = React.useContext(ThemeContext);
	const [theme, setTheme] = useTheme();

	const [darkMode, setDarkMode] = React.useState(Boolean(false));


	// const handleCheck = e => onChange(e.target.checked);
	const handleCheck = e => {
		setDarkMode(e.target.checked);
		setTheme(e.target.checked ? themes.dark : themes.light);
	}

	return <label style={{background: theme.background, color: theme.foreground}}>
		<input type="checkbox" checked={darkMode} onChange={handleCheck} />{' '}
		utiliser le DarkMode ?
	</label>;
};

const ThemeProvider = props => {
	const [theme, setTheme] = React.useState(themes.light);
	const value = [theme, setTheme];

	return <ThemeContext.Provider value={value} {...props} />
};

const useTheme = () => {
	const context = React.useContext(ThemeContext);

	if (!context) throw new Error('useTheme doit etre dans ThemeProvider');

	return context;
};

const App = () => {
	// const [darkMode, setDarkMode] = React.useState(Boolean(false));

	// const theme = darkMode ? themes.dark : themes.light;

	return <div>
		<ThemeProvider>
			<CheckBox />
			<Toolbar />
		</ThemeProvider>
	</div>;

	// return <div>
	// 	<ThemeContext.Provider value={theme}>
	// 		<CheckBox darkMode={darkMode} onChange={setDarkMode} />
	// 		<Toolbar />
	// 	</ThemeContext.Provider>
	// </div>;
};

export default App;
