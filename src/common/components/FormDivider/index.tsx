import { PropsWithChildren } from "react";
import { DividerProps, Typography } from "@mui/material";

import * as S from "./styled";

export const FormDivider = ({ children, ...dividerProps }: PropsWithChildren<DividerProps>) => {
	return (
		<S.Divider {...dividerProps}>
			<Typography variant="HBody">{children}</Typography>
		</S.Divider>
	);
};
