import { useState, useCallback, useMemo, ChangeEvent } from "react";
import { Stack, Typography } from "@mui/material";

import { MainNav, PageSpinner, PageWrapper } from "../../../common/components";
import { ArticleCard } from "..";
import { useIsAuthorized } from "../../../common/hooks";
import { useGetLikedArticlesQuery } from "../../../app/api/Articles";
import { Pagination } from "../MainPage/styled";

const ARTICLES_PER_PAGE_LIMIT = 12;

export const LikedArticles = () => {
	const [pageQuery, setPageQuery] = useState(1);
	const queryString = `?page=${pageQuery}&limit=${ARTICLES_PER_PAGE_LIMIT}`;
	const { data, isLoading } = useGetLikedArticlesQuery(queryString);

	const Articles = useMemo(
		() =>
			data?.data?.map((articleData) => (
				<ArticleCard
					{...articleData}
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
			<PageWrapper>
				<div>
					<MainNav />
				</div>
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
					<Pagination
						count={data?.totalPages}
						onChange={onPageChange}
						page={pageQuery}
						boundaryCount={2}
						variant="outlined"
						shape="rounded"
					/>
				</Stack>
			</PageWrapper>
		) || null
	);
};
