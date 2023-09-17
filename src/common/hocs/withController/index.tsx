import { ComponentType } from "react";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";

export const withController =
	<T extends FieldValues, P>(Component: ComponentType<P>) =>
	({ ...props }: UseControllerProps<T> & P) => {
		const { field, fieldState } = useController(props);
		const onChange = (...args: unknown[]) => {
			field.onChange(...args);
			if ("onChange" in props) (props.onChange as Function)(...args);
		};
		const componentProps = {
			...props,
			...field
		};
		const { error } = fieldState;
		return (
			<Component
				{...componentProps}
				onChange={onChange}
				error={!!error}
				helperText={error?.message}
			/>
		);
	};
