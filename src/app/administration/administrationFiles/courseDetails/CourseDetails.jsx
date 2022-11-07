import { Table, TableHead, TableBody, TableCell, TableRow, TableContainer, Paper, Typography, TextField } from "@material-ui/core";
import { useState } from "react";
import { all } from './CourseDetails.types';

export const CourseDetails = () => {
    const [allCourses, setAllCourses] = useState(all);

    const requestSearch = (searchVal) => {
        const filterRows = all.filter((row) => {
            return row.name.toLowerCase().includes(searchVal.toLowerCase());
        })
        filterRows && setAllCourses(filterRows);
    }

    const requestFacultySearch = (searchVal1) => {
        const filteredRows = all.filter((row) => {
            return row.faculty.toLowerCase().includes(searchVal1.toLowerCase());
        })
        filteredRows && setAllCourses(filteredRows);
    }

    return (
        <div style={{ paddingRight: '20px', paddingLeft: '20px', paddingBottom: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <>
                <Typography variant="h4">Details of Bachelors & Masters Courses provided by SLIIT</Typography>
                <Typography variant="subtitle2" style={{ color: 'red' }}>* All the courses available in SLIIT are given below with necessary details. To see the details about Masters degree, please go to the end of the page.</Typography>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <TextField
                        id="outlined-search"
                        label="Search by course name"
                        margin="normal"
                        variant="outlined"
                        onChange={({ target: { value } }) => requestSearch(value)}
                    />
                    <TextField
                        id="outlined-search-1"
                        label="Search by faculty name"
                        margin="normal"
                        variant="outlined"
                        onChange={({ target: { value } }) => requestFacultySearch(value)}
                    />
                </div>
            </>
            {allCourses.length >= 1 ?
                <>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: '#14A5C5', fontWeight: "bold" }}>
                                    <TableCell style={{ fontWeight: 'bold' }} align="left" bold>Course name</TableCell>
                                    <TableCell align="center">Total semesters</TableCell>
                                    <TableCell align="center">Duration pre semester</TableCell>
                                    <TableCell align="center">Eligibility criteria</TableCell>
                                    <TableCell align="center">Payment per semester (2022)</TableCell>
                                    <TableCell align="center">Enroll period</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allCourses.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="center">{row.semester}</TableCell>
                                        <TableCell align="center">{row.fee}</TableCell>
                                        <TableCell align="center">{row.eligibility}</TableCell>
                                        <TableCell align="center">{row.payment}</TableCell>
                                        <TableCell align="center">{row.enroll}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </> : <div><Typography>No Course or Faculty available by that name</Typography></div>
            }
        </div>
    )
}