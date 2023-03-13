import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const User = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Show user information
				</Typography>
				<p>https://randomuser.me/api</p>
				<p>Avatar</p>
			</Box>
		</Paper>
	);
};
