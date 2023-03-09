import { LineChart, Line, CartesianGrid } from 'recharts';

import './chart.css';

export const RenderLineChart = () => {
	const data = [
		{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
		{ name: 'Page B', uv: 200, pv: 2400, amt: 2200 },
	];

	return (
		<div className="chart">
			<LineChart width={400} height={400} data={data}>
				<Line type="monotone" dataKey="uv" stroke="#111111" />
				<CartesianGrid stroke="#ccc" />
			</LineChart>
		</div>
	);
};
