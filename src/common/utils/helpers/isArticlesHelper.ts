import type { IGetArticlesResponseData } from "../../../modules/Main/api";

export function isArticles(articles: unknown): articles is IGetArticlesResponseData {
	return (
		typeof articles === "object" &&
		articles !== null &&
		"page" in articles &&
		"limit" in articles &&
		"totalPages" in articles &&
		"totalRecords" in articles &&
		"data" in articles &&
		typeof articles.data === "object" &&
		articles.data !== null &&
		articles.data instanceof Array &&
		(!articles.data.length ||
			("id" in articles.data[0] &&
				"coverImageUrl" in articles.data[0] &&
				"title" in articles.data[0] &&
				"createdAt" in articles.data[0] &&
				"author" in articles.data[0] &&
				"authorId" in articles.data[0] &&
				"tags" in articles.data[0] &&
				"isLiked" in articles.data[0]))
	);
}
