import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const MyTable = ({ rows, handleNext }) => {

    return (
        <Paper>
            <InfiniteScroll
                next={handleNext}
                hasMore={true}
                dataLength={rows.length}
                loader={<Loader/>}
            >
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow selected>
                            <TableCell width={50}>No</TableCell>
                            <TableCell width={100}>ID</TableCell>
                            <TableCell width={150} align="right">Name</TableCell>
                            <TableCell width={300} align="right">Address</TableCell>
                            <TableCell width={150} align="right">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row, i) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{i+1}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.address}</TableCell>
                                    <TableCell align="right">{row.phone}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            </InfiniteScroll>
        </Paper>
    )
}

export default MyTable