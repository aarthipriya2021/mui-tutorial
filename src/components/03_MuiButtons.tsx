// Buttons allow users to take actions, and make choices, with a single tap.
// The Button comes with three variants: text (default), contained, and outlined.


import { Stack, Button, ButtonGroup, ToggleButtonGroup,ToggleButton  } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';


const MuiButtons = () => {
  return (
    <div>
        <Stack spacing={2} marginTop={4} direction={"row"}>
            <Button variant="text" href="https://google.com">
            Text
            </Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} marginTop={4} direction={"row"}>
            <Button variant="contained" color="primary">
            primary
            </Button>
            <Button variant="contained" color="secondary">
            secondary
            </Button>
            <Button variant="contained" color="info">
            info
            </Button>
            <Button variant="contained" color="success">
            success
            </Button>
            <Button variant="contained" color="warning">
            warning
            </Button>
            <Button variant="contained" color="error">
            error
            </Button>
        </Stack>
        {/* display:"block " is important to mention for button size. */}
        <Stack display="block" spacing={2} marginTop={4} direction={"row"}>
            <Button variant="contained" size="small">
            small
            </Button>
            <Button variant="contained" size="medium">
            medium
            </Button>
            <Button variant="contained" size="large">
            large
            </Button>
        </Stack>
        <Stack spacing={2} marginTop={4} direction={"row"}>
            <Button
            variant="contained"
            startIcon={<SendIcon />}
            onClick={() => alert("clicked!")}
            >
            send
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
            send
            </Button>
        </Stack>
        <Stack spacing={2} marginTop={4} direction={"row"}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" aria-label="text button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Stack>
        <Stack spacing={2} marginTop={4} direction={"row"}>
            <ToggleButtonGroup aria-label="text format">
                <ToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                    <FormatUnderlinedIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                    <FormatItalicIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </div>
  );
};

export default MuiButtons;
