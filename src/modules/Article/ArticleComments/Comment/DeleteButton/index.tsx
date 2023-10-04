import { ButtonProps } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import * as Styled from "./styled/Button";

export const DeleteButton = (props: ButtonProps) => {
	return (
		<Styled.Button
			{...props}
			disableRipple
		>
			<ClearIcon />
		</Styled.Button>
	);
};
