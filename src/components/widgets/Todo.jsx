import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Todo = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Todo
				</Typography>
				<p>Uses JSON placeholder for data</p>
				<ul>
					<li>https://jsonplaceholder.typicode.com/todos/1</li>
					<li>todo item</li>
				</ul>
			</Box>
		</Paper>
	);
};
