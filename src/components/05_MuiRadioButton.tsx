// The Radio Group allows the user to select one option from a set.
// Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a Select component because it uses less space.


import React from 'react';
import { FormControl,FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';

const MuiRadioButton = () => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  )
}

export default MuiRadioButton