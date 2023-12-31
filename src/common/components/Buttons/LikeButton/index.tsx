import { useCallback, PropsWithChildren, useState, useEffect } from "react";
import { FavoriteBorder } from "@mui/icons-material";

import { FavoriteFilledIcon } from "../../Icons";
import { useOnClickAuthorized } from "../../../hooks";
import { useLikeArticleMutation, useUnlikeArticleMutation } from "../../../../app/api/Articles";
import { IconSizes, Routes } from "../../../enums";
import * as Styled from "./styled";

interface ILikeButtonProps {
	isLiked: boolean;
	id: string;
	likesAmount?: number;
	size?: IconSizes;
}

export const LikeButton = ({ isLiked, id, likesAmount, children, size }: PropsWithChildren<ILikeButtonProps>) => {
	const [likedInnerState, setLikedInnerState] = useState(isLiked);

	const [likeReq] = useLikeArticleMutation();
	const [unlikeReq] = useUnlikeArticleMutation();

	const listener = useCallback(() => {
		if (isLiked) {
			unlikeReq(id);
			setLikedInnerState(false);
		} else {
			likeReq(id);
			setLikedInnerState(true);
		}
	}, [unlikeReq, likeReq, id, isLiked, setLikedInnerState]);

	const authorizedListener = useOnClickAuthorized(listener, Routes.signIn);

	const icon = likedInnerState ? <FavoriteFilledIcon fontSize={size} /> : <FavoriteBorder fontSize={size} />;

	useEffect(() => {
		setLikedInnerState(isLiked);
	}, [isLiked, setLikedInnerState]);

	return (
		<Styled.Button
			amount={likesAmount}
			onClick={authorizedListener}
		>
			{children}
			{icon}
		</Styled.Button>
	);
};
