import { useState, useCallback, useMemo, ChangeEvent } from "react";
import { Stack } from "@mui/material";

import { MainNav, PageSpinner, PageWrapper } from "../../../common/components";
import { ArticleTopFiltering, SortingBar, ArticleCard } from "..";
import { useOnClickAuthorized } from "../../../common/hooks";
import { useGetArticlesQuery } from "../api";
import { Routes } from "../../../common/enums";
import * as Styled from "./styled";

const ARTICLES_PER_PAGE_LIMIT = 12;

export const MainPage = () => {
	const initPage = 1;
	const [sortingQuery, setSortingQuery] = useState("&sort=created");
	const [pageQuery, setPageQuery] = useState(initPage);
	const queryString = `?page=${pageQuery}${sortingQuery}&limit=${ARTICLES_PER_PAGE_LIMIT}`;
	const { data, isLoading } = useGetArticlesQuery(queryString);

	const Articles = useMemo(
		() =>
			data?.data?.map((articleData) => (
				<ArticleCard
					articleData={articleData}
					key={articleData.id}
				/>
			)),
		[data]
	);

	const onSortingChange = useCallback(
		(_sortingQuery: string) => {
			setSortingQuery(_sortingQuery);
			setPageQuery(initPage);
		},
		[setPageQuery, setSortingQuery]
	);

	const onPageChange = useCallback(
		(_: ChangeEvent<unknown>, page: number) => {
			setPageQuery(page);
		},
		[setPageQuery]
	);

	const onSortingChangeAuthorized = useOnClickAuthorized(onSortingChange, Routes.signIn);
	const onPageChangeAuthorized = useOnClickAuthorized(onPageChange, Routes.signIn);

	return (
		<PageWrapper>
			<div>
				<MainNav />
			</div>
			<Stack
				rowGap={2.5}
				flexGrow={1}
			>
				<SortingBar
					onSortingChange={onSortingChangeAuthorized}
					initSort="created"
				/>
				{isLoading ? <PageSpinner /> : Articles}
				<Styled.Pagination
					count={data?.totalPages}
					onChange={onPageChangeAuthorized}
					page={pageQuery}
					boundaryCount={2}
					variant="outlined"
					shape="rounded"
				/>
			</Stack>
			<div>
				<ArticleTopFiltering />
			</div>
		</PageWrapper>
	);
};
