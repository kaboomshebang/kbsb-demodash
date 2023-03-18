import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Investments = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Investments
				</Typography>
				<ul>
					<li>apple</li>
					<li>ibm</li>
					<li>asml</li>
					<li>ahold</li>
				</ul>
				<p>Charts of various stock prices</p>
			</Box>
		</Paper>
	);
};