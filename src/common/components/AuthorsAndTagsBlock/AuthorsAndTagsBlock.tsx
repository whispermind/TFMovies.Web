import { Stack } from "@mui/material";

import { Authors } from "./Authors/Authors";
import { Tags } from "./Tags/Tags";

export const AuthorsAndTagsBlock = () => {
	return (
		<Stack gap='32px'>
			<Tags />
			<Authors />
		</Stack>
	);
}