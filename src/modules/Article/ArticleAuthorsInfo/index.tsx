import { useMemo } from "react";
import { Typography, Stack } from "@mui/material";

import { UserAvatar, AppLink } from "../../../common/components";
import { ArticleTags } from "../ArticleCard/ArticleTags";
import { Routes } from "../../../common/enums";
import * as Styled from "./styled";

import type { PostByAuthor } from "../../../app/api/Articles";

interface IArticleAuthorsInfoProps {
	createdAt: string;
	nickname: string;
	id: string;
	postsByAuthor: PostByAuthor[];
}

export const ArticleAuthorsInfo = ({ id: authorId, createdAt, nickname, postsByAuthor }: IArticleAuthorsInfoProps) => {
	const otherArticles = useMemo(
		() =>
			postsByAuthor.map(({ title, tags, id: articleId }) => (
				<Styled.ArticleData key={articleId}>
					<AppLink
						href={`${Routes.article}/${articleId}`}
						authorized
					>
						<Typography variant="SectionLink">{title}</Typography>
					</AppLink>
					<ArticleTags tags={tags} />
				</Styled.ArticleData>
			)),
		[postsByAuthor]
	);

	return (
		<Styled.Wrapper>
			<Styled.AuthorDataWrapper>
				<UserAvatar
					size={72}
					id={authorId}
					nickname={nickname}
					nicknameStyle="Section"
				/>
				<Typography
					variant="HBody"
					color="greyColors.grey"
				>{`Date: ${createdAt}`}</Typography>
			</Styled.AuthorDataWrapper>
			<Styled.AuthorOtherArticles>
				<Styled.Heading>
					<Typography variant="Section">
						More from{" "}
						<Typography
							variant="Section"
							color="mainColors.main"
						>
							{nickname}
						</Typography>
					</Typography>
				</Styled.Heading>
				<Stack sx={{ width: "100%" }}>{otherArticles}</Stack>
			</Styled.AuthorOtherArticles>
		</Styled.Wrapper>
	);
};
