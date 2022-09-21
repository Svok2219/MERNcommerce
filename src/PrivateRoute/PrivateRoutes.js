import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../App';

const PrivateRoutes = () => {
    let auth = localStorage.getItem("user");
    const[Loggedin,setLoggedin,cartItems] = useContext(UserContext);
   console.log(Loggedin);
const User=localStorage.getItem("User");
console.log(User)
    return(
        Loggedin?   <Outlet/>  : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;