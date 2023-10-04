import { useMemo } from "react";
import { Typography, ListItem } from "@mui/material";
import { sanitize } from "dompurify";

import { Routes } from "../../../common/enums";
import { AppLink } from "../../../common/components";
import * as Styled from "./styled";

import type { IGetArticleResponseData } from "../../../app/api/Articles";

type TArticleContentProps = Partial<Pick<IGetArticleResponseData, "tags" | "coverImageUrl" | "title" | "theme" | "htmlContent">>;

export const ArticleContent = (props: TArticleContentProps) => {
	const { tags = [], coverImageUrl = "", title = "", theme = { name: "", id: "" }, htmlContent = "" } = props;
	const sanitazedHtml = sanitize(htmlContent);

	const tagItems = useMemo(
		() =>
			Array.from(tags).map(({ id, name }) => (
				<ListItem key={id}>
					<AppLink
						href={`${Routes.search}?subject=tags&query=${name}&id=${id}`}
						underline="none"
						authorized
					>
						<Typography
							variant="HBody"
							color="greyColors.grey"
						>{`#${name}`}</Typography>
					</AppLink>
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
