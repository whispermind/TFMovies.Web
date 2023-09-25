import { styled, Typography as MuiTypography } from "@mui/material";

interface IStyledTypographyProps {
	isActive?: boolean;
}

export const Typography = styled(MuiTypography, { shouldForwardProp: (prop) => prop !== "isActive" })<IStyledTypographyProps>(({ isActive }) => ({
	fontWeight: isActive ? "800" : ""
}));
