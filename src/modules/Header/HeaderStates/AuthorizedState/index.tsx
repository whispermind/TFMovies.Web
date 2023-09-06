import { Button, Stack } from "@mui/material";

import { HeaderAvatar } from "../../HeaderAvatar";

export const AuthorizedState = () => {
	return (
		<Stack
			direction="row"
			columnGap={3.5}
		>
			<Button
				variant="customOutlined"
				sx={{ width: "240px" }}
				href="/createpost"
				autoCapitalize="false"
			>
				Create a post
			</Button>
			<HeaderAvatar
				username="Mocked"
				access="Mocked"
			/>
		</Stack>
	);
};
