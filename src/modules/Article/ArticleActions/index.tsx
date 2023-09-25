import { LikeButton } from "../../../common/components";
import { IconSizes } from "../../../common/enums";
import { CommentsButton } from "./CommentsButton";
import * as Styled from "./styled";

interface IArticleActions {
	likesAmount?: number;
	commentsAmount?: number;
	isLiked?: boolean;
	id?: string;
}

export const ArticleActions = ({ likesAmount, commentsAmount, isLiked, id }: IArticleActions) => {
	return (
		<Styled.Stack>
			<LikeButton
				id={id || ""}
				likesAmount={likesAmount}
				isLiked={!!isLiked}
				size={IconSizes.large}
			/>
			<CommentsButton
				commentsAmount={commentsAmount}
				size={IconSizes.large}
			/>
		</Styled.Stack>
	);
};
