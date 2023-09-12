import { Typography } from "@mui/material";

import * as S from "./styled";

interface ISearchHeadingProps {
	query: string;
}

export const SearchPageHeading = ({ query }: ISearchHeadingProps) => {
	return (
		<S.Stack>
			<Typography variant="HHeader">{`Search Results: ${query}`}</Typography>
		</S.Stack>
	);
};
