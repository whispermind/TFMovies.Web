import { ReactNode, useState, useCallback, SyntheticEvent } from "react";
import { MenuItem, SelectProps, SelectChangeEvent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import * as S from "./styled";

interface ISelectProps extends SelectProps {
	data: string[];
}

export const Select = (props: ISelectProps) => {
	const { onChange: propsOnChange, onOpen: propsOnOpen, onClose: propsOnClose, data, placeholder, ...restProps } = props;

	const [value, setValue] = useState<"placeholder" | string>("placeholder");
	const [isOpen, setIsOpen] = useState(false);

	const options = data?.map((option) => (
		<MenuItem
			key={option}
			value={option}
		>
			{option}
		</MenuItem>
	));

	const isPlaceholder = value === "placeholder" && !isOpen;
	const isValue = data?.includes(value);

	const onChange = useCallback(
		(event: SelectChangeEvent<unknown>, element: ReactNode) => {
			const eventValue = event.target.value === "setPlaceholder" ? "placeholder" : event.target.value;
			setValue(eventValue as string);
			if (propsOnChange) propsOnChange(event, element);
		},
		[setValue, propsOnChange]
	);

	const onOpen = useCallback(
		(e: SyntheticEvent) => {
			setIsOpen(true);
			if (propsOnOpen) propsOnOpen(e);
		},
		[setIsOpen, propsOnOpen]
	);

	const onClose = useCallback(
		(e: SyntheticEvent) => {
			setTimeout(() => setIsOpen(false), 500);
			if (propsOnClose) propsOnClose(e);
		},
		[setIsOpen, propsOnClose]
	);

	return (
		<S.Select
			value={value}
			onChange={onChange}
			onOpen={onOpen}
			onClose={onClose}
			{...restProps}
			IconComponent={ArrowForwardIcon}
		>
			<MenuItem
				value="placeholder"
				sx={isPlaceholder && !isOpen ? null : { display: "none" }}
			>
				{placeholder}
			</MenuItem>
			<MenuItem
				sx={isValue ? null : { display: "none" }}
				value="setPlaceholder"
			>
				‎
			</MenuItem>
			{options}
		</S.Select>
	);
};
