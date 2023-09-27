import { Stack } from "@mui/material";

import { NamedLogo, AdoptiveLayout } from "../../../common/components";
import { UnauthorizedState, AuthorizedState } from "./HeaderStates";
import { HeaderSearchInput } from "./HeaderSearchInput";
import { useAppSelector } from "../../../common/hooks";
import { selectAuth } from "../../Authorization/AuthSlice";
import * as Styled from "./styled";

export const Header = () => {
	const { accessToken } = useAppSelector(selectAuth);

	return (
		<Styled.AppBar position="static">
			<Styled.Toolbar disableGutters>
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
						alignItems="center"
						columnGap={3}
					>
						<HeaderSearchInput />
						{accessToken ? <AuthorizedState /> : <UnauthorizedState />}
					</Stack>
				</AdoptiveLayout>
			</Styled.Toolbar>
		</Styled.AppBar>
	);
};
