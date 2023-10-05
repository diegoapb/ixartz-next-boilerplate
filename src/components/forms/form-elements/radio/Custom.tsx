import React from 'react';
import { Box } from '@mui/material';

import CustomRadio from '../../theme-elements/CustomRadio';

const CustomExRadio = () => {
  // 2
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <Box textAlign="center">
      <CustomRadio
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

      <CustomRadio disabled inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
      <CustomRadio
        checked={!checked}
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </Box>
  );
};

export default CustomExRadio;
