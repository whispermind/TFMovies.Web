declare interface Tokened {
	token: string;
}

declare interface ILoadingForm<T> {
	onSubmit: (formData: T) => void;
	isLoading: boolean;
}

declare interface Reffered<T> {
	ref?: React.ForwardedRef<T>;
}

declare interface StylesOverrides<T, S> {
	variants: {
		props: { variant: T };
		style: S;
	}[];
}

declare interface IResponse<T> {
	status: number;
	error?: string;
	data?: T;
}

declare interface IPaginationResponse<T> {
	page: number;
	limit: number;
	totalPages: number;
	totalRecords: number;
	data: T;
}
