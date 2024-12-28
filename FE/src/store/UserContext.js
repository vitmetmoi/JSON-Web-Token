import { useState, createContext, useEffect } from "react";
import { getUserAccountService } from "../service/userService";
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState(
        {
            token: '',
            isLoading: true,
            auth: false,
            account: {
                userName: '',
                email: '',
                groupWithRoles: '',
            }
        }

    );


    useEffect(() => {

        setTimeout(() => getUserAccount(), 2000);
    }, [])

    const getUserAccount = async () => {
        try {
            let res = await getUserAccountService();
            console.log("resasd", res)
            if (res && res.data.EC === 0) {
                let data = res.data.DT;

                let userData = {
                    token: data.token ? data.token : '',
                    isLoading: false,
                    auth: data.auth === false ? false : true,
                    account: {
                        userName: data.userName && data.userName,
                        email: data.email && data.email,
                        groupWithRoles: data.groupWithRoles && data.groupWithRoles,
                    }
                }

                setUser(userData);
            }
            else {

                let data = {
                    token: '',
                    isLoading: false,
                    auth: false,
                    account: {
                        userName: '',
                        email: '',
                        groupWithRoles: '',
                    }
                };

                setUser(data);
            }
        }
        catch (e) {
            let data = {
                token: '',
                isLoading: false,
                auth: false,
                account: {
                    userName: '',
                    email: '',
                    groupWithRoles: '',
                }
            };

            setUser(data);
            console.log(e);
        }


    }
    // Login updates the user data with a name parameter
    const login = (data) => {

        let userData = {
            token: data.token,
            isLoading: false,
            auth: data.auth,
            account: {
                userName: data.userName && data.userName,
                email: data.email && data.email,
                groupWithRoles: data.groupWithRoles && data.groupWithRoles,
            }
        }

        setUser(userData);
    };

    // Logout updates the user data to default
    const logout = () => {
        setUser((user) => ({
            email: '',
            groupWithRoles: '',
            token: '',
            auth: false
        }));
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
export {
    UserProvider, UserContext
}