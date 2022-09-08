import {Box, CircularProgress} from "@mui/material";

const Loader = () => {

    return (
        <Box display={"flex"} justifyContent={"center"} p={1}>
            <CircularProgress/>
        </Box>
    )
}

export default Loader