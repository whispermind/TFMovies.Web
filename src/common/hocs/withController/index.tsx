import { ComponentType } from "react";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";

export const withController =
	<T extends FieldValues, P>(Component: ComponentType<P>) =>
	({ ...props }: UseControllerProps<T> & P) => {
		const { field, fieldState } = useController(props);
		const componentProps = {
			...props,
			...field
		};
		const { error } = fieldState;
		return (
			<Component
				{...componentProps}
				error={!!error}
				helperText={error?.message}
			/>
		);
	};
