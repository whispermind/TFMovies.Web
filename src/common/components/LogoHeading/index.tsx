import { Typography, Stack, StackProps } from "@mui/material";
import { PropsWithChildren } from "react";

import { LogoIcon } from "../Icons";

export interface ILogoHeadingProps {
	heading?: JSX.Element | string;
	additionals?: string;
}

export const LogoHeading = ({ heading, children, additionals, ...restProps }: PropsWithChildren<ILogoHeadingProps & StackProps>) => {
	return (
		<Stack
			rowGap={1.5}
			alignItems="center"
			{...restProps}
		>
			<LogoIcon sx={{ width: "120px", height: "115px" }} />
			{heading && <Typography variant="HHeader">{heading}</Typography>}
			{additionals && <Typography variant="HBody">{additionals}</Typography>}
			<Typography variant="HBody">{children}</Typography>
		</Stack>
	);
};
