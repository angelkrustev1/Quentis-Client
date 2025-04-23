import {
    Avatar,
    Button,
    Typography,
    Stack,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import useTranslateText from "../../../hooks/useTranslationText";

export default function ProfileInfo({
    enterRoomOpenHandler,
    roomCreateOpenHandler,
    accountManageShowHandler,
    settingsOpenHandler,
}) {
    const translation = useTranslateText();

    return (
        <Stack spacing={3} flex={1} width="100%">
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Typography
                    sx={{
                        fontSize: { xs: 26, sm: 30 },
                        fontWeight: 600,
                        textAlign: { xs: "center", sm: "left" },
                    }}
                >
                    Angel Krustev
                </Typography>

                <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: "primary.main", cursor: "pointer" }} onClick={accountManageShowHandler}>
                        <ManageAccountsIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: "primary.main", cursor: "pointer" }} onClick={settingsOpenHandler}>
                        <SettingsIcon />
                    </Avatar>
                </Stack>
            </Stack>

            {/* Action Buttons */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                width="100%"
            >
                <Button
                    variant="contained"
                    color="text"
                    fullWidth
                    sx={{ fontWeight: 500 }}
                    onClick={enterRoomOpenHandler}
                >
                    {translation.enterRoom}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ fontWeight: 500 }}
                    onClick={roomCreateOpenHandler}
                >
                    {translation.launchRoom}
                </Button>
            </Stack>
        </Stack>
    );
}