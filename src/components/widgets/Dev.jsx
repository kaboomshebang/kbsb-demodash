import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Dev = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Dev
				</Typography>
				<Typography variant="body1" component="p">
					IPs of development projects
				</Typography>
				<ul>
					<li>100.170.178.100:1313 Hugo</li>
					<li>localhost:1313 JS Vite</li>
					<li>localhost:5173 JS Vite</li>
				</ul>
			</Box>
		</Paper>
	);
};
