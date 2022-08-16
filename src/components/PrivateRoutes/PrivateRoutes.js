import { Outlet, useNavigate } from 'react-router-dom';
const PrivateRoutes = () =>{
    const Navigate = useNavigate();
    const auth = {"token":true}
    return(
        <>
            {auth.token ? <Outlet/> : <Navigate to='/OrgLogin'/>}
        </>
    )
}

export default PrivateRoutes;