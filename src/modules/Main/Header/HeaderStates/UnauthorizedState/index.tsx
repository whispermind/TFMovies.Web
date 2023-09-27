import { Button, Stack } from "@mui/material";

import { Routes } from "../../../../../common/enums";

export const UnauthorizedState = () => {
	return (
		<Stack
			direction="row"
			columnGap={1.5}
		>
			<Button
				variant="ghost"
				sx={{ width: "200px" }}
				href={Routes.signIn}
			>
				Log In
			</Button>
			<Button
				variant="customOutlined"
				sx={{ width: "200px" }}
				href={Routes.signUp}
			>
				Sign Up
			</Button>
		</Stack>
	);
};
