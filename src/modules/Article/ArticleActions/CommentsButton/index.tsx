import { useCallback } from "react";

import { Button } from "../../../../common/components/Buttons/LikeButton/styled";
import { CommentsIcon } from "../../../../common/components/Icons";
import { IconSizes } from "../../../../common/enums";

interface ICommentsButtonProps {
	commentsAmount?: number;
	size?: IconSizes;
}

export const CommentsButton = ({ commentsAmount, size }: ICommentsButtonProps) => {
	const scrollToBottom = useCallback(() => {
		const scrollHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
		window.scrollTo({ top: scrollHeight, behavior: "smooth" });
	}, []);

	return (
		<Button
			amount={commentsAmount}
			onClick={scrollToBottom}
		>
			<CommentsIcon fontSize={size} />
		</Button>
	);
};
