import { PropsWithChildren } from "react";

import { Grid, Stack, StackProps } from "@mui/material";

export const AdoptiveLayout = ({ children, ...stackProps }: PropsWithChildren<StackProps>) => {
	return (
		<Grid
			container
			maxWidth="xl"
			m="0 auto"
			justifyContent="center"
		>
			<Grid
				item
				xl={12}
				lg={10}
				md={10}
				sm={10}
			>
				<Stack
					justifyContent="center"
					direction="row"
					{...stackProps}
				>
					{children}
				</Stack>
			</Grid>
		</Grid>
	);
};
