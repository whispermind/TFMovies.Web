import { useCallback, PropsWithChildren } from "react";
import { FavoriteBorder } from "@mui/icons-material";

import { FavoriteFilledIcon } from "../../Icons";
import { useLikeArticle, useUnlikeArticle } from "../../../hooks";
import * as Styled from "./styled";

interface ILikeButtonProps {
	isLiked: boolean;
	id: string;
	likes?: number;
}

export const LikeButton = ({ isLiked, id, likes, children }: PropsWithChildren<ILikeButtonProps>) => {
	const [likeReq] = useLikeArticle();
	const [unlikeReq] = useUnlikeArticle();

	const onLike = useCallback(() => likeReq(id), [likeReq, id]);
	const onUnlike = useCallback(() => unlikeReq(id), [unlikeReq, id]);

	const listener = isLiked ? onUnlike : onLike;
	const icon = isLiked ? <FavoriteFilledIcon /> : <FavoriteBorder />;

	return (
		<Styled.Button
			likes={likes}
			onClick={listener}
		>
			{children}
			{icon}
		</Styled.Button>
	);
};
