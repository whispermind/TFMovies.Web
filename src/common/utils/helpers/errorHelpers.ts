interface IApiError {
	data: { errorMessage: string };
}

export function isApiError(error: unknown): error is IApiError {
	return (
		typeof error === "object" &&
		error !== null &&
		"status" in error &&
		"data" in error &&
		typeof error.data === "object" &&
		error.data !== null &&
		"errorMessage" in error.data
	);
}
