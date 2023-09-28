import { useState, useCallback, MouseEvent, useMemo } from "react";
import { ListItem } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import * as Styled from "./styled";

const buttonsDescription = ["articles", "users", "tags", "comments"];

export const SearchSubjectBar = () => {
	const [params, setSearchParams] = useSearchParams();
	const subject = params.get("subject");
	const initActiveButton = subject && buttonsDescription.includes(subject) ? subject : "articles";
	const [activeButton, setActiveButton] = useState(initActiveButton);

	const onClick = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			const buttonName = e.currentTarget.dataset.name!;
			params.set("subject", buttonName);
			setSearchParams(params, { replace: true });
			setActiveButton(buttonName);
		},
		[setSearchParams, params]
	);

	const Buttons = useMemo(
		() =>
			buttonsDescription.map((description) => (
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
			)),
		[activeButton, onClick]
	);

	return <Styled.List>{Buttons}</Styled.List>;
};
