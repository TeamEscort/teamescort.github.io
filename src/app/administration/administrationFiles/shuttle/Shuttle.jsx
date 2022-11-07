import { row } from './Shuttle.types';
import { Table, TableHead, TableBody, TableCell, TableRow, TableContainer, Paper, Typography } from "@material-ui/core";

export const Shuttles = () => {
    return (
        <div style={{ paddingRight: '20px', paddingLeft: '20px', paddingBottom: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <>
                <Typography variant="h4">Details of SLIIT Student Shuttles</Typography>
                <Typography variant="subtitle2" style={{ color: 'red' }}>* Because of the current country situation, the daily shuttle service may have some issues. Please contact respect driver for travel details.</Typography>
            </>

            <>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: '#14A5C5', fontWeight: "bold" }}>
                                <TableCell style={{ fontWeight: 'bold' }} align="left" bold>Bus Name</TableCell>
                                <TableCell align="center">Bus Number</TableCell>
                                <TableCell align="center">Start time form SLIIT</TableCell>
                                <TableCell align="center">Route</TableCell>
                                <TableCell align="center">Note</TableCell>
                                <TableCell align="center">Contact Details</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="center">{row.no}</TableCell>
                                    <TableCell align="center">{row.start}</TableCell>
                                    <TableCell align="center">{row.route}</TableCell>
                                    <TableCell align="center">{row.note}</TableCell>
                                    <TableCell align="center">{row.contact}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        </div>
    )
}