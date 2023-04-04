import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
	{ id: 'date', label: 'Date', minWidth: 70 },
	{
		id: 'description',
		label: 'Description',
		minWidth: 170,
		align: 'left',
	},
	{ id: 'amount', label: 'Amount', minWidth: 100, align: 'right' },
];

function createData(id, date, description, amount) {
	return { id, date, description, amount };
}

const rows = [
	createData('01', '22/03/2023', 'Bol.com', 100),
	createData('02', '21/03/2023', 'Github', 10),
	createData('03', '19/03/2023', 'Netflix', 10),
	createData('04', '12/03/2023', 'Albert Heijn', 98),
	createData('05', '10/03/2023', 'Shell', 55),
	createData('06', '29/02/2023', 'Jumbo', 98),
	createData('07', '27/02/2023', 'Bar Italia', 98),
];

export const Banking = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper elevation={2}>
			<Box p={2}>
				<Stack spacing={2}>
					<Typography variant="h6" component="h3">
						Banking
					</Typography>
					<Alert severity="info">Static data in MUI {`<Table>`} component</Alert>
				</Stack>

				<TableContainer sx={{ maxHeight: 440 }}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row) => {
									return (
										<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
											{columns.map((column) => {
												const value = row[column.id];
												return (
													<TableCell key={column.id} align={column.align}>
														{column.format && typeof value === 'number'
															? column.format(value)
															: value}
													</TableCell>
												);
											})}
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Box>
		</Paper>
	);
};
