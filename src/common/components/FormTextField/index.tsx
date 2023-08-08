import { TextField, TextFieldProps } from "@mui/material";
import { useCallback, useState } from "react";

export const FormTextField = (props: TextFieldProps) => {
  const { sx, variant } = props
  const [inputValue, setInputValue] = useState("")

  const onChange = useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  }, [setInputValue])
  return <TextField {...props} onChange={onChange} value={inputValue} variant={variant || "outlined"} sx={sx} InputProps={
    {
      ...props.InputProps,
      style: {
        borderRadius: "8px",
        height: "44px",
        border: "2px",
        padding: "10px, 16px, 10px, 16px",
      }
    }
  } />
}