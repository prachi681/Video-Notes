import { createContext, useContext, useState } from "react";
import { useRouter } from 'next/navigation';


const AppContext = createContext();

export const AppProvider = ({ children  }) => {

    const [ currentUser, setCurrentUser ] = useState(
        JSON.parse(sessionStorage.getItem('user'))
      );

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);
    const router=useRouter();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        router.push('/product');
    }

    return (
        <AppContext.Provider value={{ loggedIn, setLoggedIn, logout, currentUser, setCurrentUser }} >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;