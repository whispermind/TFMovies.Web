import { useCallback, useState, forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";

export const FormTextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { variant } = props
  const [inputValue, setInputValue] = useState("")

  const onChange = useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  }, [setInputValue])

  return <TextField ref={ref} onChange={onChange} value={inputValue} variant={variant || "outlined"} {...props} InputProps={
    {
      ...props.InputProps,
      style: {
        borderRadius: "0.5rem",
        height: "2.75rem",
        border: "0.125rem",
        padding: "0.625rem 1rem",
      }
    }
  } />
})