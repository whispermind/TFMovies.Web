import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { SearchSubjectBar, SearchPageHeading, selectSearchQuery, resetSearchQuery, setSearchQuery } from "..";
import * as S from "./styled";

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
		<S.Stack>
			<SearchPageHeading query={searchQuery || ""} />
			<S.Stack direction="row">
				<SearchSubjectBar
					onClick={setSearchSubject}
					defaultSubject={subject}
				/>
				<S.ContentWrapper />
			</S.Stack>
		</S.Stack>
	);
};
