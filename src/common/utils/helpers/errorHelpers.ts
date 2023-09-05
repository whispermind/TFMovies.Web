interface IApiError {
	data: { ErrorMessage: string };
}

export function isApiError(error: unknown): error is IApiError {
	return (
		typeof error === "object" &&
		error !== null &&
		"status" in error &&
		"data" in error &&
		typeof error.data === "object" &&
		error.data !== null &&
		"ErrorMessage" in error.data
	);
}

export function isErrorWithMessage(error: unknown): error is { message: string } {
	return typeof error === "object" && error !== null && "message" in error && typeof (error as any).message === "string";
}
