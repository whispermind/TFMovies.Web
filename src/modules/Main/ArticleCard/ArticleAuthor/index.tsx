import { Stack, Typography, Link } from "@mui/material";

import { Avatar } from "../../../../common/components/Avatar";
import * as Styled from "./styled";

interface IArticleAuthorProps {
	nickname: string;
	created: string;
	id: string;
}
export const ArticleAuthor = ({ nickname, created, id }: IArticleAuthorProps) => {
	return (
		<Styled.Stack>
			<Link
				href={`/author/${id}`}
				underline="none"
			>
				<Avatar sx={{ width: "44px", height: "44px" }}>H</Avatar>
			</Link>
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
