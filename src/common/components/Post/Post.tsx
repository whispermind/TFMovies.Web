import { Card, CardMedia, CardContent, Typography, CardActions, Link } from "@mui/material";

import { FavoriteIcon } from "../icons";
import { CommentAuthor } from "../CommentAuthor/CommentAuthor";
import { TagsString } from "../TagsString/TagsString";
import { CustomButton } from "./style";

export const Post = () => {
	return (
		<Card sx={{ width: '100%', mb: '20px' }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="300"
				image="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/19/1494599203-greatest-superhero-films-iron-man.jpg"
				sx={{ mb: '25px' }}
			/>
			<CardContent sx={{ padding: '0 50px' }}>
				<CommentAuthor />
				<Typography variant='ASubheader'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien tempor, mollis est tempus, tincidunt enim.
				</Typography>
			</CardContent>
			<CardActions sx={{ padding: '10px 50px 20px', width: '100%', justifyContent: 'space-between' }}>
				<TagsString str='#car #blue #technique #mechanic #mechanic #mechanic' />
				<CustomButton>
					<Typography variant="HBody" color='greyColors.grey'>Add to Favorites</Typography>
					<FavoriteIcon sx={{ width: '32px', height: '32px' }} />
				</CustomButton>
			</CardActions>
		</Card >
	);
}