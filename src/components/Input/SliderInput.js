import {Slider} from "@mui/material";

const SliderInput = ({ value, onChange }) => {

    return (
        <Slider
            aria-label={"Error"}
            valueLabelDisplay="auto"
            marks
            defaultValue={0}
            step={0.5}
            min={0}
            max={10}
            componentsProps={{ valueLabel: { open: false } }}
            onChange={onChange}
            value={value}
        />
    )
}

export default SliderInput