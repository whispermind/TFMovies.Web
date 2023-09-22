import { SyntheticEvent, useCallback, useMemo } from "react";
import { Autocomplete } from "@mui/material";
import { Control } from "react-hook-form";

import { useGetThemes } from "../../../../common/hooks";
import { withController } from "../../../../common/hocs";
import * as Styled from "../styled";

import type { ICreateArticleForm, TStyledInputProps } from "../..";
import type { IGetThemeResponseData } from "../../../../app/api";

interface IThemeAutocompleteProps {
	onChange: (theme: IGetThemeResponseData) => void;
	control: Control<ICreateArticleForm>;
}

export const ThemeAutocomplete = ({ onChange: onThemeChange, control }: IThemeAutocompleteProps) => {
	const { data } = useGetThemes();

	const themes = useMemo(() => data?.map(({ name }) => name), [data]) || [];

	const onChange = useCallback(
		(e: SyntheticEvent, themeName: string | null) => {
			const theme = data?.find(({ name }) => name === themeName);
			if (theme) onThemeChange(theme);
		},
		[onThemeChange, data]
	);

	const ThemesField = withController<ICreateArticleForm, TStyledInputProps>(Styled.TextField);

	return (
		<Autocomplete
			options={themes}
			popupIcon={false}
			onChange={onChange}
			renderInput={(props) => (
				<ThemesField
					{...props}
					variant="standard"
					placeholder="Start enter the theme..."
					name="ThemeId"
					control={control}
				/>
			)}
		/>
	);
};
