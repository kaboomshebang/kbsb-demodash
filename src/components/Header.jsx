// MUI components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export const Header = () => {
	return (
		<>
			<Box px={2} py={8}>
				<Typography variant="h6" component="h2" gutterBottom>
					A React.js + MUI data dashboard demo.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					React frontend created with <code>npm create vite</code> and MaterialUI (minimal
					layout and styling). Uses <em>Github Actions</em> for <strong>CI/CD</strong>.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					"Add todo" widget created with <strong>Python/FastAPI</strong>,{' '}
					<strong>AWS Lambda</strong>, <strong>AWS CLI</strong>, <strong>Docker</strong>,
					and Airtable.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					The "User account" and "Comments" widgets fetch data from public APIs.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					Other widgets created with Recharts, ApexCharts, Nivo, Leaflet.js, and
					React-Hook-Form-MUI.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom>
					Documentation and source code repository on{' '}
					<Link
						href="https://www.github.com/kaboomshebang/kbsb-demodash"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github.com
					</Link>
					.
				</Typography>
			</Box>
		</>
	);
};
