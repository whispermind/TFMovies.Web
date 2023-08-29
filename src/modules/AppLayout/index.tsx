import { PropsWithChildren } from "react";
import { Stack } from "@mui/material";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { AdoptiveLayout } from "../../common/components";

export const AppLayout = ({ children }: PropsWithChildren) => {
	return (
		<Stack minHeight="100vh">
			<Header />
			<Stack
				p="50px 0"
				bgcolor="mainColors.lightGrey"
				flexGrow={1}
				justifyContent="center"
				alignItems="center"
			>
				<Stack
					maxWidth="xl"
					justifyContent="center"
					alignItems="center"
				/>
				<AdoptiveLayout alignItems='normal' gap='40px'>{children}</AdoptiveLayout>
			</Stack>
			<Footer />
		</Stack>
	);
};
