import logo from '@/assets/logo.svg';

// MUI components
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export const TopBar = () => {
	return (
		<AppBar position="static">
			<Typography variant="h5">
				<img src={logo} alt="Logo" />
				kbsb-demodash
			</Typography>
		</AppBar>
	);
};
