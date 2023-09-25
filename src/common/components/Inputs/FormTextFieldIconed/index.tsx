import { forwardRef } from "react";
import { InputAdornment, TextFieldProps, SvgIconProps } from "@mui/material";

import * as Styled from "./styled";

export interface IWithIconProps {
	icon: (props: SvgIconProps) => JSX.Element;
	position: "end" | "start";
	iconProps?: SvgIconProps;
}

export type TFormTextFieldIconedProps = IWithIconProps & TextFieldProps & Reffered<HTMLInputElement>;

export const FormTextFieldIconed = forwardRef<HTMLInputElement, TFormTextFieldIconedProps>((props, ref) => {
	const { position, icon: Icon, InputProps, iconProps, ...restProps } = props;

	return (
		<Styled.FormTextField
			ref={ref}
			{...restProps}
			InputProps={{
				...InputProps,
				[`${position}Adornment`]: (
					<InputAdornment position={position}>
						<Icon {...iconProps} />
					</InputAdornment>
				)
			}}
		/>
	);
});
