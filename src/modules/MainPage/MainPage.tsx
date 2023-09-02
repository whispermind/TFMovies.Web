import { Grid, List, ListItem, Stack } from "@mui/material"

import { MainPageNav } from "./MainPageNav/MainPageNav"
import { Article } from "./Article/Article"
import { ArticleTopFiltering } from "./FilteringOptions/ArticleTopFiltering"


export const MainPage = () => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="normal"
			flexWrap="nowrap"
			gap='40px'
		>
			<Grid item>
				<MainPageNav />
			</Grid>
			<Grid item>
				<List sx={{ p: 0 }}>
					<ListItem sx={{ p: '0', mb: '20px' }}>
						<Article />
					</ListItem>
				</List>
			</Grid>
			<Grid item>
				<ArticleTopFiltering />
			</Grid>
		</Grid>
	)
}
