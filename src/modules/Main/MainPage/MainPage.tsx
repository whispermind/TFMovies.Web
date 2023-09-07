import { Stack, Grid } from "@mui/material";

import { MainPageNav } from "../MainPageNav/MainPageNav";
import { Article } from "../Article/Article";
import { ArticleTopFiltering } from "../FilteringOptions/ArticleTopFiltering";
import { useGetArticles } from "../../../common/hooks";
import * as S from "./styled";

export const MainPage = () => {
	const { data, isLoading } = useGetArticles("");

	const Articles = data?.map((articleData) => (
		<Article
			articleData={articleData}
			key={articleData.id}
		/>
	));

	return (
		<S.Grid container>
			<Grid item>
				<MainPageNav />
			</Grid>
			<Stack
				rowGap={2.5}
				flexGrow={1}
			>
				{isLoading ? null : Articles}
			</Stack>
			<Grid item>
				<ArticleTopFiltering />
			</Grid>
		</S.Grid>
	);
};
