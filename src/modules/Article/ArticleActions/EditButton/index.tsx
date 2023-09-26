import EditIcon from "@mui/icons-material/Edit";

import * as Styled from "./styled";

interface IEditButtonsProps {
	onClick: () => void;
}

export const EditButton = ({ onClick }: IEditButtonsProps) => {
	return (
		<Styled.Button onClick={onClick}>
			<EditIcon />
		</Styled.Button>
	);
};
