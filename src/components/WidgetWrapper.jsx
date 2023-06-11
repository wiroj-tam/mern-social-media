import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";


const WidgetWrapper = styled(Box)(({ theme }) => ({

  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: useSelector((state) => state.colorTheme.background.alt),
  borderRadius: "0.75rem",
}));

export default WidgetWrapper;
