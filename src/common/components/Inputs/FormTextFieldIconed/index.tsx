import { forwardRef } from "react";
import { InputAdornment, TextFieldProps, SvgIconProps } from "@mui/material";

import * as S from "./styled";

export interface IWithIconProps {
  icon: (props: SvgIconProps) => JSX.Element;
  position: "end" | "start";
  iconProps?: SvgIconProps;
}

export type TFormTextFieldIconedProps = IWithIconProps & TextFieldProps & Reffered<HTMLInputElement>;

export const FormTextFieldIconed = forwardRef<HTMLInputElement, TFormTextFieldIconedProps>((props, ref) => {
  const { position, icon: Icon, InputProps, iconProps, ...restProps } = props;

  return (
    <S.FormTextField
      ref={ref}
      {...restProps}
      InputProps={{
        ...InputProps,
        startAdornment: (
          <InputAdornment position={position}>
            <Icon {...iconProps} />
          </InputAdornment>
        )
      }}
    />
  );
});
