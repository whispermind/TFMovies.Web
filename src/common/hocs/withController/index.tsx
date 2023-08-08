import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import React from 'react'

export const withController = <T extends FieldValues, P>(
  Component: React.ComponentType<P>
) => {
  return ({ ...props }: UseControllerProps<T> & P) => {
    const { field, fieldState } = useController(props)
    const componentProps = {
      ...props,
      ...field,
    }
    const { error } = fieldState
    return (
      <Component
        {...componentProps}
        error={!!error}
        helperText={error?.message}
      />
    )
  }
}

