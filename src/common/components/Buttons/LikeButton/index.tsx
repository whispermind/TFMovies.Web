import { useCallback, PropsWithChildren } from "react";
import { FavoriteBorder } from "@mui/icons-material";

import { FavoriteFilledIcon } from "../../Icons";
import { useOnClickAuthorized } from "../../../hooks";
import { useLikeArticleMutation, useUnlikeArticleMutation } from "../../../../modules/Main/api";
import * as Styled from "./styled";

interface ILikeButtonProps {
	isLiked: boolean;
	id: string;
	likes?: number;
}

export const LikeButton = ({ isLiked, id, likes, children }: PropsWithChildren<ILikeButtonProps>) => {
	const [likeReq] = useLikeArticleMutation();
	const [unlikeReq] = useUnlikeArticleMutation();

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
			amount={likes}
			onClick={authorizedListener}
		>
			{children}
			{icon}
		</Styled.Button>
	);
};
