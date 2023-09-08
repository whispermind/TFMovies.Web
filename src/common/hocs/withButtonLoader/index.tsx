import { ComponentType } from "react";

import { Box, ButtonProps } from "@mui/material";
import { Spinner } from "../../components";

export const withButtonLoader =
	<P extends ButtonProps>(Button: ComponentType<P>) =>
	(buttonProps: P) => {
		const { disabled } = buttonProps;
		return (
			<Box position="relative">
				<Button {...buttonProps} />
				{disabled && (
					<Spinner
						// disableShrink
						size={25}
					/>
				)}
			</Box>
		);
	};
