import { useState, useMemo, useCallback, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetUsersOrArticlesQuery } from "../../api";
import { useIsAuthorized } from "../../../../common/hooks";
import { SearchSubjectBar, SearchPageHeading, UserCard } from "..";
import { ArticleCard } from "../../../Article/ArticleCard";
import { Pagination } from "../../MainPage/styled";
import { isUser, isArticles } from "../../../../common/utils";
import { PageSpinner } from "../../../../common/components";
import * as Styled from "./styled";

const SEARCH_RESULTS_PER_PAGE_LIMIT = 16;

export const SearchPage = () => {
	const [pageQuery, setPageQuery] = useState(1);

	const [params] = useSearchParams();
	const subject = params.get("subject");
	const query = params.get("query");

	const requestQuery = subject && query ? `?${subject}=${query.split(" ").join(",")}&page=${pageQuery}&limit=${SEARCH_RESULTS_PER_PAGE_LIMIT}` : "";
	const endpoint = subject === "users" ? "users" : "posts";

	const { data, isLoading, isSuccess } = useGetUsersOrArticlesQuery({ endpoint, query: requestQuery });

	const searchResults = useMemo(() => {
		let content = null;

		if (isUser(data)) {
			content = data?.data.map((user) => (
				<UserCard
					key={user.id}
					{...user}
				/>
			));
		}

		if (isArticles(data)) {
			content = data?.data.map((article) => (
				<ArticleCard
					key={article.id}
					articleData={article}
				/>
			));
		}

		return content;
	}, [data]);

	const onPageChange = useCallback(
		(_: ChangeEvent<unknown>, page: number) => {
			setPageQuery(page);
		},
		[setPageQuery]
	);

	useIsAuthorized();

	return (
		(
			<Styled.Stack>
				<SearchPageHeading />
				<Styled.Stack direction="row">
					<SearchSubjectBar />
					<Styled.ContentWrapper>
						{isLoading && <PageSpinner />}
						{isSuccess && searchResults}
					</Styled.ContentWrapper>
				</Styled.Stack>
				<Pagination
					count={data?.totalPages}
					onChange={onPageChange}
					page={pageQuery}
					boundaryCount={2}
					variant="outlined"
					shape="rounded"
				/>
			</Styled.Stack>
		) || null
	);
};