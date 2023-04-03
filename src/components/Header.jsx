// MUI components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Header = () => {
	return (
		<>
			<Box px={2} py={8}>
				<Typography variant="h6" component="h2" gutterBottom>
					A React.js + MUI data dashboard built with:
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					Python/FastAPI, AWS Lambda, Docker, Airtable
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					Recharts, ApexCharts, Nivo, Leaflet.js, React-Hook-Form-MUI
				</Typography>
			</Box>
		</>
	);
};
