import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material";

import { useAppSelector } from "../../../common/hooks";
import { selectAuth } from "../../Authorization/AuthSlice";
import { ArticleTags } from "./ArticleTags";
import { LikeButton, UserAvatar } from "../../../common/components";
import * as Styled from "./styled";

export interface ITag {
	id: string;
	name: string;
}
export interface IArticleCard {
	id: string;
	coverImageUrl: string;
	title: string;
	createdAt: string;
	author: string;
	authorId: string;
	tags: ITag[];
	isLiked: boolean;
}

export interface IArticleCardProps {
	articleData: IArticleCard;
}

export const ArticleCard = ({ articleData }: IArticleCardProps) => {
	const { id, coverImageUrl, title, createdAt, author, tags, isLiked, authorId } = articleData;
	const { accessToken } = useAppSelector(selectAuth);

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
				<UserAvatar
					size={44}
					nickname={author}
					id={authorId}
					nicknameStyle="HBodyBold"
				>
					<Typography
						variant="HBody"
						color="greyColors.grey"
						textAlign="start"
					>
						{createdAt}
					</Typography>
				</UserAvatar>
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
