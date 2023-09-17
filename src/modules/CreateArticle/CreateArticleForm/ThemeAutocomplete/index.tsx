import { SyntheticEvent } from "react";
import { Autocomplete } from "@mui/material";
import { Control } from "react-hook-form";

import { useGetThemes } from "../../../../common/hooks";
import { withController } from "../../../../common/hocs";
import * as Styled from "../styled";

import type { ICreateArticleForm, TStyledInputProps } from "../..";

interface IThemeAutocompleteProps {
	onChange: (e: SyntheticEvent, value: string | null) => void;
	control: Control<ICreateArticleForm>;
}

export const ThemeAutocomplete = ({ onChange: onThemeChange, control }: IThemeAutocompleteProps) => {
	const { data } = useGetThemes();

	const Themes = withController<ICreateArticleForm, TStyledInputProps>(Styled.TextField);

	return (
		<Autocomplete
			options={data || []}
			popupIcon={false}
			onChange={onThemeChange}
			renderInput={(props) => (
				<Themes
					{...props}
					variant="standard"
					placeholder="Start enter the theme..."
					name="theme"
					control={control}
				/>
			)}
		/>
	);
};
