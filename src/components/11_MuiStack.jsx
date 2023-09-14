// Stack is a container component for arranging elements vertically or horizontally.
// The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child.
// Stack is ideal for one-dimensional layouts, while Grid is preferable when you need both vertical and horizontal arrangement.

import { Stack, Paper, Box, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#abc",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const MuiStack = () => {
  return (
    <Stack>
      <Box sx={{ width: "100%" }} mt={4}>
        <Stack spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box sx={{ width: "100%" }} mt={4}>
        <Stack
            direction="row" 
            spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box sx={{ width: "100%" }} mt={4}>
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MuiStack;
