import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = localStorage.getItem("user");
    
    return(
        auth==='test' ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes