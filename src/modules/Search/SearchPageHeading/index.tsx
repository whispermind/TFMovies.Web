import { Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import * as Styled from "./styled";

export const SearchPageHeading = () => {
	const [params] = useSearchParams();
	const query = params.get("query");

	params.get("");
	return (
		<Styled.Stack>
			<Typography
				variant="HHeader"
				textTransform="none"
			>{`Search Results: ${query || ""}`}</Typography>
		</Styled.Stack>
	);
};
