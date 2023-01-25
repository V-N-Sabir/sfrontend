
import React from "react";
import {Routes, Route, } from 'react-router-dom'
//import Auth from "../pages/Auth";
import { getsetIsAuth } from "../redux/slices/authSlice";
import { AuthRoute, PublicRoute } from "../routes"
import {useSelector} from 'react-redux'

//import NavigationRef from "./NavigationRef"



const AppRouter = () => {

    const isAuth = useSelector(getsetIsAuth)

return (
    
 <div>
    {/*<DropdownApp/>*/}
    {/*{isAuth &&  <React.Fragment> <NavigationRef /></React.Fragment>}*/}
    {/*<React.Fragment> <NavigationRef /></React.Fragment>*/}
    
    {/*{isAuth &&  <React.Fragment> <CollapseApp /></React.Fragment>}*/}
  
    <Routes>           
        {isAuth && AuthRoute.map(({path, Component}) =>

            <Route key={path} path={path} element={<Component/>}  />)
            }
 
        
        {PublicRoute.map(({path, Component}) =>                
            <Route key={path} path={path} element={<Component/>} />
            )}
        {/*<Route path="*" element={<Auth />} />      */} 
    </Routes>
    </div>
)}


export default AppRouter

// <Route key={path} path={path} element={<Component/>} exact />)
// <Route key={path} path={path} element={<Component/>} exact/>