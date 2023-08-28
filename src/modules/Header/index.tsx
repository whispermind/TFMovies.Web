import { NamedLogo, CloseButton, AdoptiveLayout } from "../../common/components";
import * as S from "./styled";

export const Header = () => {
  return (
    <S.AppBar position="static">
      <S.Toolbar disableGutters>
        <AdoptiveLayout
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <NamedLogo color="mainColors.black" />
          <CloseButton />
        </AdoptiveLayout>
      </S.Toolbar>
    </S.AppBar>
  );
};
