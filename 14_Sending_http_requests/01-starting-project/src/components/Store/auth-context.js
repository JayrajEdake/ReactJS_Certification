import React,{useContext} from "react"

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogOut: ()=>{}
})


export default AuthContext;