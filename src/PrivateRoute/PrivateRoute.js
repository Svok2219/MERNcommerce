import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../App';

const PrivateRoute = (props) => {
    const {User}=props;

    const[Loggedin,setLoggedin,cartItems] = useContext(UserContext);
   console.log(Loggedin);
   // if(!Loggedin){
   //    return (
   //       <div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
   //       <div></div><div></div><div></div>
   //       </div></div></div>
   //    )
   // }
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

else{
  const user = Loggedin.email == 'shuvo@koiri.com'



return(
         user ?   <Outlet/> :<Navigate to="/login"/>   
    )
}
 
}

export default PrivateRoute;