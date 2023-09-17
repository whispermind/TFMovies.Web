import { useState, useCallback, MouseEvent } from "react";
import { ListItem } from "@mui/material";

import * as Styled from "./styled";

interface ISearchSubjectBarProps {
	onClick: (active: string) => void;
	defaultSubject?: string | null;
}

export const SearchSubjectBar = ({ onClick: onClickCb, defaultSubject }: ISearchSubjectBarProps) => {
	const buttonsDescription = ["articles", "users", "tags", "comments"];
	const defaultState = defaultSubject ? buttonsDescription.includes(defaultSubject) && defaultSubject : "articles";
	const [activeButton, setActiveButton] = useState(defaultState);

	const onClick = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			const buttonName = e.currentTarget.dataset.name || "";
			onClickCb(buttonName);
			setActiveButton(buttonName);
		},
		[onClickCb]
	);

	const Buttons = buttonsDescription.map((description) => (
		<ListItem
			disablePadding
			key={description}
		>
			<Styled.Button
				onClick={onClick}
				isActive={activeButton === description}
				data-name={description}
			>
				{description}
			</Styled.Button>
		</ListItem>
	));

	return <Styled.List>{Buttons}</Styled.List>;
};
