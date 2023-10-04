import { useState, useCallback, useMemo, ChangeEvent } from "react";
import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { MainNav, PageSpinner, PageWrapper } from "../../../common/components";
import { ArticleCard } from "..";
import { useIsAuthorized } from "../../../common/hooks";
import { useGetArticlesByAuthorQuery } from "../../../app/api/Articles";
import { Pagination } from "../MainPage/styled";

const ARTICLES_PER_PAGE_LIMIT = 12;

export const ArticlesBySpecificAuthor = () => {
	const [pageQuery, setPageQuery] = useState(1);
	const { id } = useParams();
	const queryString = `?page=${pageQuery}&limit=${ARTICLES_PER_PAGE_LIMIT}&userId=${id}`;
	const { data, isLoading } = useGetArticlesByAuthorQuery(queryString);

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

	const authorName = data?.data[0].author;

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
						textTransform="none"
					>
						{authorName && `The ${authorName}'s articles`}
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
