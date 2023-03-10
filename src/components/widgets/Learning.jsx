import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Learning = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Learning
				</Typography>
				<ul>
					<li>DataCamp</li>
					<li>Coursera</li>
					<li>Duoling</li>
					<li>Brilliant</li>
				</ul>
			</Box>
		</Paper>
	);
};
