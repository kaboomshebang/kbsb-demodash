import { useState, useEffect } from 'react';

// MUI components
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// RandomUser.me API
const endPoint = 'https://randomuser.me/api';

export const User = () => {
	const [user, setUser] = useState(null);
	const [refetch, setRefetch] = useState(1);

	useEffect(() => {
		let fetchedUser = false; // fetch API only once

		const fetchData = async () => {
			const data = await fetch(endPoint);
			const json = await data.json();
			!fetchedUser && setUser(json.results[0]);
		};

		if (user === null) {
			fetchData().catch(console.error);
		}

		return () => (fetchedUser = true); // cleanup function
	}, [refetch]);

	const refetchHandler = () => {
		setUser(null);
		setRefetch((prev) => -prev);
	};

	console.log('RandomUser.me data', user);

	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Show user information
				</Typography>
				<p>https://randomuser.me/api</p>
				<p>Avatar</p>
				<p>{user && user.gender}</p>
				<p>This does not work, because a re-render triggers a statecahnge?</p>
				<img src={user && user.picture.thumbnail} alt="" />
				<button onClick={refetchHandler}>Fetch new user</button>
			</Box>
		</Paper>
	);
};
