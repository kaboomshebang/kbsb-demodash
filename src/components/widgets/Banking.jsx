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
	createData('01', '22/03/2023', 'Bol.com 3457-12-21-ONLNRT', '€ 100.00'),
	createData(
		'02',
		'21/03/2023',
		'Gihub 2345-01-01-SFTWRDV - SOFTWARE DEVELOPMENT TOOLS',
		'€ 10.00'
	),
	createData(
		'03',
		'19/03/2023',
		'NETFLIX 9021-08-15-VIDSTRM - Video streaming service',
		'€ 10.00'
	),
	createData('04', '12/03/2023', 'AH N.V. 2022-05-31-5789 57898028258GR', '€ 98.12'),
	createData(
		'05',
		'10/03/2023',
		'Royal Shell 9987-05-03-PTRLPRD - PETROLEUM PRODUCTS',
		'€ 55.36'
	),
	createData('06', '29/02/2023', 'JUMBO 1234-11-02', '€ 98.74'),
	createData(
		'07',
		'27/02/2023',
		'Bar Italiano B.V. 7865-07-09-RESTCAF - RESTAURANT AND CAFE',
		'€ 98.60'
	),
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
					<Alert severity="info">Static JSON data in MUI {`<Table>`} component</Alert>
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
