import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Sport = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Sport
				</Typography>
				<ul>
					<li>push-ups</li>
					<li>squats</li>
					<li>etc</li>
				</ul>
				<p>A widget with column charts?</p>
				<p>Or pie charts?</p>
			</Box>
		</Paper>
	);
};
