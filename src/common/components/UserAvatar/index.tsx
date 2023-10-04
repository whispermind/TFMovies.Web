/* eslint-disable jsx-a11y/anchor-is-valid */
import { PropsWithChildren, useCallback, MouseEvent } from "react";
import { Stack, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Routes } from "../../enums";
import * as Styled from "./styled";

interface IUserAvatarProps extends PropsWithChildren {
	nickname: string;
	id?: string;
	size: number;
	nicknameStyle: "Section" | "HBodyBold";
}

export const UserAvatar = ({ nickname, size, id, nicknameStyle, children }: IUserAvatarProps) => {
	const navigate = useNavigate();

	const onRedirect = useCallback(
		(e: MouseEvent<HTMLElement>) => {
			e.preventDefault();
			if (id) {
				navigate(`${Routes.author}/${id}`);
			}
		},
		[id, navigate]
	);

	return (
		<Styled.Stack>
			<Link
				onClick={onRedirect}
				sx={{ cursor: id ? "pointer" : "default" }}
			>
				<Styled.Avatar sx={{ width: `${size}px`, height: `${size}px` }}>{nickname[0]}</Styled.Avatar>
			</Link>
			<Stack direction="column">
				<Typography variant={nicknameStyle}>{nickname}</Typography>
				{children}
			</Stack>
		</Styled.Stack>
	);
};
