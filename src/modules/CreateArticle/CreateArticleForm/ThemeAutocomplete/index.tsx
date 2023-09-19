import { SyntheticEvent, useMemo } from "react";
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

	const ThemesField = withController<ICreateArticleForm, TStyledInputProps>(Styled.TextField);
	const themes = useMemo(() => data?.map(({ name }) => name), [data]);

	return (
		<Autocomplete
			options={themes || []}
			popupIcon={false}
			onChange={onThemeChange}
			renderInput={(props) => (
				<ThemesField
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
