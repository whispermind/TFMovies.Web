import { Button, styled } from "@mui/material";

export const StyledSignUpButton = styled(Button)(({ theme: { palette: { mainColors: { graphite, black, white } } } }) => ({
  height: "2.75rem",
  padding: "0 0.75rem",
  columnGap: "1.375rem",
  fontSize: "0.9375rem",
  textTransform: "none",
  backgroundColor: `${graphite}`,
  ":hover": {
    backgroundColor: `${black}`
  },
  "& path": {
    fill: `${white}`
  },
}))