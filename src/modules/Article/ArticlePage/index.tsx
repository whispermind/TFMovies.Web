import { useParams } from "react-router-dom";

import { useGetArticleQuery } from "../api";
import { PageSpinner, PageWrapper } from "../../../common/components";
import { ArticleContent, ArticleComments, ArticleActions, ArticleAuthorsInfo } from "..";
import { useIsAuthorized } from "../../../common/hooks";
import * as Styled from "./styled";

const AUTHORS_OTHER_ARTICLES_LIMIT = 7;

export const ArticlePage = () => {
	const { id = "" } = useParams();
	const { data, isLoading } = useGetArticleQuery({ id, limit: AUTHORS_OTHER_ARTICLES_LIMIT });

	useIsAuthorized();

	return (
		(
			<PageWrapper>
				{isLoading ? (
					<PageSpinner />
				) : (
					<>
						<ArticleActions {...data} />
						<Styled.ContentWrapper>
							<ArticleContent
								title={data?.title}
								theme={data?.theme}
								htmlContent={data?.htmlContent}
								tags={data?.tags}
								coverImageUrl={data?.coverImageUrl}
							/>
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
		) || null
	);
};
