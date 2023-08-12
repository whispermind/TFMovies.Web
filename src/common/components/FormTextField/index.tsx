import { forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";

export const FormTextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { InputProps } = props

  return <TextField ref={ref} {...props} variant="standard"
    InputProps={
      {
        ...InputProps,
        disableUnderline: true,
        sx: (theme) => {
          const {
            typography: { Input: { fontSize, lineHeight } },
            palette: {
              greyColors: { strokeGrey, grey },
              mainColors: { black },
              additionalColors: { errorRed }
            },
          } = theme;

          return {
            height: "2.75rem",
            border: `0.125rem solid ${strokeGrey}`,
            borderRadius: "0.5rem",
            padding: "0.625rem 1rem",
            fontSize,
            lineHeight,

            "& input": {
              padding: 0
            },

            "& input:placeholder-shown": {
              color: grey,
            },

            ":hover": {
              borderColor: grey,
            },

            "&:has(+ .Mui-error)": {
              borderColor: errorRed,
              "& + .Mui-error": {
                marginTop: 0,
                marginLeft: "0.75rem"
              }
            },

            "&:has(input:active)": {
              borderColor: "#b54f4f",
            },

            "&:has(input:not(:placeholder-shown))": {
              color: black
            },

            "&.Mui-focused": {
              color: black,
              borderColor: "#b54f4f",
              "& input::placeholder": { color: "transparent" },
            },
            ...InputProps?.sx
          }
        },
      }
    }
  />
})