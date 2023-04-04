import { useState, useEffect } from 'react';

// MUI components
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// icons
import FaceIcon from '@mui/icons-material/Face';

const endpoint = 'https://jsonplaceholder.typicode.com/';
const randomStart = Math.round(Math.random() * 10 + 1, 1);

export const Comments = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(endpoint + `comments?_start=${randomStart}&_limit=3`);
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
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Typography variant="h6" component="h3">
						Comments
					</Typography>
					<Alert severity="info">
						Fetches data from jsonplaceholder.typicode.com/comments
					</Alert>

					<List>
						{data &&
							data.map((el) => (
								<ListItem
									key={el.id * Math.random()}
									sx={{
										flexDirection: 'column',
										alignItems: 'flex-start',
										gap: 1,
									}}
								>
									<Chip icon={<FaceIcon />} label={el.email} variant="outlined" />
									<Typography component="span" variant="body2">
										{el.body}
									</Typography>
								</ListItem>
							))}
					</List>
					<Typography variant="h6" component="h3">
						Leave a comment
					</Typography>
					<Alert severity="warning">Note: comments are not stored</Alert>
					<FormControl
						component="form"
						onSubmit={submitHandler}
						sx={{ display: 'flex', gap: 3 }}
					>
						<TextField
							type="email"
							name="email"
							id="email"
							label="Your email"
							variant="outlined"
							required
						/>
						<TextField
							name="comment"
							id="comment"
							label="Your comment"
							variant="outlined"
							multiline
							rows={4}
							placeholder="What's on your mind.."
							required
						/>
						<Button type="submit" variant="outlined">
							Add comment to list
						</Button>
					</FormControl>
				</Stack>
			</Box>
		</Paper>
	);
};
