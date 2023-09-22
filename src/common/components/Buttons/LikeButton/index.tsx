import { useCallback, PropsWithChildren } from "react";
import { FavoriteBorder } from "@mui/icons-material";

import { FavoriteFilledIcon } from "../../Icons";
import { useLikeArticle, useUnlikeArticle, useOnClickAuthorized } from "../../../hooks";
import * as Styled from "./styled";

interface ILikeButtonProps {
	isLiked: boolean;
	id: string;
	likes?: number;
}

export const LikeButton = ({ isLiked, id, likes, children }: PropsWithChildren<ILikeButtonProps>) => {
	const [likeReq] = useLikeArticle();
	const [unlikeReq] = useUnlikeArticle();

	const listener = useCallback(() => {
		if (isLiked) {
			unlikeReq(id);
		} else {
			likeReq(id);
		}
	}, [isLiked, unlikeReq, likeReq, id]);

	const authorizedListener = useOnClickAuthorized(listener, "/signin");

	const icon = isLiked ? <FavoriteFilledIcon /> : <FavoriteBorder />;

	return (
		<Styled.Button
			likes={likes}
			onClick={authorizedListener}
		>
			{children}
			{icon}
		</Styled.Button>
	);
};
