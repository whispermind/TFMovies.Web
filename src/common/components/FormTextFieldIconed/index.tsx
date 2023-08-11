import { InputAdornment, InputProps, TextFieldProps } from '@mui/material'

import { FormTextField } from '../FormTextField'

export interface IWithIconProps  {
  InputProps?: InputProps
  icon: JSX.Element
  position: "end" | "start"
}

export type TFormTextFieldIconedProps = IWithIconProps & TextFieldProps & Reffered<HTMLInputElement>

export const FormTextFieldIconed = (
  props: TFormTextFieldIconedProps
) => {
    const { position, icon: Icon } = props;

    return (
    <FormTextField {...props} InputProps={{
      startAdornment: (
        <InputAdornment position={position}>
          {Icon}
        </InputAdornment>
      ),
      ...props.InputProps,
    }} />)
  }



