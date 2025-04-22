import { useState } from "react";
import { AccountManageContext } from "../contexts/AccountManageContext";

export default function AccountManageProvider({
    children,
}) {
    const [accountManageOpen, setAccountManageOpen] = useState(false)
    const accountManageShowHandler = () => setAccountManageOpen(true)
    const accountManageCloseHandler = () => setAccountManageOpen(false)

    return (
        <AccountManageContext.Provider value={{ accountManageOpen, accountManageShowHandler, accountManageCloseHandler }}>
            {children}
        </AccountManageContext.Provider>
    );
}