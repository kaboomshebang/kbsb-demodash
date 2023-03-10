// MUI components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// app styles
import './App.css';

function App() {
	return (
		<div className="App">
			<Container maxWidth="sm">
				<h1>App</h1>
				<Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
			</Container>
		</div>
	);
}

export default App;
