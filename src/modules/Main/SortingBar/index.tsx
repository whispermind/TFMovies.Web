import { useState, useCallback, MouseEvent } from "react";
import { Button, SelectChangeEvent } from "@mui/material";

import { Select } from "../../../common/components";
import { useGetThemesQuery } from "../../../app/api/Themes";
import * as Styled from "./styled";

interface ISortingBarProps {
	onSortingChange: (query: string) => void;
	initSort: string;
}

export const SortingBar = ({ onSortingChange, initSort }: ISortingBarProps) => {
	const [sorting, setSorting] = useState(initSort);
	const [themeFiltering, setThemeSorting] = useState("");

	const { data } = useGetThemesQuery();

	const onSort = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			const datasetSorting = e.currentTarget.dataset.sort!;
			setSorting(datasetSorting);
			const sort = `&sort=${datasetSorting}`;
			const filtering = (themeFiltering && themeFiltering !== "placeholder" && `&themeid=${themeFiltering}`) || "";
			onSortingChange(`${sort}${filtering}`);
		},
		[setSorting, onSortingChange, themeFiltering]
	);

	const onSortByTheme = useCallback(
		({ target: { value } }: SelectChangeEvent<unknown>) => {
			setThemeSorting(value as string);
			onSortingChange(`&sort=${sorting}&themeid=${value}`);
		},
		[setThemeSorting, onSortingChange, sorting]
	);

	return (
		<Styled.List>
			<Styled.ListItem>
				<Button
					variant="ghost"
					fullWidth
					onClick={onSort}
					data-sort="created"
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
					data-sort="rated"
				>
					<Styled.Typography
						variant="Input"
						isActive={sorting === "rated"}
					>
						Top Rated
					</Styled.Typography>
				</Button>
			</Styled.ListItem>
			<Styled.ListItem>
				<Select
					data={data || []}
					placeholder="Sort by Theme"
					onChange={onSortByTheme}
					width="180px"
				/>
			</Styled.ListItem>
		</Styled.List>
	);
};
