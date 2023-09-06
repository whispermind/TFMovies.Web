import { useState, MouseEvent, useCallback } from "react";
import { Stack, MenuItem, ListItemIcon, IconButton, Tooltip } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";

import { selectAuth, signOut } from "../../Authorization/AuthSlice";
import { useAppSelector, useSignOut, useAppDispatch } from "../../../common/hooks";
import { Avatar } from "../../../common/components";
import { HeaderUserInfo } from "../HeaderUserInfo";
import { snackBarMessages, isApiError } from "../../../common/utils";
import * as S from "./styled";

export const HeaderAccount = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [signOutReq] = useSignOut();
	const { currentUser, refreshToken, accessToken } = useAppSelector(selectAuth);
	const dispatch = useAppDispatch();

	const open = Boolean(anchorEl);

	const handleClick = useCallback(
		(event: MouseEvent<HTMLElement>) => {
			setAnchorEl(event.currentTarget);
		},
		[setAnchorEl]
	);

	const handleClose = useCallback(() => {
		setAnchorEl(null);
	}, [setAnchorEl]);

	const onSignOut = useCallback(async () => {
		handleClose();
		try {
			await signOutReq({ refreshToken, accessToken }).unwrap();
			dispatch(signOut());
			enqueueSnackbar(snackBarMessages.signOut, { variant: "success" });
		} catch (e) {
			if (isApiError(e)) {
				enqueueSnackbar(e.data.errorMessage, { variant: "error" });
			}
		}
	}, [accessToken, refreshToken, signOutReq, handleClose, dispatch]);

	return (
		<>
			<Stack
				direction="row"
				columnGap={1.5}
				alignItems="center"
			>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ p: 0 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
					>
						<Avatar sx={{ width: "44px", height: "44px" }}>{currentUser?.nickname[0]}</Avatar>
					</IconButton>
				</Tooltip>
				{currentUser && (
					<HeaderUserInfo
						username={currentUser.nickname}
						access={currentUser.role}
					/>
				)}
			</Stack>
			<S.Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem onClick={onSignOut}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Exit
				</MenuItem>
			</S.Menu>
		</>
	);
};