// components
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Chart } from '@/components/charts/Chart';

// widgets
import { User } from '@/components/widgets/User';
import { Banking } from '@/components/widgets/Banking';
import { GDP } from '@/components/widgets/GDP';
import { Comments } from '@/components/widgets/Comments';
import { Populations } from '@/components/widgets/Populations';
import { Todo } from '@/components/widgets/Todo';
import { Map } from '@/components/widgets/Map';

// MUI components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

// app styles

function App() {
	return (
		<>
			<TopBar />
			<Container>
				<Header />
				<Grid container spacing={4}>
					<Grid xs={12} sm={6}>
						<Todo />
					</Grid>
					<Grid xs={12} sm={6}>
						<User />
					</Grid>
					<Grid xs={12}>
						<Comments />
					</Grid>
					<Grid xs={12} sm={6}>
						<Map />
					</Grid>
					<Grid xs={12} sm={6}>
						<Populations />
					</Grid>
					<Grid xs={12} sm={6}>
						<GDP />
					</Grid>
					<Grid xs={12} sm={6}>
						Recharts
						<Investments />
					</Grid>
					<Grid xs={12}>
						<Banking />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default App;
