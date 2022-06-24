
import {createContext, useContext, useState} from "react";


 export const userContext = createContext({
    user:null,
    logIn: () => {},
    logOut: () => {},
});

const USER = { name:"Guest", isGuestUser: true};

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(USER);
    function logIn(username) {
        setUser({isGuestUser:false, name: username});
    }
    return(
        <userContext.Provider value= {{ user,  }}>
            {children}
        </userContext.Provider>
    );
}

export function useUserContext(){
    const {user, logIn, logOut} = useContext(userContext);

    return{user, logIn, logOut };
}