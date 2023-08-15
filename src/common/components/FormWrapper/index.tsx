import { styled, Box } from "@mui/material";

export const FormWrapper = styled(Box)(({ theme }) => {
  const { palette: {
    mainColors: { white },
    greyColors: { strokeGrey }
  } } = theme;
  
  return {
    backgroundColor: white,
    padding: "3.25rem 8.75rem",
    border: `2px solid ${strokeGrey}`
  }
})