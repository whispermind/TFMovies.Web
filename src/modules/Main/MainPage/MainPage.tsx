import { useState, useCallback, useMemo, ChangeEvent } from "react";
import { Stack, Grid } from "@mui/material";

import { MainNav, PageSpinner } from "../../../common/components";
import { ArticleTopFiltering, SortingBar, ArticleCard } from "..";
import { useOnClickAuthorized } from "../../../common/hooks";
import { useGetArticlesQuery } from "../api";
import * as Styled from "./styled";

const LIMIT_PER_PAGE = 12;

export const MainPage = () => {
	const initPage = 1;
	const [sortingQuery, setSortingQuery] = useState("&sort=created");
	const [pageQuery, setPageQuery] = useState(initPage);
	const queryString = `?page=${pageQuery}${sortingQuery}&limit=${LIMIT_PER_PAGE}`;
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

	const onSortingChangeAuthorized = useOnClickAuthorized(onSortingChange, "/signin");
	const onPageChangeAuthorized = useOnClickAuthorized(onPageChange, "/signin");

	return (
		<Styled.Grid container>
			<Grid item>
				<MainNav />
			</Grid>
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
			<Grid item>
				<ArticleTopFiltering />
			</Grid>
		</Styled.Grid>
	);
};
