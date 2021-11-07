import { createContext, useContext, useState } from "react";

//Context for Main App to assign values
export const AuthorizationContext = createContext({
    isAuthenticated: false,
    handleAuthentication: (value: boolean) => {},
});

//For any child component to access authorization values
export const useAuthorization = () => {
    return useContext(AuthorizationContext);
};

//Custom hook to set initial Values
export const useProvideAuthorization = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const handleAuthentication = (value: boolean) => {
        setIsAuthenticated(value);
    };

    return {
        isAuthenticated,
        handleAuthentication,
    };
};
