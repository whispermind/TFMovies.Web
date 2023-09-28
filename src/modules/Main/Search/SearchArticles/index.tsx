import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { ArticleCard } from "../../../Article/ArticleCard";
import { useGetArticlesQuery } from "../../api";
import { PageSpinner } from "../../../../common/components";

export const SearchArticles = () => {
	const [params] = useSearchParams();
	const subject = params.get("subject");
	const query = params.get("query");

	const requestQuery = subject && query ? `?${subject}=${query}` : "";
	const { data, isLoading, isSuccess } = useGetArticlesQuery(requestQuery);

	const articleCards = useMemo(
		() =>
			data?.data.map((article) => (
				<ArticleCard
					key={article.id}
					articleData={article}
				/>
			)),
		[data]
	);

	return (
		<>
			{isLoading && <PageSpinner />}
			{isSuccess && articleCards && articleCards}
		</>
	);
};
