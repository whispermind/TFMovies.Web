import { useMemo } from "react";
import { Typography, Link, ListItem } from "@mui/material";
import { sanitize } from "dompurify";

import { IGetArticleResponseData } from "../api";
import { Routes } from "../../../common/enums";
import * as Styled from "./styled";

type TArticleContentProps = Partial<Pick<IGetArticleResponseData, "tags" | "coverImageUrl" | "title" | "theme" | "htmlContent">>;

export const ArticleContent = (props: TArticleContentProps) => {
	const { tags = [], coverImageUrl = "", title = "", theme = { name: "", id: "" }, htmlContent = "" } = props;
	const sanitazedHtml = sanitize(htmlContent);

	const tagItems = useMemo(
		() =>
			Array.from(tags).map(({ id, name }) => (
				<ListItem key={id}>
					<Link
						href={`${Routes.search}?subject=tags&query=${name}&id=${id}`}
						underline="none"
					>
						<Typography
							variant="HBody"
							color="greyColors.grey"
						>{`#${name}`}</Typography>
					</Link>
				</ListItem>
			)),
		[tags]
	);

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
					<Typography variant="HBodyBold">{`Subject: ${theme.name}`}</Typography>
				</div>
				<div dangerouslySetInnerHTML={{ __html: sanitazedHtml }} />
			</Styled.Stack>
		</Styled.ArticleContentWrapper>
	);
};
