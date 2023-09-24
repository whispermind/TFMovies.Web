import { useCallback, PropsWithChildren } from "react";
import { FavoriteBorder } from "@mui/icons-material";

import { FavoriteFilledIcon } from "../../Icons";
import { useOnClickAuthorized } from "../../../hooks";
import { useLikeArticleMutation, useUnlikeArticleMutation } from "../../../../modules/Main/api";
import { IconSizes } from "../../../enums";
import * as Styled from "./styled";

interface ILikeButtonProps {
	isLiked: boolean;
	id: string;
	likes?: number;
	size?: IconSizes;
}

export const LikeButton = ({ isLiked, id, likes, children, size }: PropsWithChildren<ILikeButtonProps>) => {
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

	const icon = isLiked ? <FavoriteFilledIcon fontSize={size} /> : <FavoriteBorder fontSize={size} />;

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
