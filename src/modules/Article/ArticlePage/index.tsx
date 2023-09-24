import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import { useGetArticleQuery } from "../api";
import { PageSpinner, PageGrid } from "../../../common/components";
import { CardContent, Comments, ArticleActions } from "..";
import * as Styled from "./styled";

export const ArticlePage = () => {
	const { id = "" } = useParams();
	const { data, isLoading } = useGetArticleQuery(id);

	return (
		<PageGrid container>
			<Grid item>
				<ArticleActions
					likesAmount={data?.likesCount}
					commentsAmount={data?.commentsCount}
					isLiked={data?.isLiked}
					id={data?.id}
				/>
			</Grid>
			<Styled.Stack>
				{isLoading ? (
					<PageSpinner />
				) : (
					<>
						<CardContent {...data} />
						<Comments data={data?.comments || []} />
					</>
				)}
			</Styled.Stack>
		</PageGrid>
	);
};
