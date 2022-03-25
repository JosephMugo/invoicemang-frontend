import { useState, createContext, useContext } from 'react';

export const AuthContext = createContext(true);


// const auth = () => {
//     const [auth, setAuth] = useState(true);

//     const login = () => setAuth(true);
//     const logout = () => setAuth(false);

//     return {
//         auth,
//         login,
//         logout
//     }
// }

export const useAuth = () => {
    return useContext(AuthContext);
}

