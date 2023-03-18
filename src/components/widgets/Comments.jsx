import { useState, useEffect } from 'react';

// MUI components
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const endpoint = 'https://jsonplaceholder.typicode.com/comments?_limit=5';

export const Comments = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(endpoint);
			const json = await data.json();
			console.log('Comments', json);
			setData(json);
		};

		fetchData();
	}, []);

	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Comments
				</Typography>
				<p>
					[i]: Uses JSON placeholder for data:
					https://jsonplaceholder.typicode.com/comments
				</p>
				<ul>
					{data &&
						data.map((el) => (
							<li key={el.id}>
								<span>{el.email}</span>
								<p>{el.body}</p>
							</li>
						))}
				</ul>
				<div>
					<p>Add a comment</p>
					<input type="email" name="email" id="email" placeholder="Email" />
					<textarea name="comment" id="comment" placeholder="Your comment" />
					<button>Submit</button>
				</div>
			</Box>
		</Paper>
	);
};
