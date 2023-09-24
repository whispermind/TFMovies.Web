import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material";

import { useAppSelector } from "../../../common/hooks";
import { selectAuth } from "../../Authorization/AuthSlice";
import { ArticleAuthor } from "./ArticleAuthor";
import { ArticleTags } from "./ArticleTags";
import { LikeButton } from "../../../common/components/Buttons/LikeButton";
import { dateFormatter } from "../../../common/utils";
import * as Styled from "./styled";

export interface IArticleCard {
	id: string;
	coverImageUrl: string;
	title: string;
	createdAt: string;
	author: string;
	tags: string[];
	isLiked: boolean;
}

export interface IArticleCardProps {
	articleData: IArticleCard;
}

export const ArticleCard = ({ articleData }: IArticleCardProps) => {
	const { id, coverImageUrl, title, createdAt, author, tags, isLiked } = articleData;
	const { accessToken } = useAppSelector(selectAuth);

	const dateFormatted = dateFormatter(createdAt);
	// TODO REPLACE AUTHOR ID REDIRECT
	return (
		<Card>
			<Link href={accessToken ? `/article/${id}` : `/signin`}>
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
					id={id}
				/>
				<CardContent sx={{ p: 0 }}>
					<Typography variant="ASubheader">{title}</Typography>
				</CardContent>
				<Styled.CardActions>
					<ArticleTags tags={tags} />
					<LikeButton
						id={id}
						isLiked={isLiked}
					>
						<Styled.LikeButtonDescription
							variant="HBody"
							color="greyColors.grey"
						>
							Add to Favorites
						</Styled.LikeButtonDescription>
					</LikeButton>
				</Styled.CardActions>
			</Styled.CardContentContainer>
		</Card>
	);
};
