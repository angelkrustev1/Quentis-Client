import { useState, Fragment } from 'react';
import {
    Box,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
    IconButton,
    Tooltip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Link } from 'react-router'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Settings from '@mui/icons-material/Settings';
import useTranslateText from '../../../hooks/useTranslationText';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function AccountMenu({
    enterRoomOpenHandler,
    roomCreateOpenHandler,
    accountManageOpenHandler,
    settingsOpenHandler,
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const translate = useTranslateText();

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const roomOpenHandler = () => {
        enterRoomOpenHandler();
        setAnchorEl(null);
    }

    const roomCreateHandler = () => {
        roomCreateOpenHandler();
        setAnchorEl(null);
    }

    const accountManageHandler = () => {
        accountManageOpenHandler();
        setAnchorEl(null);
    }

    const settingsHandler = () => {
        settingsOpenHandler();
        setAnchorEl(null);
    }

    return (
        <Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{
                            width: 40,
                            height: 40,
                            bgcolor: theme.palette.text.special,
                            color: '#ffffff'
                        }}>
                            OP
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            mt: 1.5,
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            backgroundColor: theme.palette.background.default,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
            >
                <Link to='/profile'>
                    <MenuItem onClick={handleClose} sx={{ color: theme.palette.text.primary }}>
                        <Avatar sx={{ bgcolor: theme.palette.text.special }} />
                        {translate.profile}
                    </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={roomOpenHandler} sx={{ color: theme.palette.text.primary }}>
                    <ListItemIcon>
                        <MeetingRoomIcon fontSize="small" sx={{ color: theme.palette.text.primary }} />
                    </ListItemIcon>
                    {translate.accMenuEnterRoom}
                </MenuItem>
                <MenuItem onClick={roomCreateHandler} sx={{ color: theme.palette.text.primary }}>
                    <ListItemIcon>
                        <GroupAddIcon fontSize="small" sx={{ color: theme.palette.text.primary }} />
                    </ListItemIcon>
                    {translate.accMenuLaunchRoom}
                </MenuItem>
                <MenuItem onClick={accountManageHandler} sx={{ color: theme.palette.text.primary }}>
                    <ListItemIcon>
                        <ManageAccountsIcon fontSize="small" sx={{ color: theme.palette.text.primary }} />
                    </ListItemIcon>
                    {translate.manageAccount}
                </MenuItem>
                <Divider />
                <MenuItem onClick={settingsHandler} sx={{ color: theme.palette.text.primary }}>
                    <ListItemIcon>
                        <Settings fontSize="small" sx={{ color: theme.palette.text.primary }} />
                    </ListItemIcon>
                    {translate.settings}
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ color: theme.palette.text.primary }}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" sx={{ color: theme.palette.text.primary }} />
                    </ListItemIcon>
                    {translate.logout}
                </MenuItem>
            </Menu>
        </Fragment>
    );
}
