import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f" 
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j" 
`;

const gridTemplateSmallScreens = ``;

const Dashboard = () => {
  const { palette } = useTheme();

  const aboveMedium = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplateLargeScreens,
      }}
    >
      <Box gridArea="a" bgcolor={"#fff"}>
        Dashboard
      </Box>
    </Box>
  );
};

export default Dashboard;
