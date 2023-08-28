import { AppBar, Container, Toolbar, Typography, Box, Button } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

import { Logo } from "../Logo";
import { closeButton } from "./style";


export const Header = () => {

	return (
		<AppBar
			position='static'
			sx={(theme) => {
				const { palette: { mainColors: { white } } } = theme;
				return {
					backgroundColor: white,
					p: '10px 0',
					boxShadow: 'none'
				}
			}}>
			<Container maxWidth="xl">
				<Toolbar sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
					{/* LOGO */}
					<Logo />
					{/* /LOGO */}

					{/* CLOSE BUTTON */}
					{/* <Box
						component={Button}
						sx={{ ...closeButton, mr: '-10px' }}>
						<Typography
							variant="HBody"
							sx={(theme) => {
								const { palette: { mainColors: { graphite } } } = theme;
								return {
									color: graphite,
									mr: 2,
									textDecoration: 'none',
									textTransform: 'none',
								}
							}}
						>
							Close
						</Typography>
						<CloseIcon
							sx={(theme) => {
								const { palette: { mainColors: { graphite } } } = theme;
								return {
									color: graphite
								}
							}} />
					</Box> */}
					{/* CLOSE BUTTON */}
				</Toolbar>
			</Container>
		</AppBar>
	)
}