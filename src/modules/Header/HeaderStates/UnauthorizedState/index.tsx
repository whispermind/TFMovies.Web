import { Button, Stack } from "@mui/material";

export const UnauthorizedState = () => {
  return (
    <Stack
      direction="row"
      columnGap={1.5}
    >
      <Button
        variant="ghost"
        sx={{ width: "200px" }}
        href="/signin"
      >
        Log In
      </Button>
      <Button
        variant="customOutlined"
        sx={{ width: "200px" }}
        href="/signup"
      >
        Sign Up
      </Button>
    </Stack>
  );
};
