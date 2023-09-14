import { useState } from "react";
import { Box, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function MuiRating() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <Box>
      <Box mt={4}>
        <Typography>Controlled</Typography>
        <Rating
          name="controlled_rating"
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue);
          }}
        />

        <Typography>Disabled</Typography>
        <Rating name="Disabled" value={value} disabled />

        <Typography>Read-only</Typography>
        <Rating name="read-only" value={value} read-only />

        <Typography>No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>

      {/* displying the precision value */}
      <Box mt={4}>
        <Typography>Rating Precision</Typography>
        <Rating
          name="controlled_rating"
          precision={0.5}
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

      {/* feedback feature  */}
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

// export default MuiRating;
