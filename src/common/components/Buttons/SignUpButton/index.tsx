import { ButtonProps, Button } from "@mui/material";

import { EmailIcon } from "../../Icons";

export const SignUpButton = (props: ButtonProps) => {
	return (
		<Button
			variant="signup"
			type="submit"
			{...props}
		>
			<EmailIcon
				sx={({
					palette: {
						mainColors: { white }
					}
				}) => ({ fill: white })}
			/>
			Sign up with Email
		</Button>
	);
};
