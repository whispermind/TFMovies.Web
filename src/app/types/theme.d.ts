import { CSSProperties } from "react";

export interface IMainColors {
	main?: string;
	white?: string;
	lightGrey?: string;
	black?: string;
	graphite?: string;
}

export interface IAccentColors {
	orange?: string;
	lightOrange?: string;
}

export interface IGreyColors {
	grey?: string;
	strokeGrey?: string;
	softGrey?: string;
}

export interface IAdditionalColors {
	errorRed?: string;
}

type TExtendedButtonsVariants = "customOutlined" | "second" | "ghost" | "signup" | "close";

interface IPalette {
	mainColors: IMainColors;
	accentColors: IAccentColors;
	greyColors: IGreyColors;
	additionalColors: IAdditionalColors;
}

interface IPaletteColors {
	white?: string;
	lightGrey?: string;
	black?: string;
	graphite?: string;
	red?: string;
	lightOrange?: string;
	grey?: string;
	strokeGrey?: string;
	errorRed?: string;
}

interface ITypoVariants {
	Input: CSSProperties;
	HHeader: CSSProperties;
	HBody: CSSProperties;
	HBodyBold: CSSProperties;
	Sector: CSSProperties;
	ABody: CSSProperties;
	ABodyBold: CSSProperties;
	ABodyItalic: CSSProperties;
	ABodyUnderlined: CSSProperties;
	ABodyHyperlink: CSSProperties;
	ASubheader: CSSProperties;
	ASecondHeader: CSSProperties;
	FormHyperLink: CSSProperties;
	Logo: CSSProperties;
	SectorLink: CSSProperties;
	SBody: CSSProperties;
}

declare module "@mui/material/styles" {
	interface PaletteColor extends IPaletteColors {}

	interface SimplePaletteColorOptions extends IPaletteColors {}

	interface Palette extends IPalette {}

	interface PaletteOptions extends IPalette {}

	interface TypographyVariants extends ITypoVariants {}

	interface TypographyVariantsOptions extends ITypoVariants {}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides extends Record<keyof ITypoVariants, true> {}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides extends IPaletteColors {}
	interface ButtonPropsVariantOverrides extends Record<TExtendedButtonsVariants, true> {}
}

declare module "@mui/material/TextField" {
	interface TextFieldPropsColorOverrides extends IPaletteColors {}
}

declare module "@mui/material/AppBar" {
	interface AppBarPropsColorOverrides extends IPaletteColors {}
}

declare module "@mui/material/Link" {
	interface LinkPropsColorOverrides extends IPaletteColors {}
}
