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
import { Link } from 'react-router'
import RoomCreate from '../room-create/RoomCreate';
import { RoomCreateContext } from '../../contexts/RoomCreateContext';
import { useTheme } from '@mui/material/styles';
import { SettignsContext } from '../../contexts/SettingsContext';
import SettingsForm from '../settings/Settings';
import { EnterRoomContext } from '../../contexts/EnterRoomContext';
import EnterRoom from '../enter-room/EnterRoom';
import useTranslateText from '../../hooks/useTranslationText';


export default function Navigation() {
    const [roomsOpen, setRoomsOpen] = useState(false);
    const theme = useTheme();
    const translation = useTranslateText();
    const { roomCreateOpen, roomCreateOpenHandler, roomCreateCloseHandler } = useContext(RoomCreateContext)
    const { settingsOpen, settingsOpenHandler, settingsCloseHandler } = useContext(SettignsContext)
    const { enterRoomOpen, enterRoomOpenHandler, enterRoomCloseHandler } = useContext(EnterRoomContext)

    const roomsToggleHandler = () => {
        setRoomsOpen((prev) => !prev);
    };

    const roomsCloseHandler = () => {
        setRoomsOpen(false);
    };

    return (
        <>
            <Box>
                <AppBar position="static" sx={{ bgcolor: theme.palette.background.special }}>
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
                            <AccountMenu
                                enterRoomOpenHandler={enterRoomOpenHandler}
                                roomCreateOpenHandler={roomCreateOpenHandler}
                                settingsOpenHandler={settingsOpenHandler}
                            />
                        ) : (
                            <>
                                <Button color="#ffffff" sx={{ bgcolor: theme.palette.text.primary }}>
                                    <Link to='/login'>{translation.login}</Link>
                                </Button>
                                <Button color="#ffffff" sx={{ bgcolor: theme.palette.text.primary }}>
                                    <Link to='/register'>{translation.register}</Link>
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

            {enterRoomOpen && <EnterRoom onClose={enterRoomCloseHandler} />}
            {roomCreateOpen && <RoomCreate onClose={roomCreateCloseHandler} />}
            {settingsOpen && <SettingsForm onClose={settingsCloseHandler} />}
        </>
    );
}
