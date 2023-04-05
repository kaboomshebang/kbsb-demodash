import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

// icons
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { Rechart } from '@/components/charts/Rechart';

import data from '@/data/ergast_mrd.json';

export const MotorRacing = () => {
	return (
		<Paper elevation={2} sx={{ height: '100%' }}>
			<Box p={2}>
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Typography variant="h6" component="h3">
						Formula 1 accidents (per season)
					</Typography>
					<Alert severity="info">
						Created with Recharts. Read more about{' '}
						<Link
							href="https://safetydriven.ca/resource/accident-or-collision/"
							target="_blank"
							rel="noopener noreferrer"
						>
							the difference between an accident and a collision.
						</Link>
					</Alert>
					<Rechart data={data} />
					<Alert severity="warning">
						Data extracted with an:{' '}
						<Link
							href="https://observablehq.com/d/889d93794bcfd6da"
							target="_blank"
							rel="noopener noreferrer"
							sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}
						>
							ObservableHQ notebook
							<OpenInNewIcon fontSize="small" />
						</Link>
					</Alert>
				</Stack>
			</Box>
		</Paper>
	);
};
