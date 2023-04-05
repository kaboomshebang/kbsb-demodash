import { useState } from 'react';

import ReactApexChart from 'react-apexcharts';

export const ApexChart = ({ data }) => {
	const [state, setState] = useState({
		series: [
			{
				name: 'GDP',
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
					enabled: false,
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
				size: 1,
			},
			title: {
				text: 'GDP The Netherlands',
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
					formatter: (val) => val.toFixed(1),
				},
				title: {
					text: 'Growth',
				},
			},
			xaxis: {
				type: 'datetime',
				tickPlacement: 'on',
			},
			tooltip: {
				shared: false,
				y: {
					formatter: (val) => val.toFixed(2),
				},
				x: {
					format: 'yyyy',
				},
			},
		},
	});

	return (
		<ReactApexChart options={state.options} series={state.series} type="area" height={350} />
	);
};
