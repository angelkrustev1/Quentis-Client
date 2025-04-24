import { useTheme } from '@mui/material/styles';
import {
    Box,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ForumIcon from '@mui/icons-material/Forum';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router';
import useTranslateText from '../../hooks/useTranslationText';

export default function RoomsMenu({
    open,
    toggleHander,
    onClose,
}) {
    const theme = useTheme();
    const translation = useTranslateText();

    return (
        <Drawer open={open} onClose={onClose}>
            <Box
                sx={{
                    width: 250,
                    bgcolor: theme.palette.background.default,
                    height: '100%',
                    color: theme.palette.text.primary,
                }}
                role="presentation"
                onClick={onClose}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuOpenIcon
                                    sx={{ color: theme.palette.text.primary }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={translation.roomsMenuClose} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/rooms">
                            <ListItemIcon>
                                <ForumIcon sx={{ color: theme.palette.text.primary }} />
                            </ListItemIcon>
                            <ListItemText primary={translation.roomsMenuRooms} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['All mail'].map((text) => (
                        <Link to='/meeting'>
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ChatBubbleOutlineIcon sx={{ color: theme.palette.text.primary }} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}
