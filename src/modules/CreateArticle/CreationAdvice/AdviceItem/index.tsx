import { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

interface IAdviceItemProps extends PropsWithChildren {
	heading: string;
}

export const AdviceItem = ({ children, heading }: IAdviceItemProps) => {
	return (
		<li>
			<Typography variant="HBody">
				<strong>{heading}</strong>: {children}
			</Typography>
		</li>
	);
};
