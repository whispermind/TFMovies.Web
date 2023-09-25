import { Link, ListItem } from "@mui/material";
import * as Styled from "./styled";

import type { ITag } from "..";

interface IArticleTagsProps {
	tags: ITag[];
}

export const ArticleTags = ({ tags }: IArticleTagsProps) => {
	const listItems = tags.map(({ id, name }) => (
		<ListItem
			disablePadding
			key={id}
		>
			<Link
				variant="HBody"
				color="greyColors.grey"
				href={`/search?subject=tags&query=${name}&id=${id}`}
			>
				{`#${name}`}
			</Link>
		</ListItem>
	));

	return <Styled.TagsList disablePadding>{listItems}</Styled.TagsList>;
};
