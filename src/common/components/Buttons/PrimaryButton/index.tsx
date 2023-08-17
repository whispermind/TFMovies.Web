import { Button, ButtonProps, Typography } from "@mui/material";

export interface IPrimaryButtonProps extends ButtonProps {
  innerText: string;
}

export const PrimaryButton = (props: IPrimaryButtonProps) => {
  const { innerText, ...restProps } = props;

  return (
    <Button {...restProps}>
      <Typography variant="Input">{innerText}</Typography>
    </Button>
  );
};
