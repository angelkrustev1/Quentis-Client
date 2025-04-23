import { Container, Box } from "@mui/material";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import { useTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router'
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import RoomsPage from "./components/rooms-page/RoomsPage";
import LanguageProvider from "./providers/LanguageProvider";
import AccountMenuProvider from "./providers/AccountMenuProvider";
import Profile from "./components/profile/Profile";

function App() {
	const theme = useTheme();

	return (
		<LanguageProvider>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				bgcolor: theme.palette.background.default || '#fff',
			}}>
				<AccountMenuProvider>
					<Navigation />
				</AccountMenuProvider>
				<Container
					maxWidth="lg"
					sx={{ flex: 1 }}
				>
					<Routes>
						<Route index element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/profile' element={<AccountMenuProvider><Profile /></AccountMenuProvider>} />
						<Route path='/rooms' element={<RoomsPage />} />
					</Routes>
				</Container>
				<Footer />
			</Box>
		</LanguageProvider>
	);
}

export default App;
