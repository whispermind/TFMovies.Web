import { SyntheticEvent, useCallback, useMemo } from "react";
import { Control } from "react-hook-form";
import { Autocomplete } from "@mui/material";

import { useGetThemesQuery, IGetThemeResponseData } from "../../../../../app/api/Themes";
import { withController } from "../../../../../common/hocs";
import { TextField } from "../styled";

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
		(_: SyntheticEvent, themeName: unknown) => {
			const theme = data?.find(({ name }) => name === themeName);
			if (theme) onThemeChange(theme);
		},
		[onThemeChange, data]
	);

	const ThemesField = withController<ICreateArticleForm, IStyledInputProps>(TextField);

	return (
		<Autocomplete
			options={themes}
			popupIcon={false}
			onChange={onChange}
			defaultValue={themes[0] || ""}
			value={value}
			isOptionEqualToValue={(option, currentValue) => option === currentValue}
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
