// components
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Chart } from '@/components/charts/Chart';

// widgets
import { Search } from '@/components/widgets/Search';
import { Banking } from '@/components/widgets/Banking';
import { Leisure } from '@/components/widgets/Leisure';
import { Investments } from '@/components/widgets/Investments';

// MUI components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

// app styles
import './App.css';

function App() {
	return (
		<>
			<TopBar />
			<Container>
				<Header />
				<Grid container spacing={2}>
					<Grid xs={8}>
						<Search />
					</Grid>
					<Grid xs={4}>
						<Banking />
					</Grid>
					<Grid xs={8}>
						<Investments />
					</Grid>
					<Grid xs={8}>
						<Leisure />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
