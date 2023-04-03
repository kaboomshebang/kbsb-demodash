import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TodoForm = () => {
	return (
		<FormContainer defaultValues={{ name: '' }} onSuccess={(data) => console.log(data)}>
			<TextFieldElement name="name" label="Name" required />
		</FormContainer>
	);
};

export const Todo = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		console.log('Click');
	};

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
				<form action="" onSubmit={submitHandler}>
					<label htmlFor="">DEsc</label>
					<input id="description" name="description" />
					<button type="submit">Add</button>
				</form>
			</Box>
		</Paper>
	);
};
