import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Search = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Web search
				</Typography>
				<ul>
					<li>web</li>
					<li>youtube</li>
				</ul>
				<p>Keyboard shortcuts</p>
				<p>Deze moet helemaal bovenin</p>
				<p>Volle breedte?</p>
				<p>Een overlay met search results??</p>
				<p>Open results in new-tabs</p>
			</Box>
		</Paper>
	);
};
