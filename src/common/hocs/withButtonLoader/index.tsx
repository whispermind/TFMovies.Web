import { ComponentType } from "react";

import { Box, ButtonProps, InputProps } from "@mui/material";
import { ButtonSpinner } from "../../components";

export const withButtonLoader =
	<P extends ButtonProps | InputProps>(Button: ComponentType<P>) =>
	(buttonProps: P) => {
		const { disabled } = buttonProps;
		return (
			<Box position="relative">
				<Button {...buttonProps} />
				{disabled && (
					<ButtonSpinner
						// disableShrink
						size={25}
					/>
				)}
			</Box>
		);
	};
