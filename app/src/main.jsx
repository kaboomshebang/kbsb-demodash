import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// MUI components
import CssBaseline from '@mui/material/CssBaseline';

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CssBaseline />
		<App />
	</React.StrictMode>
);
