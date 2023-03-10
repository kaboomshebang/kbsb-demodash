import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Search = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Search
				</Typography>
			</Box>
		</Paper>
	);
};
