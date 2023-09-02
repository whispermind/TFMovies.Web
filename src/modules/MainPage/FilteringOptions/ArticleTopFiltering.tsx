import { Stack } from "@mui/material";

import { TopAuthorsFiltering } from "./TopAuthorsFiltering/TopAuthorsFiltering";
import { TopTagsFiltering } from "./TopTagsFiltering/TopTagsFiltering";

export const ArticleTopFiltering = () => {
	return (
		<Stack alignItems='normal' gap='32px'>
			<TopTagsFiltering />
			<TopAuthorsFiltering />
		</Stack>
	);
}