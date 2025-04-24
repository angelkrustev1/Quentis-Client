import {
    Avatar,
    Box,
    Divider,
    Typography,
    Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NoRooms from "./no-rooms/NoRooms";
import ProfileInfo from "./profile-info/ProfileInfo";
import { useContext, useState } from "react";
import { EnterRoomContext } from "../../contexts/EnterRoomContext";
import { RoomCreateContext } from "../../contexts/RoomCreateContext";
import { AccountManageContext } from "../../contexts/AccountManageContext";
import { SettignsContext } from "../../contexts/SettingsContext";
import AccountManage from "../account-manage/AccountManage";
import Settings from "../settings/Settings";
import RoomCreate from "../room-create/RoomCreate";
import EnterRoom from "../enter-room/EnterRoom";
import PictureChange from "../change-profile-picture/ChangeProfilePicture";
import RoomsList from "../rooms-list/RoomsList";
// import RoomsColection from "../rooms-colection/RoomsColection"; // Uncomment when needed

export default function Profile() {
    const theme = useTheme();
    const { enterRoomOpen, enterRoomOpenHandler, enterRoomCloseHandler } = useContext(EnterRoomContext)
    const { roomCreateOpen, roomCreateOpenHandler, roomCreateCloseHandler } = useContext(RoomCreateContext)
    const { accountManageOpen, accountManageShowHandler, accountManageCloseHandler } = useContext(AccountManageContext)
    const { settingsOpen, settingsOpenHandler, settingsCloseHandler } = useContext(SettignsContext)

    const [pictureOpen, setPictureOpen] = useState(false)
        const pictureOpenHandler = () => setPictureOpen(true)
        const pictureCloseHandler = () => setPictureOpen(false)

    return (
        <>
            {/* Profile Header */}
            <Box
                sx={{
                    py: { xs: 5, md: 8 },
                    px: 3,
                    maxWidth: 1000,
                    mx: "auto",
                }}
            >
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 4, md: 6 }}
                    alignItems={{ xs: "center", md: "flex-start" }}
                    justifyContent="space-between"
                >
                    {/* Avatar */}
                    <Avatar
                        sx={{
                            width: 170,
                            height: 170,
                            bgcolor: theme.palette.text.special,
                            mx: { xs: "auto", md: 0 },
                            cursor: "pointer",
                        }}
                        onClick={pictureOpenHandler}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: 60, sm: 68, md: 72 },
                                fontWeight: 500,
                                color: theme.palette.background.default,
                            }}
                        >
                            OP
                        </Typography>
                    </Avatar>

                    {/* User Info and Actions */}
                    <ProfileInfo
                        enterRoomOpenHandler={enterRoomOpenHandler}
                        roomCreateOpenHandler={roomCreateOpenHandler}
                        accountManageShowHandler={accountManageShowHandler}
                        settingsOpenHandler={settingsOpenHandler}
                    />
                </Stack>
            </Box>

            <Divider />

            {/* No Rooms Section */}
            {true ? <RoomsList /> : <NoRooms />}
            {/* <RoomsColection /> */}

            {enterRoomOpen && <EnterRoom onClose={enterRoomCloseHandler} />}
            {roomCreateOpen && <RoomCreate onClose={roomCreateCloseHandler} />}
            {accountManageOpen && <AccountManage onClose={accountManageCloseHandler} />}
            {settingsOpen && <Settings onClose={settingsCloseHandler} />}
            {pictureOpen && <PictureChange onClose={pictureCloseHandler} />}
        </>
    );
}
