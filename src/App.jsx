import { useState } from 'react';

import { RenderLineChart } from './components/chart.jsx';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>LineChart</h1>
			<RenderLineChart />
		</div>
	);
}

export default App;
