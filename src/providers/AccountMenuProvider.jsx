import AccountManageProvider from "./AccountManageProvider";
import EnterRoomProvider from "./EnterRoomProvider";
import RoomCreateProvider from "./RoomCreateProvider";
import SettingsProvider from "./SettingsProvider";

export default function AccountMenuProvider({
    children
}) {
    return (
        <SettingsProvider>
            <AccountManageProvider>
                <EnterRoomProvider>
                    <RoomCreateProvider>
                        {children}
                    </RoomCreateProvider>
                </EnterRoomProvider>
            </AccountManageProvider>
        </SettingsProvider>
    );
}