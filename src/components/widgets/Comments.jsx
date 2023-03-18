import { useState, useEffect } from 'react';

// MUI components
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const endpoint = 'https://jsonplaceholder.typicode.com/';

export const Comments = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(endpoint + 'comments?_limit=3');
			const json = await res.json().catch(console.error);
			setData(json);
		};

		fetchData();
	}, []);

	const submitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const res = await fetch(endpoint + 'posts', {
			method: 'POST',
			body: JSON.stringify({
				title: formData.get('title'),
				body: formData.get('comment'),
				email: formData.get('email'),
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const json = await res.json().catch(console.error);
		setData((prev) => [...prev, json]);
	};

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
							<li key={el.id * Math.random()}>
								<span>{el.email}</span>
								<p>{el.body}</p>
							</li>
						))}
				</ul>
				<div>
					<p>Add a comment</p>
					<form action="" onSubmit={submitHandler}>
						<input type="text" name="title" id="title" placeholder="Comment title" />
						<input type="email" name="email" id="email" placeholder="Email" />
						<textarea name="comment" id="comment" placeholder="Your comment" />
						<button type="submit">Submit</button>
					</form>
				</div>
			</Box>
		</Paper>
	);
};
