import { NivoPie } from '@/components/charts/NivoPie';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import data from '@/data/dutch_cities.json';

export const Populations = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Typography variant="h6" component="h3">
						Dutch city populations
					</Typography>
					<Alert severity="info">
						Nivo.js pie chart that displays Dutch city populations.
					</Alert>
					<Box sx={{ height: '500px' }}>
						<NivoPie data={data} value={'population'} />
					</Box>
				</Stack>
			</Box>
		</Paper>
	);
};
