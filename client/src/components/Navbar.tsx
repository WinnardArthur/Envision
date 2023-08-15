import { useState } from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="1rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween
        component={Link}
        to="/"
        gap="0.5rem"
        sx={{ textDecoration: "none" }}
      >
        <PixIcon sx={{ fontSize: "28px", color: "white" }} />
        <Typography variant="h4" fontSize="16px">
          Finalytics
        </Typography>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
        <Box></Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
