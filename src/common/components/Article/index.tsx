import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

import { useAppSelector } from "../../hooks";
import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { ArticleAuthor } from "./ArticleAuthor";
import { ArticleTags } from "./ArticleTags";
import { FavoriteFilledIcon } from "../Icons";
import * as Styled from "./styled";

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
	liked: string;
}

export interface IArticleProps {
	articleData: IArticle;
}

export const Article = ({ articleData }: IArticleProps) => {
	const { id, coverImageUrl, title, createdAt, authorNickname, tagNames, favorite } = articleData;
	const { accessToken } = useAppSelector(selectAuth);

	return (
		<Card>
			<Link href={accessToken ? `/post/${id}` : `/signin`}>
				<CardMedia
					component="img"
					alt="cover image"
					height="300"
					image={coverImageUrl}
				/>
			</Link>
			<Styled.CardContentContainer>
				<ArticleAuthor
					created={createdAt}
					nickname={authorNickname}
				/>
				<CardContent sx={{ p: 0 }}>
					<Typography variant="ASubheader">{title}</Typography>
				</CardContent>
				<Styled.CardActions>
					<ArticleTags tags={tagNames} />
					<Styled.LikeButton>
						<Typography
							variant="HBody"
							color="greyColors.grey"
						>
							Add to Favorites
						</Typography>
						{favorite ? <FavoriteFilledIcon /> : <FavoriteBorder />}
					</Styled.LikeButton>
				</Styled.CardActions>
			</Styled.CardContentContainer>
		</Card>
	);
};
