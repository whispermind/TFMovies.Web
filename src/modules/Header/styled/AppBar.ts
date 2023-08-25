import { styled, AppBar as _AppBar } from "@mui/material";

export const AppBar = styled(_AppBar)(
  ({
    theme: {
      palette: {
        mainColors: { white }
      }
    }
  }) => ({ "&.MuiAppBar-root": { backgroundColor: white } })
);
