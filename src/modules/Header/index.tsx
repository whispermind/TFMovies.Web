import { Stack } from "@mui/material";

import { NamedLogo, AdoptiveLayout } from "../../common/components";
import { UnauthorizedState, AuthorizedState } from "./states";
import { HeaderSearchInput } from "./HeaderSearchInput";
import * as S from "./styled";

export const Header = () => {
  return (
    <S.AppBar position="static">
      <S.Toolbar disableGutters>
        <AdoptiveLayout
          direction="row"
          alignItems="center"
          columnGap={7.5}
        >
          <NamedLogo color="mainColors.black" />
          <Stack
            flexGrow="1"
            direction="row"
            justifyContent="space-between"
            columnGap={3}
          >
            <HeaderSearchInput />
            <UnauthorizedState />
          </Stack>
        </AdoptiveLayout>
      </S.Toolbar>
    </S.AppBar>
  );
};
