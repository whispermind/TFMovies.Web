import { useState, useCallback, MouseEvent } from "react";
import { Button, SelectChangeEvent, Typography } from "@mui/material";
import { Select } from "../../../common/components";

import { useGetThemes } from "../../../common/hooks";
import * as S from "./styled";

interface ISortingBarProps {
	onSortingChange: (query: string) => void;
}

export const SortingBar = ({ onSortingChange }: ISortingBarProps) => {
	const [sorting, setSorting] = useState("createdAt");
	const [themeSorting, setThemeSorting] = useState("");

	const { data } = useGetThemes();

	const onSort = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			setSorting(e.currentTarget.dataset.sort!);
			onSortingChange(`?_sort=${sorting},theme=${themeSorting}`);
		},
		[setSorting, onSortingChange, sorting, themeSorting]
	);

	const onSortByTheme = useCallback(
		({ target: { value } }: SelectChangeEvent<unknown>) => {
			const theme = value === "placeholder" ? "" : (value as string);
			setThemeSorting(theme);
			onSortingChange(`?_sort=${sorting},theme=${themeSorting}`);
		},
		[setThemeSorting, onSortingChange, sorting, themeSorting]
	);

	const isLastArticle = sorting === "createdAt";

	return (
		<S.List>
			<S.ListItem>
				<Button
					variant="ghost"
					fullWidth
					onClick={onSort}
					data-sort="createdAt"
				>
					<Typography
						variant="Input"
						fontWeight={isLastArticle ? "800" : ""}
					>
						Last Articles
					</Typography>
				</Button>
			</S.ListItem>
			<S.ListItem>
				<Button
					variant="ghost"
					fullWidth
					onClick={onSort}
					data-sort="liked"
				>
					<Typography
						variant="Input"
						fontWeight={isLastArticle ? "" : "800"}
					>
						Top Rated
					</Typography>
				</Button>
			</S.ListItem>
			<S.ListItem>
				<Select
					data={data || []}
					placeholder="Sort by Theme"
					onChange={onSortByTheme}
				/>
			</S.ListItem>
		</S.List>
	);
};
