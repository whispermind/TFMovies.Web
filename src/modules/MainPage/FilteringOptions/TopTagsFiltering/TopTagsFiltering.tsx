import { Box, Link, List, ListItem, Typography } from "@mui/material";

import { CustomBox } from "../style";

export const TopTagsFiltering = () => {
	return (
		<CustomBox>
			<Box sx={{ mb: '28px' }}>
				<Typography variant="Sector">Top
					<Typography variant="Sector" color="mainColors.main"> Tags</Typography>
				</Typography>
			</Box>
			<Box>
				<List sx={{ p: '0' }}>
					<ListItem sx={{ p: '0' }}>
						<Link>
							<Typography variant="SectorLink">
								#car
							</Typography>
						</Link>
					</ListItem>
				</List>
			</Box>
		</CustomBox >
	);
}