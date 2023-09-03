import { Button, Typography } from "@mui/material";
import { CloseIcon } from "../../Icons";

export const CloseButton = () => {
	return (
		<Button
			variant="close"
			href="/"
		>
			<Typography
				variant="HBody"
				color="mainColors.graphite"
			>
				Close
			</Typography>
			<CloseIcon />
		</Button>
	);
};
