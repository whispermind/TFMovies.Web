import { Container, Typography } from "@mui/material"
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import { Logo } from "../Logo";
import { FooterBlock, FooterDescription, FooterDescriptionLink, MainLink } from "./style";

export const Footer = () => {

	return (
		<FooterBlock>
			<Container sx={{ flexShrink: '0' }} maxWidth="xl">
				<div style={{ padding: '2.5rem 1.5rem .5rem', }}>
					<Stack direction="row" sx={{ justifyContent: 'space-between', maxWidth: '1100px' }}>
						<div>
							<Logo />
						</div>
						<div>
							<Stack>
								<Typography variant="Sector" sx={{ margin: '0 0 0.5rem 0' }}>
									Sectors
								</Typography>
								<MainLink variant="SectorLink">
									Home page
								</MainLink>
								<MainLink variant="SectorLink">
									Tags
								</MainLink>
								<MainLink variant="SectorLink">
									Favorites
								</MainLink>
								<MainLink variant="SectorLink">
									Contact with us
								</MainLink>
								<MainLink variant="SectorLink">
									Rules
								</MainLink>
							</Stack>
						</div>
						<div>
							<Typography variant="Sector" sx={{ margin: '0 0 0.5rem 0' }}>
								Follow Us
							</Typography>
							<Stack direction="row" spacing={3}>
								<MainLink href='#'>
									<FacebookIcon sx={{ fontSize: '2rem' }} />
								</MainLink>
								<MainLink href='#'>
									<InstagramIcon sx={{ fontSize: '2rem' }} />
								</MainLink>
								<MainLink href='#'>
									<TwitterIcon sx={{ fontSize: '2rem' }} />
								</MainLink>
							</Stack>
						</div>
					</Stack>
				</div>
				<FooterDescription>
					<Typography variant="SBody" color="greyColors.softGrey">
						Copyright © 2023 MEDIAFLIX
					</Typography>
					<Stack
						direction="row"
						spacing={8.5}>
						<FooterDescriptionLink variant="SBody" href="#">Contact Us</FooterDescriptionLink>
						<FooterDescriptionLink variant="SBody" href="#">Privacy Policy</FooterDescriptionLink>
						<FooterDescriptionLink variant="SBody" href="#">Terms of Use</FooterDescriptionLink>
					</Stack>
				</FooterDescription>
			</Container >
		</FooterBlock >
	)
}