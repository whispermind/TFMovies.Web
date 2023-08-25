import { PropsWithChildren } from "react";
import { Stack, Typography } from "@mui/material";

interface ILinksWrapper extends PropsWithChildren {
  heading: string;
}

export const LinksWrapper = ({ heading, children }: ILinksWrapper) => {
  return (
    <div>
      <Typography variant="Sector">{heading}</Typography>
      <Stack
        mt={1.5}
        direction="column"
      >
        {children}
      </Stack>
    </div>
  );
};
