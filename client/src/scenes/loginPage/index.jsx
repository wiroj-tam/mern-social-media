import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  {/* Color */}
  const neutralMedium = useSelector((state) => state.colorTheme.neutral.medium);
  const backgroundAlt = useSelector((state) => state.colorTheme.background.Alt);
  const primaryLight = useSelector((state) => state.colorTheme.primary.light);
  const primaryMain = useSelector((state) => state.colorTheme.primary.main);
  
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={backgroundAlt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color={primaryMain}>
          Sociopedia
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={backgroundAlt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
