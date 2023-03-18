import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Chat = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					ChatGPT Box
				</Typography>
				<p>Chat with ChatGPT</p>
				<p>Paste your API key</p>
				<input type="text" />
			</Box>
		</Paper>
	);
};