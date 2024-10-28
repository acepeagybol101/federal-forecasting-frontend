"use client";

import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react"; 

interface ClientSessionProviderProps {
    children: ReactNode; 
}

const ClientSessionProvider: React.FC<ClientSessionProviderProps> = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default ClientSessionProvider;
