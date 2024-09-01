import { createContext, ReactNode, useState } from "react";
import { User } from "firebase/auth";

interface AuthContextPropsType{
    children:ReactNode
}


interface AuthContextType{
    user:User| null;
    setUser:React.Dispatch<React.SetStateAction<User | null>>;
}


const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({children}:AuthContextPropsType)=>{
    const [user,setUser] = useState<User | null>(null);
        return (
            <AuthContext.Provider value={{user,setUser}}>
                {children}
            </AuthContext.Provider>
        )
}
export {AuthContext,AuthProvider}