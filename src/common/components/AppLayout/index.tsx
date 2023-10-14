import { PropsWithChildren } from "react";
import { Stack } from "@mui/material";

import { Header } from "../../../modules/Main/Header";
import { Footer } from "../../../modules/Main/Footer";
import { AdoptiveLayout } from "..";

export const AppLayout = ({ children }: PropsWithChildren) => {
	return (
		<Stack minHeight="100vh">
			<Header />
			<Stack
				p="50px 0"
				bgcolor="mainColors.lightGrey"
				flexGrow={1}
			>
				<AdoptiveLayout>{children}</AdoptiveLayout>
			</Stack>
			<Footer />
		</Stack>
	);
};
