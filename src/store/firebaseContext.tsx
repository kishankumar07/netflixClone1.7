import { createContext, ReactNode, useState } from "react";

interface AuthContextPropsType{
    children:ReactNode
}

interface AuthContextType{
    user:any;
    setUser:React.Dispatch<React.SetStateAction<any>>;
}


const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({children}:AuthContextPropsType)=>{
    const [user,setUser] = useState('');
        return (
            <AuthContext.Provider value={{user,setUser}}>
                {children}
            </AuthContext.Provider>
        )
}
export {AuthContext,AuthProvider}