import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetUsersQuery } from "../../api";
import { PageSpinner } from "../../../../common/components";
import { UserCard } from "./UserCard";

export const SearchUsers = () => {
	const [params] = useSearchParams();
	const subject = params.get("subject");
	const query = params.get("query");

	const requestQuery = subject && query ? `?${subject}=${query}` : "";
	const { data, isLoading, isSuccess } = useGetUsersQuery(requestQuery);

	const usersCards = useMemo(
		() =>
			data?.data.map((user) => (
				<UserCard
					key={user.id}
					{...user}
				/>
			)),
		[data]
	);

	return (
		<>
			{isLoading && <PageSpinner />}
			{isSuccess && usersCards && usersCards}
		</>
	);
};
