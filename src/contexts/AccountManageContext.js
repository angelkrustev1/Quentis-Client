import { createContext } from "react";

export const AccountManageContext = createContext({
    accountManageOpen: false,
    accountManageShowHandler: () => null,
    accountManageCloseHandler: () => null,
})