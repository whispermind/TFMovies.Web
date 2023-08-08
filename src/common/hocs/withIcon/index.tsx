import React from 'react'
import { InputAdornment, InputProps } from '@mui/material'


export interface IWithIconProps {
  InputProps?: InputProps
  icon: JSX.Element
  position: "end" | "start"
}


export const withIcon = <T extends IWithIconProps, P>(
  Component: React.ComponentType<P>
) => {
  return ({ ...props }: T & P) => {
    const { position, icon: Icon } = props;

    return (<Component {...props} InputProps={{
      ...props.InputProps,
      startAdornment: (
        <InputAdornment position={position}>
          {Icon}
        </InputAdornment>
      ),
    }} />)
  }
}



