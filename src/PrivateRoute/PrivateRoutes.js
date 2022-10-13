import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../App';

const PrivateRoutes = (props) => {
    // const {User}=props;
    // let auth = localStorage.getItem("user");
    const[Loggedin,setLoggedin,cartItems] = useContext(UserContext);

   
    if(Loggedin===false){

      return (
      <>
         <div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
         <div></div><div></div><div></div>
         </div></div></div>
        <Navigate to="/login"/>
         </>
      )
   }
if(!Loggedin){

   return (
   <>
      <div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
      <div></div><div></div><div></div>
      </div></div></div>
     
      </>
   )
}
else{
  const user = Loggedin.email 



return(
         user ?   <Outlet/> :<Navigate to="/login"/>   
    )
}
}

export default PrivateRoutes;