import { useSearchParams } from "react-router-dom";

import { useIsAuthorized } from "../../../../common/hooks";
import { SearchSubjectBar, SearchPageHeading, SearchArticles, SearchUsers } from "..";
import * as Styled from "./styled";

export const SearchPage = () => {
	const [params] = useSearchParams();
	const subject = params.get("subject");

	const access = useIsAuthorized();

	return (
		(access && (
			<Styled.Stack>
				<SearchPageHeading />
				<Styled.Stack direction="row">
					<SearchSubjectBar />
					<Styled.ContentWrapper>{subject === "users" ? <SearchUsers /> : <SearchArticles />}</Styled.ContentWrapper>
				</Styled.Stack>
			</Styled.Stack>
		)) ||
		null
	);
};
