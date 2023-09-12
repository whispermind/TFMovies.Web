import { useState, useCallback, MouseEvent } from "react";
import { ListItem } from "@mui/material";

import * as S from "./styled";

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
			<S.Button
				onClick={onClick}
				isActive={activeButton === description}
				data-name={description}
			>
				{description}
			</S.Button>
		</ListItem>
	));

	return <S.List>{Buttons}</S.List>;
};
