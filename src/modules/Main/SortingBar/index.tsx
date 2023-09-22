import { useState, useCallback, MouseEvent, useMemo } from "react";
import { Button, SelectChangeEvent } from "@mui/material";
import { Select } from "../../../common/components";

import { useGetThemes } from "../../../common/hooks";
import * as Styled from "./styled";

interface ISortingBarProps {
	onSortingChange: (query: string) => void;
}

export const SortingBar = ({ onSortingChange }: ISortingBarProps) => {
	const [sorting, setSorting] = useState("created");
	const [themeSorting, setThemeSorting] = useState("");

	const { data } = useGetThemes();

	const onSort = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			setSorting(e.currentTarget.dataset.sort!);
			onSortingChange(`sort=${sorting}&theme=${themeSorting}`);
		},
		[setSorting, onSortingChange, sorting, themeSorting]
	);

	const onSortByTheme = useCallback(
		({ target: { value } }: SelectChangeEvent<unknown>) => {
			const theme = value === "placeholder" ? "" : (value as string);
			setThemeSorting(theme);
			onSortingChange(`sort=${sorting}&theme=${themeSorting}`);
		},
		[setThemeSorting, onSortingChange, sorting, themeSorting]
	);

	const themes = useMemo(() => data?.map(({ name }) => name), [data]);

	return (
		<Styled.List>
			<Styled.ListItem>
				<Button
					variant="ghost"
					fullWidth
					onClick={onSort}
					data-sort="createdAt"
				>
					<Styled.Typography
						variant="Input"
						isActive={sorting === "created"}
					>
						Last Articles
					</Styled.Typography>
				</Button>
			</Styled.ListItem>
			<Styled.ListItem>
				<Button
					variant="ghost"
					fullWidth
					onClick={onSort}
					data-sort="liked"
				>
					<Styled.Typography
						variant="Input"
						isActive={sorting === "liked"}
					>
						Top Rated
					</Styled.Typography>
				</Button>
			</Styled.ListItem>
			<Styled.ListItem>
				<Select
					data={themes || []}
					placeholder="Sort by Theme"
					onChange={onSortByTheme}
				/>
			</Styled.ListItem>
		</Styled.List>
	);
};
