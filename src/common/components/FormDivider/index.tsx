import { PropsWithChildren } from "react";
import { DividerProps, Divider, Typography } from "@mui/material";

export const FormDivider = ({ sx, children, ...restProps }: PropsWithChildren<DividerProps>) => {
  return (
    <Divider
      {...restProps}
      sx={{
        m: "1.5rem 0",
        "& > span": { p: "0 2.5rem" },
        ...sx
      }}
    >
      <Typography variant="HBody">{children}</Typography>
    </Divider>
  );
};
