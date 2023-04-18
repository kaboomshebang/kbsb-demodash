// MUI components
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const TopBar = () => {
	return (
		<AppBar position="static">
			<Container>
				<Typography my={2} mx={2} variant="h5" component="h1">
					kbsb-demodash
				</Typography>
			</Container>
		</AppBar>
	);
};
