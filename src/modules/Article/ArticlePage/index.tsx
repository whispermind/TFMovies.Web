import { useParams } from "react-router-dom";

import { useGetArticleQuery } from "../api";
import { PageSpinner, PageWrapper } from "../../../common/components";
import { ArticleContent, ArticleComments, ArticleActions, ArticleAuthorsInfo } from "..";
import * as Styled from "./styled";

const AUTHORS_OTHER_ARTICLES_LIMIT = 7;

export const ArticlePage = () => {
	const { id = "" } = useParams();
	const { data, isLoading } = useGetArticleQuery({ id, limit: AUTHORS_OTHER_ARTICLES_LIMIT });

	return (
		<PageWrapper>
			{isLoading ? (
				<PageSpinner />
			) : (
				<>
					<ArticleActions
						likesAmount={data?.likesCount}
						commentsAmount={data?.commentsCount}
						isLiked={data?.isLiked}
						id={data?.id}
					/>
					<Styled.ContentWrapper>
						<ArticleContent {...data} />
						<ArticleComments data={data?.comments || []} />
					</Styled.ContentWrapper>
					<ArticleAuthorsInfo
						id={data?.authorId || ""}
						createdAt={data?.createdAt || ""}
						nickname={data?.author || ""}
						postsByAuthor={data?.postsByAuthor || []}
					/>
				</>
			)}
		</PageWrapper>
	);
};
