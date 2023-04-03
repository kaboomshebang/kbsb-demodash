import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { SwitchElement } from 'react-hook-form-mui';
import { SelectElement } from 'react-hook-form-mui';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AddTodoForm = () => {
	const submitHandler = (data) => {
		console.log(data);
	};

	return (
		<FormContainer defaultValues={{ label: 'normal' }} onSuccess={submitHandler}>
			<TextFieldElement name="description" label="Description" required fullWidth />
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
			<Button variant="outlined" type="submit">
				Submit
			</Button>
		</FormContainer>
	);
};

export const Todo = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Typography variant="h6" component="h3">
					Add todo
				</Typography>
				<AddTodoForm />
			</Box>
		</Paper>
	);
};
