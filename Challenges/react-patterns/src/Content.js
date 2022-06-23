import Hoc from './Hoc.js';
import { withBlueColor, withRedColor } from './withHocColor';

const Content = ({ state, onInputChange }) => {
	const handleChange = event => {
		onInputChange(event.target.name, event.target.value);
	};

	const DivWithBlue = withBlueColor(Hoc);
	const DivWithRed = withRedColor(Hoc);

	return <main className="main">
		<form>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					id="email"
					value={state.email}
					name="email"
					onChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					value={state.password}
					name="password"
					onChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="confirmation">Confirm password</label>
				<input
					id="confirmation"
					value={state.confirmation}
					name="confirmation"
					onChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<button type="submit">
					Send
				</button>
			</div>
		</form>

		<div className="hoc">
			<DivWithBlue />
			<DivWithRed />
			<DivWithBlue />
			<DivWithRed />
			<DivWithRed />
			<DivWithBlue />
			<DivWithRed />
			<DivWithBlue />
			<DivWithBlue />
			<DivWithRed />
			<DivWithBlue />
			<DivWithRed />
			<DivWithRed />
			<DivWithBlue />
		</div>
	</main>;
};

export default Content;
