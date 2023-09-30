import { useState, useCallback, useMemo, ChangeEvent } from "react";
import { Stack, Grid, Typography } from "@mui/material";

import { MainNav, PageSpinner } from "../../../common/components";
import { ArticleCard } from "..";
import { useIsAuthorized } from "../../../common/hooks";
import { useGetLikedArticlesQuery } from "../api";
import * as Styled from "./styled";

const ARTICLES_PER_PAGE_LIMIT = 12;

export const LikedArticles = () => {
	const initPage = 1;
	const [pageQuery, setPageQuery] = useState(initPage);
	const queryString = `?page=${pageQuery}&limit=${ARTICLES_PER_PAGE_LIMIT}`;
	const { data, isLoading } = useGetLikedArticlesQuery(queryString);

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

	const onPageChange = useCallback(
		(_: ChangeEvent<unknown>, page: number) => {
			setPageQuery(page);
		},
		[setPageQuery]
	);

	useIsAuthorized(true);

	return (
		(
			<Styled.Grid container>
				<Grid item>
					<MainNav />
				</Grid>
				<Stack
					rowGap={2.5}
					flexGrow={1}
				>
					<Typography
						textAlign="start"
						variant="HHeader"
					>
						Liked Articles
					</Typography>
					{isLoading ? <PageSpinner /> : Articles}
					<Styled.Pagination
						count={data?.totalPages}
						onChange={onPageChange}
						page={pageQuery}
						boundaryCount={2}
						variant="outlined"
						shape="rounded"
					/>
				</Stack>
			</Styled.Grid>
		) || null
	);
};
