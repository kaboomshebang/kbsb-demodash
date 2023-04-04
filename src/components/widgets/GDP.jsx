import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import { ApexChart } from '@/components/charts/ApexCharts';

import gdp from '@/data/nld_gdp.json';

export const GDP = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Typography variant="h6" component="h3">
						Annual GDP growth - The Netherlands
					</Typography>

					<Alert severity="info">
						React ApexCharts. JSON Source:{' '}
						<Link href="https://observablehq.com/d/41d0060afaf5f92e">
							Observable Notebook
						</Link>
					</Alert>

					<ApexChart data={gdp} />
				</Stack>
			</Box>
		</Paper>
	);
};
