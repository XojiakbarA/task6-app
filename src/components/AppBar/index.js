import {AppBar, Box, Button, CircularProgress, Divider, Stack, TextField, Toolbar} from "@mui/material";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SelectInput from "../Input/SelectInput";
import SliderInput from "../Input/SliderInput";
import CsvDownload from "react-csv-downloader";

const MyAppBar = ({
    localeValue, errorValue, seedValue, locales, rows,
    onLocaleChange, onErrorChange, onSeedChange, onRandomClick
}) => {

    return (
        <AppBar color={"inherit"}>
            <Toolbar>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    <Box width={150}>
                        {
                            !locales?.length
                            ?
                            <CircularProgress size={25}/>
                            :
                            <SelectInput
                                value={localeValue}
                                values={locales}
                                onChange={onLocaleChange}
                            />
                        }
                    </Box>
                    <Divider flexItem orientation={"vertical"}/>
                    <Box width={150}>
                        <TextField
                            fullWidth
                            label={"Error Count"}
                            size={"small"}
                            type={"number"}
                            value={errorValue}
                            onChange={onErrorChange}
                            inputProps={{ step: 0.5 }}
                        />
                    </Box>
                    <Box width={300}>
                        <SliderInput
                            value={Number(errorValue)}
                            onChange={onErrorChange}
                        />
                    </Box>
                    <Divider flexItem orientation={"vertical"}/>
                    <Box width={150}>
                        <TextField
                            fullWidth
                            label={"Seed"}
                            size={"small"}
                            type={"number"}
                            value={seedValue}
                            onChange={onSeedChange}
                        />
                    </Box>
                    <Button
                        onClick={onRandomClick}
                        startIcon={<ShuffleIcon/>}
                    >
                        Random
                    </Button>
                    <CsvDownload filename={"Users"} datas={rows}>
                        <Button
                            startIcon={<FileDownloadIcon/>}
                        >
                            Export to CSV
                        </Button>
                    </CsvDownload>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar