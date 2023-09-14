// Checkboxes allow the user to select one or more items from a set.
// Checkboxes can be used to turn an option on or off.
// If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.



import { Box, FormControlLabel, Checkbox } from '@mui/material';
import React,{ useState} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

const MuiCheckBox = () => {

    const [acceptTnc, setAcceptTnc] = useState(false)
    console.log({acceptTnc});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnc(event.target.checked)
    }
    

  return (
    <Box>
        <Box>
            <FormControlLabel
                label="I accept  terms and conditions."
                control={<Checkbox checked={acceptTnc} onChange={handleChange} />} />
        </Box>
        <Box>
            <Checkbox
                icon={<BookmarkBorderIcon /> }
                checkedIcon={<BookmarkOutlinedIcon />}
                checked={acceptTnc}
                onChange={handleChange}
                />
        </Box>
    </Box>    
            )
}

export default MuiCheckBox;