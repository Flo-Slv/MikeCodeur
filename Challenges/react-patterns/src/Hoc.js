const Hoc = ({ number, color }) => {
	return <div className="hoc-child" style={{ backgroundColor: color }}>
		div {number}
	</div>;
};

export default Hoc;
