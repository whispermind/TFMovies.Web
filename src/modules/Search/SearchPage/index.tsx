import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { SearchSubjectBar, SearchPageHeading, selectSearchQuery, resetSearchQuery, setSearchQuery } from "..";
import * as Styled from "./styled";

export const SearchPage = () => {
	const dispatch = useAppDispatch();
	const [params] = useSearchParams();
	const searchQuery = useAppSelector(selectSearchQuery);

	const subject = params.get("subject");
	const paramsQuery = params.get("query");

	const [searchSubject, setSearchSubject] = useState(subject || "articles");

	useEffect(() => {
		if (paramsQuery) dispatch(setSearchQuery(paramsQuery));
		return () => {
			dispatch(resetSearchQuery());
		};
	}, [dispatch, paramsQuery]);

	return (
		<Styled.Stack>
			<SearchPageHeading query={searchQuery || ""} />
			<Styled.Stack direction="row">
				<SearchSubjectBar
					onClick={setSearchSubject}
					defaultSubject={subject}
				/>
				<Styled.ContentWrapper />
			</Styled.Stack>
		</Styled.Stack>
	);
};
