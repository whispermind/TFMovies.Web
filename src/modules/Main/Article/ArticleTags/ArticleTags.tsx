import { Link, ListItem } from "@mui/material";
import * as S from "./styled";

interface IArticleTagsProps {
	tags: string[];
}

export const ArticleTags = ({ tags }: IArticleTagsProps) => {
	const listItems = tags.map((tag) => (
		<ListItem
			disablePadding
			key={tag}
		>
			<Link
				underline="none"
				variant="HBody"
				color="greyColors.grey"
				href="/"
			>
				{tag}
			</Link>
		</ListItem>
	));

	return <S.TagsList disablePadding>{listItems}</S.TagsList>;
};
