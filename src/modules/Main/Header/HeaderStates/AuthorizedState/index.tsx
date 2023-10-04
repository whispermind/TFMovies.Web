import { useCallback } from "react";
import { Button, Stack } from "@mui/material";
import { enqueueSnackbar } from "notistack";

import { HeaderAccount } from "../../HeaderAccount";
import { useAppSelector } from "../../../../../common/hooks";
import { selectAuth } from "../../../../Authorization/AuthSlice";
import { UserRoles, Routes } from "../../../../../common/enums";
import { snackBarMessages } from "../../../../../common/utils";
import { useRequestAuthorRoleMutation } from "../../api";

export const AuthorizedState = () => {
	const auth = useAppSelector(selectAuth);
	const { currentUser } = auth;
	const [requestAuthorRoleReq] = useRequestAuthorRoleMutation();
	const userRole = currentUser?.role.name;
	const isEditor = currentUser && (userRole === UserRoles.author || userRole === UserRoles.admin);

	const becomeAuthor = useCallback(async () => {
		try {
			await requestAuthorRoleReq();
			enqueueSnackbar(snackBarMessages.becomeAuthor, { variant: "success" });
		} catch {
			// handled by middleware
		}
	}, [requestAuthorRoleReq]);

	return (
		<Stack
			direction="row"
			columnGap={3.5}
		>
			{isEditor ? (
				<Button
					variant="customOutlined"
					sx={{ width: "240px" }}
					href={Routes.createArticle}
					autoCapitalize="false"
				>
					Create a post
				</Button>
			) : (
				<Button
					variant="customOutlined"
					sx={{ width: "240px" }}
					autoCapitalize="false"
					onClick={becomeAuthor}
					disabled={currentUser?.roleChangeRequested}
				>
					Become an author
				</Button>
			)}
			<HeaderAccount />
		</Stack>
	);
};
