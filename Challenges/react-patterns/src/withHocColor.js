export const withBlueColor = Component => {
	return props => {
		return <Component {...props} color={"blue"} />
	};
};

export const withRedColor = Component => {
	return props => {
		return <Component {...props} color={"red"} />
	};
};
