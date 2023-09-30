import type { IGetArticleResponseData } from "../../../modules/Article/api/index";

export function isArticle(article: unknown): article is IGetArticleResponseData {
	return (
		typeof article === "object" &&
		article !== null &&
		"id" in article &&
		"theme" in article &&
		"htmlContent" in article &&
		"likesCount" in article &&
		"commentsCount" in article &&
		"comments" in article &&
		"postsByAuthor" in article &&
		"coverImageUrl" in article &&
		"title" in article &&
		"createdAt" in article &&
		"author" in article &&
		"authorId" in article &&
		"tags" in article &&
		"isLiked" in article
	);
}
