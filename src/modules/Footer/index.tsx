import { Stack } from "@mui/material";

import { FooterSections } from "./FooterSections";
import { FooterFollowUs } from "./FooterFollowUs";
import { FooterCopyright } from "./FooterCopyright";
import { AdoptiveLayout, NamedLogo } from "../../common/components";

export const Footer = () => {
	return (
		<footer>
			<Stack
				p="3.25rem 0 1.75rem 0"
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
						columnGap="13.75vw"
					>
						<NamedLogo color="mainColors.white" />
						<Stack
							width="36.5vw"
							direction="row"
							justifyContent="space-between"
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
