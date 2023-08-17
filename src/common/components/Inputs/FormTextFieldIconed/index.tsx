import { forwardRef } from "react";
import { InputAdornment, TextFieldProps, SvgIconProps } from "@mui/material";

import { FormTextField } from "../FormTextField";

export interface IWithIconProps {
  icon: (props: SvgIconProps) => JSX.Element;
  position: "end" | "start";
  iconProps?: SvgIconProps;
}

export type TFormTextFieldIconedProps = IWithIconProps & TextFieldProps & Reffered<HTMLInputElement>;

export const FormTextFieldIconed = forwardRef<HTMLInputElement, TFormTextFieldIconedProps>((props, ref) => {
  const { position, icon: Icon, InputProps, iconProps, ...restProps } = props;

  return (
    <FormTextField
      ref={ref}
      {...restProps}
      InputProps={{
        ...InputProps,
        startAdornment: (
          <InputAdornment position={position}>
            <Icon {...iconProps} />
          </InputAdornment>
        ),
        sx: (theme) => {
          const {
            palette: {
              mainColors: { black },
              greyColors: { grey }
            }
          } = theme;

          return {
            "& path": {
              fill: grey
            },

            "&:has(input:not(:placeholder-shown)) path": {
              fill: black
            },

            "&.Mui-focused path": {
              fill: black
            }
          };
        }
      }}
    />
  );
});
