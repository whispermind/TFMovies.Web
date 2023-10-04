import { Typography } from "@mui/material";

import { UserAvatar } from "../../../common/components";
import * as Styled from "./styled";

import type { IUser } from "../../Authorization/AuthSlice";

export const UserCard = ({ nickname, role, id }: Pick<IUser, "nickname" | "role" | "id">) => {
	return (
		<Styled.CardWrapper>
			<UserAvatar
				nickname={nickname}
				nicknameStyle="Section"
				size={72}
				id={id}
			/>
			<Styled.UserRoleWrapper>
				{" "}
				<Typography
					variant="HBody"
					color="greyColors.grey"
				>{`${role.name}`}</Typography>
			</Styled.UserRoleWrapper>
		</Styled.CardWrapper>
	);
};
