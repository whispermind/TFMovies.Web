import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

import { useAppSelector } from "../../hooks";
import { selectAuth } from "../../../modules/Authorization/AuthSlice";
import { ArticleAuthor } from "./ArticleAuthor";
import { ArticleTags } from "./ArticleTags";
import { FavoriteFilledIcon } from "../Icons";
import * as Styled from "./styled";

export interface IArticleCard {
	id: string;
	coverImageUrl: string;
	title: string;
	createdAt: string;
	author: string;
	themeName: string;
	tags: string[];
	isLiked: boolean;
}

export interface IArticleCardProps {
	articleData: IArticleCard;
}

export const ArticleCard = ({ articleData }: IArticleCardProps) => {
	const { id, coverImageUrl, title, createdAt, author, tags, isLiked } = articleData;
	const { accessToken } = useAppSelector(selectAuth);

	const dateObject = new Date(Date.parse(createdAt));

	const dateFormatted = `${dateObject.toLocaleDateString("en-GB", { month: "long" })} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;

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
					created={dateFormatted}
					nickname={author}
				/>
				<CardContent sx={{ p: 0 }}>
					<Typography variant="ASubheader">{title}</Typography>
				</CardContent>
				<Styled.CardActions>
					<ArticleTags tags={tags} />
					<Styled.LikeButton>
						<Typography
							variant="HBody"
							color="greyColors.grey"
						>
							Add to Favorites
						</Typography>
						{isLiked ? <FavoriteFilledIcon /> : <FavoriteBorder />}
					</Styled.LikeButton>
				</Styled.CardActions>
			</Styled.CardContentContainer>
		</Card>
	);
};
