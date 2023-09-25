import { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

import * as Styled from "../styled";

interface ITopFilteringListProps extends PropsWithChildren {
	subject: string;
}

export const FilteringListWrapper = ({ subject, children }: ITopFilteringListProps) => {
	return (
		<Styled.FilteringSubjectContainer>
			<div>
				<Typography variant="Section">
					Top
					<Typography
						variant="Section"
						color="mainColors.main"
					>
						{subject}
					</Typography>
				</Typography>
			</div>
			{children}
		</Styled.FilteringSubjectContainer>
	);
};
