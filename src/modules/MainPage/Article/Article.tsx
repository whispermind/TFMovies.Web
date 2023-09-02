import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";

import { FavoriteIcon } from "../../../common/components/icons";
import { ArticleAuthor } from "./ArticleAuthor/ArticleAuthor";
import { ArticleTags } from "./ArticleTags/ArticleTags";
import { CustomButton } from "./style";

export const Article = () => {
	return (
		<Card>
			<CardMedia
				component="img"
				alt="green iguana"
				height="300"
				image="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/19/1494599203-greatest-superhero-films-iron-man.jpg"
				sx={{ mb: '25px' }}
			/>
			<CardContent sx={{ padding: '0 50px' }}>
				<ArticleAuthor />
				<Typography variant='ASubheader'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien tempor, mollis est tempus, tincidunt enim.
				</Typography>
			</CardContent>
			<CardActions sx={{ padding: '10px 50px 20px', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
				<ArticleTags str='#car #blue #technique #mechanic #mechanic #mechanic' />
				<CustomButton>
					<Typography variant="HBody" color='greyColors.grey'>Add to Favorites</Typography>
					<FavoriteIcon sx={{ width: '32px', height: '32px' }} />
				</CustomButton>
			</CardActions>
		</Card >
	);
}