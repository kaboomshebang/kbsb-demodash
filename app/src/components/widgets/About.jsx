import { useState, useEffect } from 'react';

// MUI components
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

export const About = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Box>
						<Typography variant="body2" component="p" gutterBottom>
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
					<Box>
						<Typography variant="h7" component="h3" gutterBottom>
							Built with:
						</Typography>
						<Typography variant="body1" component="p" gutterBottom>
							"Add todo" widget created with <strong>Python/FastAPI</strong>,{' '}
							<strong>AWS Lambda</strong>, <strong>AWS CLI</strong>,{' '}
							<strong>Docker</strong>, and Airtable. Uses Pytest to verify the
							endpoint.
						</Typography>
						<Typography variant="body2" component="p" gutterBottom>
							Furthermore: uses Nix shell, Makefiles, and Direnv for easy development.
							Uses <em>Github Actions</em> for <strong>CI/CD</strong>.
						</Typography>
					</Box>
					<Box>
						<Typography variant="body2" component="p" gutterBottom>
							Other widgets created with Recharts, ApexCharts, Nivo, Leaflet.js, and
							React-Hook-Form-MUI.
						</Typography>
						<Typography variant="body2" component="p" gutterBottom></Typography>
					</Box>
					<Box>
						<Typography variant="h7" component="h3" gutterBottom>
							Data sources:
						</Typography>
						<Typography variant="body1" component="p" gutterBottom>
							<Link
								href="https://observablehq.com/d/889d93794bcfd6da"
								target="_blank"
								rel="noopener noreferrer"
							>
								Formula 1
							</Link>{' '}
							and{' '}
							<Link
								href="https://observablehq.com/d/41d0060afaf5f92e"
								target="_blank"
								rel="noopener noreferrer"
							>
								GDP
							</Link>{' '}
							data prepared/processed with <em>ObservableHQ</em> notebooks.
						</Typography>
					</Box>
				</Stack>
			</Box>
		</Paper>
	);
};
