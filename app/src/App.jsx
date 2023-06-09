// components
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';

// widgets
import { User } from '@/components/widgets/User';
import { Banking } from '@/components/widgets/Banking';
import { GDP } from '@/components/widgets/GDP';
import { Comments } from '@/components/widgets/Comments';
import { About } from '@/components/widgets/About';
import { Populations } from '@/components/widgets/Populations';
import { Todo } from '@/components/widgets/Todo';
import { Map } from '@/components/widgets/Map';
import { MotorRacing } from '@/components/widgets/MotorRacing';

// MUI components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

// app styles
import { grey } from '@mui/material/colors';

const App = () => {
	return (
		<>
			<TopBar />
			<Container>
				<Header />
				<Grid container spacing={6} sx={{ backgroundColor: grey[100], borderRadius: 2 }}>
					<Grid xs={12} md={6}>
						<Todo />
					</Grid>
					<Grid xs={12} md={6}>
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
					<Grid xs={12} md={6}>
						<GDP />
					</Grid>
					<Grid xs={12} md={6}>
						<MotorRacing />
					</Grid>
					<Grid xs={12}>
						<Banking />
					</Grid>
				</Grid>
			</Container>
			<Container>
				<Grid container spacing={4} sx={{ my: 8 }}>
					<Grid xs={12}>
						<About />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default App;
