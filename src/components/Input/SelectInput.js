import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectInput = ({ value, values, onChange }) => {

    return (
        <FormControl fullWidth size={"small"}>
            <InputLabel id="demo-simple-select-label">Region</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={"Region"}
                onChange={onChange}
                size={"small"}
            >
                {
                    values.map(v => (
                        <MenuItem key={v} value={v}>{v}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default SelectInput