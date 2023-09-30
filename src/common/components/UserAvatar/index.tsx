import { PropsWithChildren } from "react";
import { Stack, Typography } from "@mui/material";

import { AppLink } from "../AppLink";
import { Routes } from "../../enums";
import * as Styled from "./styled";

interface IUserAvatarProps extends PropsWithChildren {
	nickname: string;
	id?: string;
	size: number;
	nicknameStyle: "Section" | "HBodyBold";
}

export const UserAvatar = ({ nickname, size, id, nicknameStyle, children }: IUserAvatarProps) => {
	return (
		<Styled.Stack>
			<AppLink
				href={id ? `${Routes.author}/${id}` : ""}
				sx={{ cursor: id ? "pointer" : "default" }}
				authorized
			>
				<Styled.Avatar sx={{ width: `${size}px`, height: `${size}px` }}>{nickname[0]}</Styled.Avatar>
			</AppLink>
			<Stack direction="column">
				<Typography variant={nicknameStyle}>{nickname}</Typography>
				{children}
			</Stack>
		</Styled.Stack>
	);
};
