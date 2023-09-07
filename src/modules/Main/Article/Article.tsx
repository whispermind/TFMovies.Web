import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

import { ArticleAuthor } from "./ArticleAuthor/ArticleAuthor";
import { ArticleTags } from "./ArticleTags/ArticleTags";
import { FavoriteFilledIcon } from "../../../common/components/Icons";
import * as S from "./styled";

export interface IArticle {
	id: string;
	coverImageUrl: string;
	title: string;
	htmlContent: string;
	createdAt: string;
	authorNickname: string;
	themeName: string;
	tagNames: string[];
	favorite: boolean;
}

export interface IArticleProps {
	articleData: IArticle;
}

export const Article = ({ articleData }: IArticleProps) => {
	const { id, coverImageUrl, title, createdAt, authorNickname, tagNames, favorite } = articleData;

	return (
		<Card>
			<Link href={`/post/${id}`}>
				<CardMedia
					component="img"
					alt="cover image"
					height="300"
					image={coverImageUrl}
				/>
			</Link>
			<S.CardContentContainer>
				<ArticleAuthor
					created={createdAt}
					nickname={authorNickname}
				/>
				<CardContent sx={{ p: 0 }}>
					<Typography variant="ASubheader">{title}</Typography>
				</CardContent>
				<S.CardActions>
					<ArticleTags tags={tagNames} />
					<S.LikeButton>
						<Typography
							variant="HBody"
							color="greyColors.grey"
						>
							Add to Favorites
						</Typography>
						{favorite ? <FavoriteFilledIcon /> : <FavoriteBorder />}
					</S.LikeButton>
				</S.CardActions>
			</S.CardContentContainer>
		</Card>
	);
};
