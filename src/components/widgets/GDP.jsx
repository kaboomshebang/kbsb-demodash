import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

// icons
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { ApexChart } from '@/components/charts/ApexCharts';

import gdp from '@/data/nld_gdp.json';

export const GDP = () => {
	return (
		<Paper elevation={2} sx={{ height: '100%' }}>
			<Box p={2}>
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Typography variant="h6" component="h3">
						Annual GDP growth - The Netherlands
					</Typography>

					<Alert severity="info">Created with React ApexCharts.</Alert>

					<ApexChart data={gdp} />
					<Alert severity="warning">
						Data extracted with an{' '}
						<Link
							href="https://observablehq.com/d/41d0060afaf5f92e"
							target="_blank"
							rel="noopener noreferrer"
							sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}
						>
							Observable notebook.
							<OpenInNewIcon fontSize="small" />
						</Link>
					</Alert>
				</Stack>
			</Box>
		</Paper>
	);
};
