import { Typography, Box } from "@mui/material"
import { LogoIcon } from "../icons/LogoIcon"


export const Logo = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
			}}>
			<LogoIcon sx={{ width: '44px', height: '44px', mr: '1.5rem' }} />
			<Typography variant="Logo" color="mainColors.black">Media</Typography>
			<Typography variant="Logo" color="mainColors.main">Flix</Typography>
		</Box>
	)
}