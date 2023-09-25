import { PropsWithChildren } from "react";
import { DividerProps, Typography } from "@mui/material";

import * as Styled from "./styled";

export const FormDivider = ({ children, ...dividerProps }: PropsWithChildren<DividerProps>) => {
	return (
		<Styled.Divider {...dividerProps}>
			<Typography variant="HBody">{children}</Typography>
		</Styled.Divider>
	);
};
