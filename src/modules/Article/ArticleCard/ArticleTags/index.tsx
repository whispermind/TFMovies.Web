import { useMemo } from "react";
import { Link, ListItem } from "@mui/material";

import { Routes } from "../../../../common/enums";
import * as Styled from "./styled";

import type { ITag } from "..";

interface IArticleTagsProps {
	tags: ITag[];
}

export const ArticleTags = ({ tags }: IArticleTagsProps) => {
	const listItems = useMemo(
		() =>
			tags.map(({ id, name }) => (
				<ListItem
					disablePadding
					key={id}
					sx={{ width: "auto" }}
				>
					<Link
						variant="HBody"
						color="greyColors.grey"
						href={`${Routes.search}?subject=tags&query=${name}&id=${id}`}
					>
						{`#${name}`}
					</Link>
				</ListItem>
			)),
		[tags]
	);

	return <Styled.TagsList disablePadding>{listItems}</Styled.TagsList>;
};
