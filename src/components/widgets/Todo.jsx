import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { SwitchElement, SelectElement } from 'react-hook-form-mui';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// icons
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

let endpoint;
if (process.env.NODE_ENV === 'development') {
	endpoint = 'http://100.111.214.8:8000/new_todo';
} else if (process.env.NODE_ENV === 'production') {
	endpoint = 'https://jchv4b5lpu5gea3lkowr5g2bei0tpnsl.lambda-url.eu-central-1.on.aws/new_todo';
}

const AddTodoForm = () => {
	const submitHandler = async (data) => {
		const res = await fetch(endpoint, {
			method: 'POST',
			body: JSON.stringify({
				description: data.description,
				label: data.label,
				done: data.done,
			}),
		});
		const json = await res.json().catch(console.error);
		console.log(json);
	};

	return (
		<FormContainer defaultValues={{ label: 'normal' }} onSuccess={submitHandler}>
			<TextFieldElement name="description" label="Todo description" required fullWidth />
			<Box display="flex" gap={2}>
				<SelectElement
					margin="normal"
					name="label"
					label="Priority"
					required
					options={[
						{
							id: 'normal',
							label: 'Normal',
						},
						{
							id: 'prio',
							label: 'Prio',
						},
						{
							id: 'longterm',
							label: 'Longterm',
						},
					]}
				/>
				<SwitchElement margin="normal" name="done" label="Done" />
			</Box>
			<Button variant="contained" type="submit">
				Submit
			</Button>
		</FormContainer>
	);
};

export const Todo = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Typography variant="h6" component="h3">
						Add todo
					</Typography>
					<Alert severity="info">
						Fetch an AWS Lambda Python function that stores todos in Airtable.
					</Alert>
					<Link
						href="https://airtable.com/shrD9ve8XLZgBF29H/tbliCgx0zHmpn9SaI"
						sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
						target="_blank"
						rel="noopener noreferrer"
					>
						<OpenInNewIcon fontSize="small" />
						Open Airtable base in new window
					</Link>
					<AddTodoForm />
					<Alert severity="warning">
						Note: reload the Airtable page to refresh the data.
					</Alert>
				</Stack>
			</Box>
		</Paper>
	);
	c;
};
