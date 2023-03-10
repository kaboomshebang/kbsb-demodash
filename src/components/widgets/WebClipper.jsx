import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const WebClipper = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					WebClipper
				</Typography>
				<Typography variant="body1" component="p">
					Dump interesing web-content
				</Typography>
				<ul>
					<li>Coursera Link, etc</li>
				</ul>
			</Box>
		</Paper>
	);
};
