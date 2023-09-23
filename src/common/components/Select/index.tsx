import { ReactNode, useState, useCallback, SyntheticEvent, useMemo } from "react";
import { MenuItem, SelectProps, SelectChangeEvent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import * as Styled from "./styled";

export interface ISelectProps extends SelectProps {
	data: {
		description: string;
		value?: string;
	}[];
}

export const Select = (props: ISelectProps) => {
	const { onChange: propsOnChange, onOpen: propsOnOpen, onClose: propsOnClose, data, placeholder, ...restProps } = props;

	const [selected, setSelected] = useState<"placeholder" | string>("placeholder");
	const [isOpen, setIsOpen] = useState(false);

	const options = data?.map(({ description, value }) => (
		<MenuItem
			key={value}
			value={value}
		>
			{description}
		</MenuItem>
	));

	const isPlaceholder = selected === "placeholder" && !isOpen;
	const isValue = useMemo(() => data?.find(({ value }) => value === selected), [data, selected]);

	const onChange = useCallback(
		(event: SelectChangeEvent<unknown>, element: ReactNode) => {
			const eventValue = event.target.value === "setPlaceholder" ? "placeholder" : event.target.value;
			setSelected(eventValue as string);
			if (propsOnChange) propsOnChange(event, element);
		},
		[setSelected, propsOnChange]
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
		<Styled.Select
			value={selected}
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
		</Styled.Select>
	);
};
