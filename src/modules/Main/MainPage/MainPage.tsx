import { useState } from "react";
import { Stack, Grid } from "@mui/material";

import { MainNav } from "../../../common/components";
import { Article } from "../Article/Article";
import { ArticleTopFiltering } from "../FilteringOptions/ArticleTopFiltering";
import { useGetArticles } from "../../../common/hooks";
import { SortingBar } from "../SortingBar";
import * as S from "./styled";

export const MainPage = () => {
	const [query, setQuery] = useState("");
	const { data, isLoading } = useGetArticles(query);

	const Articles = data?.map((articleData) => (
		<Article
			articleData={articleData}
			key={articleData.id}
		/>
	));

	return (
		<S.Grid container>
			<Grid item>
				<MainNav />
			</Grid>
			<Stack
				rowGap={2.5}
				flexGrow={1}
			>
				<SortingBar onSortingChange={setQuery} />
				{isLoading ? null : Articles}
			</Stack>
			<Grid item>
				<ArticleTopFiltering />
			</Grid>
		</S.Grid>
	);
};
