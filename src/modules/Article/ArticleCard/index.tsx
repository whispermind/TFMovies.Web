import { CardMedia, CardContent, Typography } from "@mui/material";

import { ArticleTags } from "./ArticleTags";
import { LikeButton, UserAvatar, AppLink } from "../../../common/components";
import { Routes } from "../../../common/enums";
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

	return (
		<Styled.Card>
			<AppLink
				href={`${Routes.article}/${id}`}
				authorized
			>
				<CardMedia
					component="img"
					alt="cover image"
					height="300"
					image={coverImageUrl}
				/>
			</AppLink>
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
		</Styled.Card>
	);
};
