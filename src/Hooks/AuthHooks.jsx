import { useContext } from "react"
import { AuthContex } from "../Pages/AuthProvider"

const useAuth=()=>{

    const context=useContext(AuthContex);
    return context;

}
export default useAuth;