// MUI components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Header = () => {
	return (
		<>
			<Box px={4} py={2} pt={8}>
				<Typography variant="h4" component="h1" gutterBottom>
					Your daily dasboard
				</Typography>
			</Box>
			<Box px={4} pb={2}>
				<Typography variant="h6" component="p" gutterBottom>
					All your important links, shortcuts and widgets in an easy to use startpage.
					(Mag wel wat groter, volle breedte)
				</Typography>
			</Box>
		</>
	);
};
