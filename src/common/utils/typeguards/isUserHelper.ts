import type { IGetUsersResponseData } from "../../../app/api/Users";

export function isUser(user: unknown): user is IGetUsersResponseData {
	return (
		typeof user === "object" &&
		user !== null &&
		"page" in user &&
		"limit" in user &&
		"totalPages" in user &&
		"totalRecords" in user &&
		"data" in user &&
		typeof user.data === "object" &&
		user.data !== null &&
		user.data instanceof Array &&
		(!user.data.length || ("id" in user.data[0] && "nickname" in user.data[0] && "role" in user.data[0]))
	);
}
