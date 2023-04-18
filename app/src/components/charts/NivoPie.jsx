import { ResponsivePie } from '@nivo/pie';

export const NivoPie = ({ data, value }) => (
	<ResponsivePie
		value={value}
		data={data}
		margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
		innerRadius={0.5}
		padAngle={0.7}
		cornerRadius={3}
		activeOuterRadiusOffset={8}
		borderWidth={1}
		borderColor={{
			from: 'color',
			modifiers: [['darker', 0.2]],
		}}
		arcLinkLabelsSkipAngle={10}
		arcLinkLabelsTextColor="#333333"
		arcLinkLabelsThickness={2}
		arcLinkLabelsColor={{ from: 'color' }}
		arcLabelsSkipAngle={10}
		arcLabelsTextColor={{
			from: 'color',
			modifiers: [['darker', 2]],
		}}
		defs={[
			{
				id: 'dots',
				type: 'patternDots',
				background: 'inherit',
				color: 'rgba(255, 255, 255, 0.3)',
				size: 4,
				padding: 1,
				stagger: true,
			},
			{
				id: 'lines',
				type: 'patternLines',
				background: 'inherit',
				color: 'rgba(255, 255, 255, 0.3)',
				rotation: -45,
				lineWidth: 6,
				spacing: 10,
			},
		]}
		fill={[
			{
				match: {
					id: 'amsterdam',
				},
				id: 'dots',
			},
			{
				match: {
					id: 'rotterdam',
				},
				id: 'dots',
			},
			{
				match: {
					id: 'the-hague',
				},
				id: 'dots',
			},
			{
				match: {
					id: 'utrecht',
				},
				id: 'dots',
			},
			{
				match: {
					id: 'eindhoven',
				},
				id: 'lines',
			},
			{
				match: {
					id: 'tilburg',
				},
				id: 'lines',
			},
			{
				match: {
					id: 'groningen',
				},
				id: 'lines',
			},
			{
				match: {
					id: 'almere',
				},
				id: 'lines',
			},
		]}
		legends={[
			{
				anchor: 'bottom',
				direction: 'row',
				justify: false,
				translateX: 0,
				translateY: 56,
				itemsSpacing: 0,
				itemWidth: 100,
				itemHeight: 18,
				itemTextColor: '#999',
				itemDirection: 'left-to-right',
				itemOpacity: 1,
				symbolSize: 18,
				symbolShape: 'circle',
				effects: [
					{
						on: 'hover',
						style: {
							itemTextColor: '#000',
						},
					},
				],
			},
		]}
	/>
);
