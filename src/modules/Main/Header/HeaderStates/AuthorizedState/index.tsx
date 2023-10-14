import { useCallback } from "react";
import { Button, Stack } from "@mui/material";
import { enqueueSnackbar } from "notistack";

import { HeaderAccount } from "../../HeaderAccount";
import { useAppSelector, useAppDispatch } from "../../../../../common/hooks";
import { selectAuth, signIn } from "../../../../Authorization/AuthSlice";
import { UserRoles, Routes } from "../../../../../common/enums";
import { snackBarMessages } from "../../../../../common/utils";
import { useRequestAuthorRoleMutation } from "../../../../../app/api/Users";

export const AuthorizedState = () => {
	const dispatch = useAppDispatch();
	const auth = useAppSelector(selectAuth);
	const [requestAuthorRoleReq] = useRequestAuthorRoleMutation();

	const { currentUser } = auth;
	const userRole = currentUser?.role.name;
	const isEditor = currentUser && (userRole === UserRoles.author || userRole === UserRoles.admin);

	const becomeAuthor = useCallback(async () => {
		try {
			await requestAuthorRoleReq().unwrap();
			enqueueSnackbar(snackBarMessages.becomeAuthor, { variant: "success" });
			dispatch(signIn({ ...auth, currentUser: { ...auth.currentUser!, roleChangeRequested: true } }));
		} catch {
			// handled by middleware
		}
	}, [requestAuthorRoleReq, auth, dispatch]);

	return (
		<Stack
			direction="row"
			columnGap={3.5}
			alignItems="center"
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
