import { Button, ButtonProps } from "@mui/material";

import { EmailIcon } from "../../Icons";

export const SignUpButton = (props: ButtonProps) => {
	return (
		<Button
			variant="signup"
			type="submit"
			{...props}
		>
			<EmailIcon sx={(theme) => ({ fill: theme.palette.mainColors.white })} />
			Sign up with E-mail
		</Button>
	);
};
