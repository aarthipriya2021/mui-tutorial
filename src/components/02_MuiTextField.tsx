import { InputAdornment, Stack, TextField } from '@mui/material'
import {useState} from 'react';

const MuiTextField = () => {

    const [value, setValue] = useState("");

  return (
    <Stack spacing={4} marginTop={4}>
        <Stack direction="row" spacing={4} >
            <TextField label="outlined" variant='outlined' color="primary"/>
            <TextField label="filled" variant='filled' color="secondary" />
            <TextField label="standard" variant='standard' color="success" />
        </Stack>


        <Stack direction="row" spacing={4} >
            <TextField label="Form Input" variant='outlined' color="info" required/>
            <TextField 
                label="Password" 
                type='password'
                variant='filled' 
                color="warning" 
                helperText="Do not share your password with anyone."/>
            <TextField 
                label="Password" 
                type='password'
                variant='filled' 
                color="warning" 
                disabled
                helperText="Do not share your password with anyone."/>
        </Stack>
        
        <Stack direction="row" spacing={4} >
            <TextField 
                label="Amount" 
                InputProps={{
                    startAdornment:<InputAdornment position='start'>$</InputAdornment>
                }}
                />
            <TextField 
                label="Weight" 
                InputProps={{
                    endAdornment:<InputAdornment position='end'>Kg</InputAdornment>
                }} 
                />
        </Stack>

        <Stack direction="row" spacing={4} >
            <TextField 
                label="Password" 
                variant='outlined'
                onChange={e => setValue(e.target.value)}
                error={!value}
                helperText={!value ? "Required" : "Do not share your password to anyone."}
                />
        </Stack>


        <Stack direction="row" spacing={4}> 
            <TextField 
                    label="multiline" 
                    variant='outlined'
                    multiline
                    rows={6}
                    />
        </Stack>
    </Stack>
  )
}

export default MuiTextField