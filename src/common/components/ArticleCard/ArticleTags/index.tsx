import { Link, ListItem } from "@mui/material";
import * as Styled from "./styled";

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
				href={`/search?subject=tags&query=${tag}`}
			>
				{`#${tag}`}
			</Link>
		</ListItem>
	));

	return <Styled.TagsList disablePadding>{listItems}</Styled.TagsList>;
};