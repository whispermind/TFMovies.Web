import { AppBar, Toolbar } from "@mui/material";

import { NamedLogo, CloseButton, AdoptiveLayout } from "../../common/components";

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff" }}
    >
      <Toolbar disableGutters>
        <AdoptiveLayout
          direction="row"
          justifyContent="space-between"
        >
          <NamedLogo color="mainColors.black" />
          <CloseButton />
        </AdoptiveLayout>
      </Toolbar>
    </AppBar>
  );
};
