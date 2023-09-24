import { useParams } from "react-router-dom";

import { useGetArticleQuery } from "../api";
import { PageSpinner, PageGrid } from "../../../common/components";
import { CardContent, Comments } from "..";
import * as Styled from "./styled";

export const ArticlePage = () => {
	const { id = "" } = useParams();
	const { data, isLoading } = useGetArticleQuery(id);

	return (
		<PageGrid container>
			<Styled.Stack>
				{isLoading ? (
					<PageSpinner />
				) : (
					<>
						<CardContent {...data} />
						<Comments data={data?.comments || []} />
					</>
				)}
			</Styled.Stack>
		</PageGrid>
	);
};
