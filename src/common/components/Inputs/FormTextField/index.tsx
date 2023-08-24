import { forwardRef, useState, FocusEvent, useCallback } from "react";
import { TextFieldProps } from "@mui/material";

import * as S from "./styled";

export const FormTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ placeholder, onFocus: propsOnFocus, onBlur: propsOnBlur, InputProps, ...restProps }, ref) => {
    const [placeholderStatus, setPlaceholderStatus] = useState(true);

    const onFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        if (propsOnFocus) propsOnFocus(e);
        setPlaceholderStatus(false);
      },
      [propsOnFocus, setPlaceholderStatus]
    );

    const onBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        if (propsOnBlur) propsOnBlur(e);
        setPlaceholderStatus(true);
      },
      [propsOnBlur, setPlaceholderStatus]
    );

    return (
      <S.TextField
        ref={ref}
        {...restProps}
        variant="standard"
        placeholder={(placeholderStatus && placeholder) || ""}
        InputProps={{ ...InputProps, disableUnderline: true }}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    );
  }
);
