import { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

import * as S from "../styled";

interface ITopFilteringListProps extends PropsWithChildren {
	subject: string;
}

export const FilteringListWrapper = ({ subject, children }: ITopFilteringListProps) => {
	return (
		<S.FilteringSubjectContainer>
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
		</S.FilteringSubjectContainer>
	);
};
