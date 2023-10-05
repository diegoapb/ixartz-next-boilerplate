import React from 'react';
import { Box, Switch } from '@mui/material';


const SizesSwitch = () => (
    <Box textAlign="center">
        <Switch defaultChecked size="small" />
        <Switch defaultChecked />
    </Box>
);
export default SizesSwitch;
