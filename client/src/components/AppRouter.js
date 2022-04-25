import { useContext } from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import { Context } from "../index";
import Shop from "../pages/Shop";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/const";

const AppRouter = () => {
const { user } = useContext(Context);

    return (
        <>

        <Routes>
{user.isAuth && authRoutes.map(({path, Component}) => 

<Route key={path}  path={path} element={<Component/>} />

)}
{publicRoutes.map(({path, Component}) => 
<Route key={path} path={path} element={<Component/>} />
)}

<Route
        path='*'
        element={<Navigate to={SHOP_ROUTE} element={<Shop/>} />}
    />

        </Routes>
 
        </>
      ); 
  };
  
  
  export default AppRouter