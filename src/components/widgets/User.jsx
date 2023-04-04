import { useState, useEffect } from 'react';

// MUI components
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

// icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

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
		<Paper elevation={2} sx={{ height: '100%' }}>
			<Box p={2}>
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Typography variant="h6" component="h3">
						User account
					</Typography>
					<Alert severity="info">Fetch a user from randomuser.me/api</Alert>
					<Box>
						<Avatar alt="User" src={user && user.picture.thumbnail} />
						<Typography variant="h6" component="h6">
							{user && Object.values(user.name).join(' ')}
						</Typography>
					</Box>
					<Stack direction={'row'} sx={{ flexWrap: 'wrap', gap: 2 }}>
						<Chip icon={<AccountCircleIcon />} label={user && user.login.username} />
						<Chip icon={<EmailIcon />} label={user && user.email} variant="outlined" />
					</Stack>
					<Button onClick={refetchHandler} variant="contained">
						Fetch new user
					</Button>
				</Stack>
			</Box>
		</Paper>
	);
};
