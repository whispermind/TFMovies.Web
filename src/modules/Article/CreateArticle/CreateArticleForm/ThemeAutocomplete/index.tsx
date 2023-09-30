import { SyntheticEvent, useCallback, useMemo } from "react";
import { Autocomplete } from "@mui/material";
import { Control } from "react-hook-form";

import { useGetThemesQuery, IGetThemeResponseData } from "../../../../Main/api";
import { withController } from "../../../../../common/hocs";
import * as Styled from "../styled";

import type { ICreateArticleForm, IStyledInputProps } from "../..";

interface IThemeAutocompleteProps {
	onChange: (theme: IGetThemeResponseData) => void;
	control: Control<ICreateArticleForm>;
	value: string;
}

export const ThemeAutocomplete = ({ onChange: onThemeChange, control, value }: IThemeAutocompleteProps) => {
	const { data } = useGetThemesQuery();

	const themes = useMemo(() => data?.map(({ name }) => name), [data]) || [];

	const onChange = useCallback(
		(_: SyntheticEvent, themeName: string | null) => {
			const theme = data?.find(({ name }) => name === themeName);
			if (theme) onThemeChange(theme);
		},
		[onThemeChange, data]
	);

	const ThemesField = withController<ICreateArticleForm, IStyledInputProps>(Styled.TextField);

	return (
		<Autocomplete
			options={themes}
			popupIcon={false}
			onChange={onChange}
			value={value}
			defaultValue=""
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
