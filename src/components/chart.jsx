import { LineChart, Line, CartesianGrid, ResponsiveContainer } from 'recharts';

import './chart.css';

const data = [
	{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
	{ name: 'Page B', uv: 200, pv: 2400, amt: 2200 },
];

export const RenderLineChart = () => {
	return (
		<div className="chart">
			<ResponsiveContainer width="100%" height="80%">
				<LineChart data={data}>
					<Line type="monotone" dataKey="uv" stroke="#111111" />
					<CartesianGrid stroke="#ccc" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
