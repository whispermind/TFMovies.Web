import { Typography } from "@mui/material";

import * as Styled from "./styled";

interface ISearchHeadingProps {
	query: string;
}

export const SearchPageHeading = ({ query }: ISearchHeadingProps) => {
	return (
		<Styled.Stack>
			<Typography variant="HHeader">{`Search Results: ${query}`}</Typography>
		</Styled.Stack>
	);
};
