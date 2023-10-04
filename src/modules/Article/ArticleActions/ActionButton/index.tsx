import { PropsWithChildren } from "react";

import * as Styled from "./styled";

interface IEditButtonsProps extends PropsWithChildren {
	onClick: () => void;
}

export const ActionButton = ({ onClick, children }: IEditButtonsProps) => {
	return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};
