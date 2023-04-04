import { useState } from 'react';

import ReactApexChart from 'react-apexcharts';

export const ApexChart = ({ data }) => {
	const [state, setState] = useState({
		series: [
			{
				name: 'GDP NL',
				data: data,
			},
		],
		options: {
			chart: {
				type: 'area',
				stacked: false,
				height: 350,
				zoom: {
					type: 'x',
					enabled: true,
					autoScaleYaxis: true,
				},
				toolbar: {
					autoSelected: 'zoom',
				},
			},
			dataLabels: {
				enabled: false,
			},
			markers: {
				size: 0,
			},
			title: {
				text: 'GDP Netherlands',
				align: 'left',
			},
			stroke: {
				curve: 'straight',
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					inverseColors: false,
					opacityFrom: 0.5,
					opacityTo: 0,
					stops: [0, 90, 100],
				},
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return (val / 1000000).toFixed(0);
					},
				},
				title: {
					text: 'Growth',
				},
			},
			xaxis: {
				type: 'datetime',
			},
			tooltip: {
				shared: false,
				y: {
					formatter: function (val) {
						return (val / 1000000).toFixed(0);
					},
				},
			},
		},
	});

	return (
		<div id="apex-chart">
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="area"
				height={350}
			/>
		</div>
	);
};
