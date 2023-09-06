declare interface Tokened {
	token: string;
}

declare interface IStatedForm<T> {
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

declare interface IApiResponse {
	status: number;
	data?: {
		errorMessage: string;
	};
}
