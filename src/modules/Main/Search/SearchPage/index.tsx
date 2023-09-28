import { useSearchParams } from "react-router-dom";

import { useIsAuthorized } from "../../../../common/hooks";
import { SearchSubjectBar, SearchPageHeading } from "..";
import { useGetArticlesQuery } from "../../api";
import * as Styled from "./styled";

export const SearchPage = () => {
	const [params] = useSearchParams();
	const subject = params.get("subject");
	const query = params.get("query");

	const requestQuery = subject && query ? `?${subject}=${query}` : "";
	useGetArticlesQuery(requestQuery);

	useIsAuthorized();

	return (
		<Styled.Stack>
			<SearchPageHeading />
			<Styled.Stack direction="row">
				<SearchSubjectBar />
				<Styled.ContentWrapper />
			</Styled.Stack>
		</Styled.Stack>
	);
};
