import { row } from "./Events.types";
import { Table, TableHead, TableBody, TableCell, TableRow, TableContainer, Paper, Typography, TextField } from "@material-ui/core";
import { useState } from "react";

export const Events = () => {
    const [allEvents, setAllEvents] = useState(row);

    const requestSearch = (searchVal) => {
        const filterRows = row.filter((row) => {
            return row.name.toLowerCase().includes(searchVal.toLowerCase());
        })
        filterRows && setAllEvents(filterRows);
    }

    return (
        <div style={{ paddingRight: '20px', paddingLeft: '20px', paddingBottom: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <>
                <Typography variant="h4">Details of Events happen is SLIIT</Typography>
                <Typography variant="subtitle2" style={{ color: 'red' }}>* These are the common events that happen in SLIIT annually. Because of the current country situation most of the events have been postponed until further notice.</Typography>
                <TextField
                    id="outlined-search-2"
                    label="Search by event name"
                    margin="normal"
                    variant="outlined"
                    onChange={({ target: { value } }) => requestSearch(value)}
                />
            </>
            {allEvents.length >= 1 ?
                <>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: '#14A5C5', fontWeight: "bold" }}>
                                    <TableCell style={{ fontWeight: 'bold' }} align="left" bold>Event name</TableCell>
                                    <TableCell align="center">Event month</TableCell>
                                    <TableCell align="center">Details</TableCell>
                                    <TableCell align="center">More details</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allEvents.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="center">{row.time}</TableCell>
                                        <TableCell align="center">{row.details}</TableCell>
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