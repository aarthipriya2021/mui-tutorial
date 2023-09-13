import React, {useState} from 'react';
import { Box, Typography, Rating } from '@mui/material';


const MuiRating = () => {

  const [value, setValue] = useState(2)
  return (
    <Box mt={4}>
      <Typography>Controlled</Typography>
      <Rating 
        name='controlled_rating'
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  )
}

export default MuiRating;