import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CodeIcon from "@mui/icons-material/Code";
import { useContext, useState } from "react";
import useTranslateText from "../../hooks/useTranslationText";
import { LanguageContext } from "../../contexts/LanguageContext";
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import RoomLeave from "../room-leave/RoomLeave";
import RoomDelete from "../room-delete/RoomDelete";
import RoomUpdate from "../room-update/RoomUpdata";
import useRoomUpdate from "../room-update/useRoomUpdate";
import useRoomDelete from "../room-delete/useRoomDelete";

export default function RoomCard() {
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false)
    const translation = useTranslateText();
    const { language } = useContext(LanguageContext);
    const [showLeave, setShowLeave] = useState(false);
    const { showEdit, editShowHandler, editCloseHanlder } = useRoomUpdate();
    const { showDelete, deleteShowHandler, deleteCloseHandler } = useRoomDelete();

    const leaveShowHandler = () => setShowLeave(true)
    const leaveCloseHandler = () => setShowLeave(false)

    const codeShowHandler = () => setShowCode(true)
    const codeCloseHandler = () => setShowCode(false)

    const copieCodeHandler = () => {
        navigator.clipboard.writeText('cat-room')
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <>
            <Box
                component={Paper}
                elevation={8}
                sx={{
                    width: 580,
                    height: 223,
                    display: "flex",
                    overflow: "hidden",
                    borderRadius: 2,
                    position: "relative",
                }}
            >
                {/* Left - Image */}
                <Box
                    sx={{
                        width: "45%",
                        height: "100%",
                        backgroundImage: `url(${imageUrls.cat})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                {/* Right - Content */}
                <Box
                    sx={{
                        width: "55%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        p: 1,
                        position: "relative",
                    }}
                >
                    {/* Top Section */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", lineHeight: 1.2, fontSize: "1.25rem" }}
                        >
                            Room Title
                        </Typography>
                        <Box>
                            {true
                                ? (
                                    <>
                                        <IconButton size="medium" color="primary" onClick={editShowHandler}>
                                            <EditIcon fontSize="medium" />
                                        </IconButton>
                                        <IconButton size="medium" color="error" onClick={deleteShowHandler}>
                                            <DeleteIcon fontSize="medium" />
                                        </IconButton>
                                    </>
                                ) : (
                                    <IconButton size="medium" color="primary" onClick={leaveShowHandler}>
                                        <NoMeetingRoomIcon />
                                    </IconButton>
                                )}

                        </Box>
                    </Box>

                    {/* Bottom Section */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            mt: "auto",
                            position: "relative",
                        }}
                    >
                        {/* Code Box */}
                        {(showCode || copied) && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "-75px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    backgroundColor: "white",
                                    p: 1,
                                    borderRadius: 1,
                                    boxShadow: 5,
                                    maxWidth: 300,
                                    fontSize: "0.8rem",
                                    zIndex: 3,
                                }}
                            >
                                <Typography variant="body2">
                                    {copied ? 'Copiend' : 'cat-room'}
                                </Typography>
                            </Box>
                        )}

                        <IconButton
                            size="medium"
                            color="secondary"
                            onClick={copieCodeHandler}
                            onMouseEnter={codeShowHandler}
                            onMouseLeave={codeCloseHandler}
                        >
                            <CodeIcon fontSize="medium" />
                        </IconButton>

                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                width: "90px",
                                height: "30px",
                                fontSize: `${language === 'en' ? '0.75rem' : '0.5rem'}`,
                                padding: "4px 12px",
                            }}
                        >
                            {translation.join}
                        </Button>
                    </Box>
                </Box>
            </Box>
            {showLeave && <RoomLeave onClose={leaveCloseHandler} />}
            {showDelete && <RoomDelete onClose={deleteCloseHandler} />}
            {showEdit && <RoomUpdate onClose={editCloseHanlder} />}
        </>
    );
}

const imageUrls = {
    cat: 'data:image/jpeg;base64,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'
}