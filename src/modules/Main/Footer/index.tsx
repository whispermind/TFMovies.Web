import { Stack } from "@mui/material";

import { FooterSections } from "./FooterSections";
import { FooterFollowUs } from "./FooterFollowUs";
import { FooterCopyright } from "./FooterCopyright";
import { AdoptiveLayout, NamedLogo } from "../../../common/components";

export const Footer = () => {
	return (
		<footer>
			<Stack
				p="52px 0 28px 0"
				bgcolor="mainColors.graphite"
				color="mainColors.white"
			>
				<AdoptiveLayout
					direction="column"
					alignItems="baseline"
					rowGap={6}
				>
					<Stack
						direction="row"
						alignItems="flex-start"
						columnGap="265px"
					>
						<NamedLogo color="mainColors.white" />
						<Stack
							direction="row"
							justifyContent="space-between"
							columnGap="320px"
						>
							<FooterSections />
							<FooterFollowUs />
						</Stack>
					</Stack>
					<FooterCopyright />
				</AdoptiveLayout>
			</Stack>
		</footer>
	);
};
