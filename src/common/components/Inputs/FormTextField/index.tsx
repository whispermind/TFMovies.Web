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
            shape: { borderRadius },
            typography: { Input: { fontSize, lineHeight } },
            palette: {
              greyColors: { strokeGrey, grey },
              mainColors: { black },
              additionalColors: { errorRed }
            },
          } = theme;

          const additionalStyles = typeof InputProps?.sx === 'function' ? InputProps.sx(theme) : InputProps?.sx || {};

          return {
            height: "44px",
            border: `2px solid ${strokeGrey}`,
            borderRadius: `${borderRadius}px`,
            padding: "0.625rem 1rem",
            fontSize,
            lineHeight,

            "& input": {
              padding: 0
            },

            "& input::placeholder": {
              color: grey,
              opacity: 1
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

            ...additionalStyles
          }
        },
      }
    }
  />
})