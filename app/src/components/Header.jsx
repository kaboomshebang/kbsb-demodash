// MUI components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';

export const Header = () => {
	return (
		<>
			<Box px={2} pt={8}>
				<Typography variant="h6" component="h2" gutterBottom>
					A React.js + MUI dashboard demo.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					React frontend created with Vite and the MUI component framework.
				</Typography>
			</Box>
			<Box px={2} pt={2}>
				<Typography variant="h7" component="h3" gutterBottom>
					Goals
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					Use a component framework to build a basic dashboard (minimal layout and
					styling).
				</Typography>
				<Typography variant="body2" component="p" gutterBottom>
					Fetch data from APIs. Send data to an API. Process data with a serverless
					function. Visualize data with charts, maps, and tables.
				</Typography>
			</Box>
			<Box px={2} pt={2} pb={8}>
				<Alert severity="error">
					Scroll to the bottom of this page for more tech/stack/project info.
				</Alert>
			</Box>
		</>
	);
};
