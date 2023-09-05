import { Box, Link, List, ListItem, Typography } from "@mui/material";

import { CustomBox } from "../style";
import { TopArticleAuthor } from "../TopArticleAuthor/TopArticleAuthor";

export const TopAuthorsFiltering = () => {
	return (
		<CustomBox>
			<Box sx={{ mb: "28px" }}>
				<Typography variant="Section">
					Top
					<Typography
						variant="Section"
						color="mainColors.main"
					>
						{" "}
						Authors
					</Typography>
				</Typography>
			</Box>
			<Box>
				<List sx={{ p: "0" }}>
					<ListItem sx={{ p: "0" }}>
						<Link
							href="/"
							sx={{ textDecoration: "none" }}
						>
							<TopArticleAuthor />
						</Link>
					</ListItem>
				</List>
			</Box>
		</CustomBox>
	);
};
