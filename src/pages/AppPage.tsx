import { Container, styled } from "@mui/material"
import { Footer } from "../common/components/Footer/Footer"
import { Header } from "../common/components/Header/Header"
import { MenuBlock } from "../common/components/MenuBlock";


const StyledMain = styled('main')(({ theme }) => {
	const { palette: { mainColors: { lightGrey } } } = theme;

	return {
		flexGrow: '1',
		backgroundColor: lightGrey,
		padding: '105px 0'
	}
})

export const AppPage = () => {

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
		}}>
			<Header />

			<StyledMain>

				<Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<MenuBlock />
				</Container>


			</StyledMain>

			<Footer />
		</div>
	)
}