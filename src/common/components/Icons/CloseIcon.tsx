import MuiCloseIcon from "@mui/icons-material/Close";

export const CloseIcon = () => {
  return (
    <MuiCloseIcon
      sx={(theme) => {
        const {
          palette: {
            mainColors: { graphite }
          }
        } = theme;
        return {
          color: graphite
        };
      }}
    />
  );
};
