import { useState, useMemo, useCallback, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Stack } from "@mui/material";

import { useGetUsersOrArticlesQuery } from "../../../app/api/Combined";
import { useIsAuthorized } from "../../../common/hooks";
import { SearchSubjectBar, SearchPageHeading, UserCard } from "..";
import { ArticleCard } from "../../Article/ArticleCard";
import { Pagination } from "../../Main/MainPage/styled";
import { isUser, isArticles, dateFormatter } from "../../../common/utils";
import { PageSpinner } from "../../../common/components";
import { NoDataIcon } from "../../../common/components/Icons";
import { UserRoles } from "../../../common/enums";
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
					id={user.role.name === UserRoles.author || user.role.name === UserRoles.admin ? user.id : ""}
				/>
			));
		}

		if (isArticles(data)) {
			content = data?.data.map((article) => (
				<ArticleCard
					{...article}
					createdAt={dateFormatter(article.createdAt)}
					key={article.id}
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

	useIsAuthorized(true);

	return (
		(
			<Styled.PageWrapper>
				<SearchPageHeading />
				<Styled.ContentWrapper>
					<Stack sx={{ position: isLoading ? "absolute" : "" }}>
						<SearchSubjectBar />
					</Stack>
					{(!query || !searchResults?.length) && isSuccess ? (
						<NoDataIcon />
					) : (
						<Styled.Stack>
							{isLoading && (
								<Stack
									height="100%"
									justifyContent="center"
									m="0 auto"
								>
									<PageSpinner />
								</Stack>
							)}
							{isSuccess && !!query && !!searchResults?.length && searchResults}
						</Styled.Stack>
					)}
				</Styled.ContentWrapper>
				<Pagination
					count={(query && data?.totalPages) || 0}
					onChange={onPageChange}
					page={(query && pageQuery) || 0}
					boundaryCount={2}
					variant="outlined"
					shape="rounded"
					sx={{ maxWidth: "1220px" }}
				/>
			</Styled.PageWrapper>
		) || null
	);
};
