import { Stack, Typography } from "@mui/material";

interface IArticleTags {
	str: string;
}

export const ArticleTags = ({ str }: IArticleTags) => {

	const tagsArr = str.split(' ').map((tag, index) => (
		<Typography key={index} variant="HBody" color='greyColors.grey'>
			{tag}
		</Typography>
	))

	return (
		<>
			<Stack direction='row' gap='12px'>
				{tagsArr.length > 5 ? tagsArr.slice(0, 5) : tagsArr}
			</Stack>
		</>
	);
}