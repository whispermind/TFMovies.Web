import { PropsWithChildren } from "react";
import { DividerProps, Divider, Typography } from "@mui/material";

export function FormDivider({ sx, children, ...restProps }: PropsWithChildren<DividerProps>) {
  return (
    <Divider
      {...restProps}
      sx={{
        margin: "1.5rem 0",
        "& > span": { padding: "0 2.5rem" },
        ...sx
      }}
    >
      <Typography variant="HBody">{children}</Typography>
    </Divider>
  );
}
