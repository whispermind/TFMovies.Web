import { styled } from "@mui/material"
import { Footer } from "../common/components/Footer/Footer"
import { Header } from "../common/components/Header/Header"
import { CustomMenu } from "../common/components/Menu/Menu";

const StyledMain = styled('main')(({ theme }) => {
	const { palette: { mainColors: { lightGrey } } } = theme;

	return {
		flexGrow: '1',
		backgroundColor: lightGrey,
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

				<CustomMenu />

			</StyledMain>

			<Footer />
		</div>
	)
}