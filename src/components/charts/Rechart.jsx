import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	ResponsiveContainer,
} from 'recharts';

export const Rechart = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<BarChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="year" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="collision" fill="#8884d8" />
				<Bar dataKey="accident" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>
	);
};
