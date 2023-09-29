import { forwardRef } from "react";
import { InputAdornment, TextFieldProps, SvgIconProps } from "@mui/material";

import * as Styled from "./styled";

export interface IWithIconProps {
	startIcon?: (props: SvgIconProps) => JSX.Element;
	endIcon?: (props: SvgIconProps) => JSX.Element | null;
	iconProps?: SvgIconProps;
}

export type TFormTextFieldIconedProps = IWithIconProps & TextFieldProps & Reffered<HTMLInputElement>;

export const FormTextFieldIconed = forwardRef<HTMLInputElement, TFormTextFieldIconedProps>((props, ref) => {
	const { startIcon: StartIcon, endIcon: EndIcon, InputProps, iconProps, ...restProps } = props;

	return (
		<Styled.FormTextField
			ref={ref}
			{...restProps}
			InputProps={{
				...InputProps,
				startAdornment: StartIcon && (
					<InputAdornment position="start">
						<StartIcon {...iconProps} />
					</InputAdornment>
				),
				endAdornment: EndIcon ? (
					<InputAdornment position="end">
						<EndIcon {...iconProps} />
					</InputAdornment>
				) : null
			}}
		/>
	);
});
