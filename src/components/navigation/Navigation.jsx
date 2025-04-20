import { useContext, useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RoomsMenu from '../rooms-menu/RoomsMenu';
import AccountMenu from './account-menu/AccountMenu';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router'
import RoomCreate from '../room-create/RoomCreate';
import { RoomCreateContext } from '../../contexts/RoomCreateContext';

export default function Navigation() {
    const [roomsOpen, setRoomsOpen] = useState(false);
    const theme = useTheme();
    const { roomCreateOpen, roomCreateOpenHandler, roomCreateCloseHandler } = useContext(RoomCreateContext)

    const roomsToggleHandler = () => {
        setRoomsOpen((prev) => !prev);
    };

    const roomsCloseHandler = () => {
        setRoomsOpen(false);
    };

    return (
        <>
            <Box>
                <AppBar position="static" sx={{ bgcolor: theme.palette.background.special }}> {/* Navy blue AppBar */}
                    <Toolbar>
                        <IconButton
                            onClick={roomsToggleHandler}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffffff' }}>
                            <Link to='/'>
                                Quentis
                            </Link>
                        </Typography>
                        {true ? (
                            <AccountMenu roomCreateOpenHandler={roomCreateOpenHandler}/>
                        ) : (
                            <>
                                <Button color="#FDF0D5" sx={{ bgcolor: theme.palette.text.primary }}>
                                    <Link to='/login'>Login</Link>
                                </Button>
                                <Button sx={{ bgcolor: theme.palette.text.primary }}>
                                    <Link to='/register'>Register</Link>
                                </Button>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            <RoomsMenu
                open={roomsOpen}
                onToggle={roomsToggleHandler}
                onClose={roomsCloseHandler}
            />

            {roomCreateOpen && <RoomCreate onClose={roomCreateCloseHandler}/>}
        </>
    );
}
