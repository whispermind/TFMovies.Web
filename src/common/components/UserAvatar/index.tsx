import { PropsWithChildren } from "react";
import { Stack, Typography, Link } from "@mui/material";

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
			<Link
				href={id ? `/author/${id}` : ""}
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
