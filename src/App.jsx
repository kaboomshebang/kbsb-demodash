// components
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Chart } from '@/components/charts/Chart';

// widgets
import { User } from '@/components/widgets/User';
import { Search } from '@/components/widgets/Search';
import { Banking } from '@/components/widgets/Banking';
import { Favorites } from '@/components/widgets/Favorites';
import { Investments } from '@/components/widgets/Investments';
import { Comments } from '@/components/widgets/Comments';
import { Dev } from '@/components/widgets/Dev';
import { Learning } from '@/components/widgets/Learning';
import { Sport } from '@/components/widgets/Sport';
import { Todo } from '@/components/widgets/Todo';
import { WebClipper } from '@/components/widgets/WebClipper';
import { Chat } from '@/components/widgets/Chat';
import { Kbsb } from '@/components/widgets/Kbsb';

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
				<Grid container spacing={2}>
					<Grid xs={12} md={7}>
						<Banking />
					</Grid>
					<Grid xs={12} sm={6} md={5}>
						<Search />
					</Grid>
					<Grid xs={8}>
						<Investments />
					</Grid>
					<Grid xs={8}>
						<Favorites />
					</Grid>
					<Grid xs={8}>
						<User />
					</Grid>

					<Grid xs={8}>
						<Comments />
					</Grid>
					<Grid xs={8}>
						<Chat />
					</Grid>
					<Grid xs={8}>
						<Dev />
					</Grid>
					<Grid xs={8}>
						<Learning />
					</Grid>
					<Grid xs={8}>
						<Sport />
					</Grid>
					<Grid xs={8}>
						<Todo />
					</Grid>
					<Grid xs={8}>
						<WebClipper />
					</Grid>
					<Grid xs={8}>
						<Kbsb />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default App;
