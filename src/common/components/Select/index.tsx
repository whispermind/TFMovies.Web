import { ReactNode, useState, useCallback, SyntheticEvent, useMemo } from "react";
import { MenuItem, SelectProps, SelectChangeEvent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import * as Styled from "./styled";

import type { IStyledSelectProps } from "./styled/Select";

export interface ISelectProps extends SelectProps {
	data?: {
		name?: string;
		id?: string;
	}[];
	disableEmptyLane?: boolean;
}

export const Select = (props: ISelectProps & IStyledSelectProps) => {
	const { onChange: propsOnChange, onOpen: propsOnOpen, onClose: propsOnClose, data, placeholder, disableEmptyLane, ...restProps } = props;

	const [selected, setSelected] = useState<"placeholder" | string>("placeholder");
	const [isOpen, setIsOpen] = useState(false);

	const options = useMemo(
		() =>
			data?.map(({ name, id }) => (
				<MenuItem
					key={id}
					value={id}
				>
					{name}
				</MenuItem>
			)),
		[data]
	);

	const isPlaceholder = selected === "placeholder" && !isOpen;
	const isValue = useMemo(() => data?.find(({ id }) => id === selected), [data, selected]);

	const onChange = useCallback(
		(e: SelectChangeEvent<unknown>, element: ReactNode) => {
			if (e.target.value === "setPlaceholder") {
				e.target.value = "";
				setSelected("placeholder");
			} else {
				setSelected(e.target.value as string);
			}
			if (propsOnChange) propsOnChange(e, element);
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
			setTimeout(() => setIsOpen(false), 250);
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
				sx={isPlaceholder ? null : { display: "none" }}
			>
				{placeholder}
			</MenuItem>
			{!disableEmptyLane && (
				<MenuItem
					sx={isValue ? null : { display: "none" }}
					value="setPlaceholder"
				>
					‎
				</MenuItem>
			)}
			{options}
		</Styled.Select>
	);
};
