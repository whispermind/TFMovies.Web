import { Typography, Link, ListItem } from "@mui/material";
import { sanitize } from "dompurify";

import { IArticle } from "../api";
import * as Styled from "./styled";

export const CardContent = ({ tags, coverImageUrl, title, theme, htmlContent }: Partial<IArticle>) => {
	const sanitazedHtml = sanitize(htmlContent || "");

	const uniqTags = new Set(tags);
	const tagItems = Array.from(uniqTags).map((tag) => (
		<ListItem key={tag}>
			<Link
				href={`/search?subject=tags&query=${tag}`}
				underline="none"
			>
				<Typography
					variant="HBody"
					color="greyColors.grey"
				>{`#${tag}`}</Typography>
			</Link>
		</ListItem>
	));

	return (
		<Styled.CardContentWrapper>
			<img
				src={coverImageUrl}
				alt="cover"
			/>
			<Styled.Stack>
				<div>
					<Typography variant="HHeader">{title}</Typography>
					<Styled.TagsList>{tagItems}</Styled.TagsList>
					<Typography variant="HBodyBold">{`Subject: ${theme}`}</Typography>
				</div>
				<div dangerouslySetInnerHTML={{ __html: sanitazedHtml }} />
			</Styled.Stack>
		</Styled.CardContentWrapper>
	);
};
