import React from 'react';
import { Box, Button } from '@mui/material';

const MuiBox = () => {
  return (
    <>
      <Box
        mt={2}
        mb={4}
        sx={{
          width: 200,
          height: 200,
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "red",
            cursor: "pointer",
          },
        }}
      />

      <Box mt={4} component="span" sx={{p: 2, border: "1px dashed grey"}} >
        <Button>Save</Button>
      </Box>
    </>
  );
}

export default MuiBox


// The Box component serves as a wrapper component for most of the CSS utility needs.