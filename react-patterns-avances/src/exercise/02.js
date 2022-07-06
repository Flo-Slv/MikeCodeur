// Composants composés avec Context
// http://localhost:3000/alone/exercise/02.js

/* eslint-disable no-unused-vars */
import * as React from 'react';

import '../tab.css';

const TabsContext = React.createContext();

const Tabs = ({ children, ...props }) => {
	const [selectedTabId, setSelectedTabId] = React.useState(0)
	const selectTab = id => setSelectedTabId(id)

	return (
		<TabsContext.Provider value={{ selectedTabId, selectTab }}>
			<div className="tabs" {...props}>
				{children}
			</div>
		</TabsContext.Provider>
	);
};

const useTabs = () => {
	const context = React.useContext(TabsContext);

	if (!context) throw new Error('Utilise useTabs() dans un contexte !');

	return context;
};

const TabList = ({ children, ...props }) => {
	const clones = React.Children.map(children, (child, tabId) =>
		React.cloneElement(child, {
			tabId: tabId,
			...props,
		})
	);

	return <div className="tab" {...props}>
			{clones}
	</div>;
};

const Tab = ({ tabId, children }) => {
	const { selectedTabId, selectTab } = useTabs();

	return <button
			key={children}
			className={selectedTabId === tabId ? 'tablinks active' : 'tablinks'}
			onClick={() => selectTab(tabId)}
		>
			{children}
		</button>;
};

const TabPanels = ({ children }) => {
	return React.Children.map(children, (child, panelId) =>
		React.cloneElement(child, {
			className: 'tabcontent',
			panelId
		})
	);
};

const Panel = ({ panelId, children, ...props }) => {
	const { selectedTabId } = useTabs();

	return selectedTabId === panelId ? <div {...props}>{children}</div> : null;
};

const App = () => {
	return <Tabs>
		<TabList>
			<Tab>Londres</Tab>
			<Tab>Paris</Tab>
			<Tab>Tokyo</Tab>
		</TabList>

		<TabPanels>
			<Panel>💷 Inscription pour aller à Londre</Panel>
			<Panel>🥖 Inscription pour aller à Paris</Panel>
			<Panel>🗻 Inscription pour aller à Tokyo</Panel>
		</TabPanels>

		<small> * Ceci est un autre composant</small>
	</Tabs>;
};

export default App;
