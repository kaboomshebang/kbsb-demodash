import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// <link> stylesheet does not work
// import styles from npm package (not documented)
import 'leaflet/dist/leaflet.css';

// import city markers
import markers from '@/data/dutch_cities.json';

export const Map = () => {
	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Typography variant="h6" component="h3">
						Cities in The Netherlands
					</Typography>
					<Alert severity="info">
						Leaflet.js map that displays the 10 biggest Dutch cities.
					</Alert>
					<MapContainer
						id="mapId"
						center={[52.5, 5.09]}
						zoom={7}
						scrollWheelZoom={false}
						style={{ height: '500px', width: '100%' }}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						{markers.map((m, i) => {
							return (
								<Marker key={i} position={[m.latitude, m.longitude]}>
									<Popup>
										<strong>{m.name}</strong>
										<br />
										<em>population: </em>
										{m.population}
									</Popup>
								</Marker>
							);
						})}
					</MapContainer>
				</Stack>
			</Box>
		</Paper>
	);
};
