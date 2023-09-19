import { Button, Stack } from "@mui/material";

import { HeaderAccount } from "../../HeaderAccount";
import { useAppSelector } from "../../../../common/hooks";
import { selectAuth } from "../../../Authorization/AuthSlice";

export const AuthorizedState = () => {
	const { currentUser } = useAppSelector(selectAuth);

	const isEditor = currentUser && (currentUser.role === "Author" || currentUser.role === "Admin");
	return (
		<Stack
			direction="row"
			columnGap={3.5}
		>
			{isEditor && (
				<Button
					variant="customOutlined"
					sx={{ width: "240px" }}
					href="/createarticle"
					autoCapitalize="false"
				>
					Create a post
				</Button>
			)}
			<HeaderAccount />
		</Stack>
	);
};
