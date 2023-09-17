import { ChangeEvent } from "react";
import { Controller, Control } from "react-hook-form";
import { Stack } from "@mui/material";

import * as Styled from "../styled";

import type { ICreateArticleForm } from "../..";

interface IFileInputProps {
	control: Control<ICreateArticleForm>;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const FileInput = ({ control, onChange: onFileUpload }: IFileInputProps) => {
	return (
		<Controller
			name="attachment"
			control={control}
			render={({ formState, field: { onBlur, onChange, ref, name } }) => (
				<Stack>
					<Styled.FileInputWrapper
						component="label"
						variant="contained"
					>
						<Styled.FileInput
							name={name}
							type="file"
							onBlur={onBlur}
							onChange={(...args) => {
								onChange(...args);
								onFileUpload(...args);
							}}
							inputProps={{ accept: "image/*", placeholder: "Add Cover Image" }}
							inputRef={ref}
							required
						/>
						Add Cover Image
					</Styled.FileInputWrapper>
					<Styled.FieldErrorMessage>{formState.errors.attachment?.message}</Styled.FieldErrorMessage>
				</Stack>
			)}
		/>
	);
};
