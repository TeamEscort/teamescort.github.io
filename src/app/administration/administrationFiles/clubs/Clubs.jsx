import { row } from './Clubs.types';
import { Table, TableHead, TableBody, TableCell, TableRow, TableContainer, Paper, Typography, TextField } from "@material-ui/core";
import { useState } from "react";

export const Clubs = () => {
    const [allClubs, setAllClubs] = useState(row);

    const requestSearch = (searchVal) => {
        const filterRows = row.filter((row) => {
            return row.name.toLowerCase().includes(searchVal.toLowerCase());
        })
        filterRows && setAllClubs(filterRows);
    }

    return (
        <div style={{ paddingRight: '20px', paddingLeft: '20px', paddingBottom: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <>
                <Typography variant="h4">Details of Clubs & Societies of SLIIT</Typography>
                <Typography variant="subtitle2" style={{ color: 'red' }}>* The joining fee and join requirement can be changed every year. Please view more details and contact the responsive club member to get details.</Typography>
                <TextField
                    id="outlined-search-2"
                    label="Search by event name"
                    margin="normal"
                    variant="outlined"
                    onChange={({ target: { value } }) => requestSearch(value)}
                />
            </>
            {allClubs.length >= 1 ?
                <>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: '#14A5C5', fontWeight: "bold" }}>
                                    <TableCell style={{ fontWeight: 'bold' }} align="left" bold>CLub name</TableCell>
                                    <TableCell align="center">Details</TableCell>
                                    <TableCell align="center">Suitable for</TableCell>
                                    <TableCell align="center">Fee</TableCell>
                                    <TableCell align="center">More details</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allClubs.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="center">{row.details}</TableCell>
                                        <TableCell align="center">{row.suitable}</TableCell>
                                        <TableCell align="center">{row.fee}</TableCell>
                                        {row.more !== '' ?
                                            <TableCell align="center"><a href={row.more}>Click for more details</a></TableCell>
                                            :
                                            <TableCell align="center">{row.more}</TableCell>

                                        }

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </> : <div><Typography>No Events available by that name</Typography></div>
            }
        </div>
    )
}