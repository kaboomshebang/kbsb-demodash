import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Favorites = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Favorites
				</Typography>
				<Typography variant="body1" component="p">
					All your favorite places on the web
				</Typography>
				<ul>
					<li>lex fridman</li>
					<li>joe rogan</li>
					<li>asml</li>
					<li>ahold</li>
				</ul>
			</Box>
		</Paper>
	);
};
