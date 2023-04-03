import logo from '@/assets/logo.svg';

// MUI components
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export const TopBar = () => {
	return (
		<AppBar position="static">
			<Typography my={2} mx={4} variant="h5" component="h1">
				kbsb-demodash
			</Typography>
		</AppBar>
	);
};
