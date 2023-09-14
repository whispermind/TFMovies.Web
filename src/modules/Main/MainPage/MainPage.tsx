import { useState, useCallback, ChangeEvent } from "react";
import { Stack, Grid } from "@mui/material";

import { MainNav } from "../../../common/components";
import { Article } from "../../../common/components/Article";
import { ArticleTopFiltering } from "../FilteringOptions/ArticleTopFiltering";
import { useGetArticles } from "../../../common/hooks";
import { SortingBar } from "../SortingBar";
import * as Styled from "./styled";

const LIMIT_PER_PAGE = 12;

export const MainPage = () => {
	const initPage = 1;
	const [sortingQuery, setSortingQuery] = useState("");
	const [pageQuery, setPageQuery] = useState(initPage);
	const { data, isLoading } = useGetArticles(`?page=${pageQuery}&${sortingQuery}&limit=${LIMIT_PER_PAGE}`);

	const Articles = data?.articles?.map((articleData) => (
		<Article
			articleData={articleData}
			key={articleData.id}
		/>
	));

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

	return (
		<Styled.Grid container>
			<Grid item>
				<MainNav />
			</Grid>
			<Stack
				rowGap={2.5}
				flexGrow={1}
			>
				<SortingBar onSortingChange={onSortingChange} />
				{isLoading ? null : Articles}
				<Styled.Pagination
					count={data?.pages || 10}
					onChange={onPageChange}
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
