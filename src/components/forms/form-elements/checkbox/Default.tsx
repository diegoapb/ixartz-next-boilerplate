import React from 'react';
import { Box } from '@mui/material';
import CustomCheckbox from "../../theme-elements/CustomCheckbox";

const DefaultCheckbox = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: any) => {
        setChecked(event.target.checked);
    };
    
    return (
        <Box textAlign="center">
            <CustomCheckbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />

            <CustomCheckbox
                disabled
                checked
                inputProps={{ 'aria-label': 'disabled checked checkbox' }}
            />
            <CustomCheckbox
                defaultChecked
                indeterminate
                inputProps={{ 'aria-label': 'indeterminate checkbox' }}
            />
            <CustomCheckbox
                defaultChecked
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
        </Box>
    );
};

export default DefaultCheckbox;
