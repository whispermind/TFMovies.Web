import { styled } from "@mui/material";
import { Favorite } from "@mui/icons-material";

export const FavoriteFilledIcon = styled(Favorite)(({ theme }) => ({
	"& path": { fill: `${theme.palette.mainColors.main} !important` }
}));
