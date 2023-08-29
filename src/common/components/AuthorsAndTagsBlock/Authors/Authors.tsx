import { Box, Typography } from "@mui/material";

import { CustomBox } from "../style";

export const Authors = () => {
	return (
		<CustomBox>
			<Box sx={{ mb: '28px' }}>
				<Typography variant="Sector">Top
					<Typography variant="Sector" color="mainColors.main">Authors</Typography>
				</Typography>
			</Box>
		</CustomBox >
	);
}