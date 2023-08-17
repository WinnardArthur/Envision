import { Box, useTheme } from "@mui/material";
import { PuffLoader } from "react-spinners";

type LoaderTypes = {
  size?: number;
};

const Loader = (props: LoaderTypes) => {
  const { palette } = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="75%"
      width="100%"
    >
      <PuffLoader
        size={props.size ? props.size : 100}
        color={palette.primary[500]}
      />
    </Box>
  );
};

export default Loader;
