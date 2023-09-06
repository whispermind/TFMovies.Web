import { PropsWithChildren } from "react";
import { Button, ButtonProps, Typography } from "@mui/material";

export const PrimaryButton = ({ children, ...restProps }: PropsWithChildren<ButtonProps>) => {
	return (
		<Button {...restProps}>
			<Typography variant="Input">{children}</Typography>
		</Button>
	);
};
