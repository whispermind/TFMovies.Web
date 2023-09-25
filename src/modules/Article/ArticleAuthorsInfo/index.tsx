import { Typography, Link, Stack } from "@mui/material";

import { UserAvatar } from "../../../common/components";
import { ArticleTags } from "../../Main/ArticleCard/ArticleTags";
import * as Styled from "./styled";

import type { PostByAuthor } from "../api";

interface IArticleAuthorsInfoProps {
	createdAt: string;
	nickname: string;
	id: string;
	postsByAuthor: PostByAuthor[];
}

export const ArticleAuthorsInfo = ({ id: authorId, createdAt, nickname, postsByAuthor }: IArticleAuthorsInfoProps) => {
	const otherArticles = postsByAuthor.map(({ title, tags, id: articleId }) => (
		<Styled.ArticleData key={articleId}>
			<Link href={`/article/${articleId}`}>
				<Typography variant="SectionLink">{title}</Typography>
			</Link>
			<ArticleTags tags={tags} />
		</Styled.ArticleData>
	));

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
