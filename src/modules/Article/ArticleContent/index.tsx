import { Typography, Link, ListItem } from "@mui/material";
import { sanitize } from "dompurify";

import { IArticleResponseData } from "../api";
import * as Styled from "./styled";

export const ArticleContent = ({ tags, coverImageUrl, title, theme, htmlContent }: Partial<IArticleResponseData>) => {
	const sanitazedHtml = sanitize(htmlContent || "");
	const uniqTags = new Set(tags);

	const tagItems = Array.from(uniqTags).map(({ id, name }) => (
		<ListItem key={id}>
			<Link
				href={`/search?subject=tags&query=${name}&id=${id}`}
				underline="none"
			>
				<Typography
					variant="HBody"
					color="greyColors.grey"
				>{`#${name}`}</Typography>
			</Link>
		</ListItem>
	));

	return (
		<Styled.ArticleContentWrapper>
			<img
				src={coverImageUrl}
				alt="cover"
			/>
			<Styled.Stack>
				<div>
					<Typography variant="HHeader">{title}</Typography>
					<Styled.ArticleTagsList>{tagItems}</Styled.ArticleTagsList>
					<Typography variant="HBodyBold">{`Subject: ${theme}`}</Typography>
				</div>
				<div dangerouslySetInnerHTML={{ __html: sanitazedHtml }} />
			</Styled.Stack>
		</Styled.ArticleContentWrapper>
	);
};
