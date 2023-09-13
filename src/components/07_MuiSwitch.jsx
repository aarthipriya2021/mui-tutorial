import {
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Switch,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [state, setState] = useState({
    gilad: false,
    jason: false,
    antoine: true,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.gilad}
                onChange={handleChange}
                name="gilad"
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.jason}
                onChange={handleChange}
                name="jason"
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  );
};

export default MuiSwitch;


//   Basic Switch component

//  <FormGroup>
//       <FormControlLabel 
//         control={<Switch defaultChecked size='small' />} label="Label"
//       />

//       <FormControlLabel required
//         control={<Switch />} label="required"
//       />

//       <FormControlLabel disabled
//         control={<Switch size='large' />} label="disabled"
//       />
//     </FormGroup> 