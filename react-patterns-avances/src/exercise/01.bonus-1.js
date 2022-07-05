// Composants composés
// 🚀 Tabs composant composés
// http://localhost:3000/alone/exercise/01.bonus-1.js

/* eslint-disable no-unused-vars */
import * as React from 'react';

// import { default as TabsComponent } from '../tab';
import '../tab.css';


const Tabs = ({ children, ...props }) => {
	const [selectedTabId, setSelectedTabId] = React.useState(0);
	const selectTab = id => setSelectedTabId(id);

	const clones = React.Children.map(children, child => {
		if (typeof child.type === 'string')
			return { child };

		return React.cloneElement(child, {
			selectedTabId: selectedTabId,
			selectTab: selectTab,
			...props
		});
	});

	return (
		<div className="tabs" {...props}>
			{clones}
		</div>
	);
};

const TabsList = ({ selectedTabId, selectTab, children, ...props }) => {
	const clones = React.Children.map(children, (child, id) => {
		return React.cloneElement(child, {
			tabId: id,
			selectedTabId: selectedTabId,
			selectTab: selectTab,
			...props
		});
	});

	return (
		<div className="tab" {...props}>
			{clones}
		</div>
	);
};

const Tab = ({ tabId, selectedTabId, selectTab, children }) => {
	return (
		<button
			key={children}
			className={selectedTabId === tabId ? 'tablinks active' : 'tablinks'}
			onClick={e => selectTab(tabId)}
		>
			{children}
		</button>
	);
};

const TabsPanel = ({ selectedTabId, children, ...props }) => {
	return React.Children.map(children, (child, id) => {
		return React.cloneElement(child, {
			tabId: id,
			selectedTabId: selectedTabId,
			className: 'tabcontent',
			...props
		});
	});
};

const Panel = ({ children, selectedTabId, tabId, ...props }) => {
	return selectedTabId === tabId ? <div {...props}>{children}</div> : null;
};

const App = () => {
	// const options = [
	// 	{title: 'London', display: 'London is the capital city of England.'},
	// 	{title: 'Paris', display: 'Paris is the capital of France.'},
	// 	{title: 'Tokyo', display: 'Tokyo is the capital of Japan.'}
	// ];

	return (
		<Tabs>
			<TabsList>
				<Tab>London</Tab>
				<Tab>Paris</Tab>
				<Tab>Tokyo</Tab>
			</TabsList>

			<TabsPanel>
				<Panel>
					<h3>London</h3>
					test de Londres
				</Panel>
				<Panel>test de Paris</Panel>
				<Panel>test de Tokyo</Panel>
			</TabsPanel>
			<small>Autre composant</small>
		</Tabs>
	);
};

export default App;
