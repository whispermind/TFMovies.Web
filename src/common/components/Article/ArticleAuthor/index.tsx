import { Stack, Typography } from "@mui/material";

import { Avatar } from "../../Avatar";
import * as Styled from "./styled";

interface IArticleAuthorProps {
	nickname: string;
	created: string;
}
export const ArticleAuthor = ({ nickname, created }: IArticleAuthorProps) => {
	return (
		<Styled.Stack>
			<Avatar sx={{ width: "44px", height: "44px" }}>H</Avatar>
			<Stack direction="column">
				<Typography variant="HBodyBold">{nickname}</Typography>
				<Typography
					variant="HBody"
					color="greyColors.grey"
					textAlign="start"
				>
					{created}
				</Typography>
			</Stack>
		</Styled.Stack>
	);
};
