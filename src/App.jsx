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

function App() {
	const theme = useTheme();

	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
			bgcolor: theme.palette.background.default,
		}}>
			<Navigation />

			<Container
				maxWidth="lg"
				sx={{ flex: 1 }}
			>
				<Routes>
				<Route index element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/rooms' element={<RoomsPage />} />
				</Routes>
			</Container>
			<Footer />
		</Box>
	);
}

export default App;
