import React from "react";
import { useNavigate, } from "react-router-dom" //NavLink
//import {  SHOP_ROUTE } from "../utils/consts";
import {useDispatch, useSelector} from 'react-redux'
import { getsetIsAuth, setIsAuth, setUser } from "../redux/slices/authSlice";
import AuthModal from "../pages/sales/AuthModal"
import NavigationRef from "./NavigationRef"



const NavBar = () => {

    const isAuth = useSelector(getsetIsAuth)

    const [active, setActive] = React.useState(false)


    const navigate = useNavigate()

    const dispach = useDispatch()

    const Autorization = () => {
        //dispach(setIsAuth(true))
       // navigate(REGISTRATION_ROUTE)
        setActive(true)
    }


    const logOut = () => {
        dispach(setUser({id:0, email:"", role:""}))
        dispach(setIsAuth(false))
        localStorage.setItem('token', '')
    }

return (
    <div>
        <NavigationRef />
        {/*<h1>Меню авторизации</h1>*/}
        
        <div>
            <AuthModal  active={active} setActive={setActive}/>
        </div>
        {/*{isAuth ? "" : <NavLink  to={SHOP_ROUTE}>На главную</NavLink>}*/}
            <div>
            
            {isAuth ?
            <div className="navbar">
                
            <div className="refNavigate">
            
   
           {/*  <Link to={SALES} >Магазин</Link>*/} 
           
            <>
                <AuthModal  active={active} setActive={setActive}/>
            </>
           {/* {page.map((pag) => (
                <Link key={pag.id} to={pag.name} >{pag.name}</Link>
            ))}*/} 
            
        </div>
                <button 
                onClick={() => navigate('/basket')}
                className="but_navbar">Корзина</button>
                <button 
                 onClick={() => logOut()}
                 className="but_navbar">Выйти</button>
            </div>
                  :
            <div className="navbar">


                <button className="but_navbar" onClick={Autorization}>Авторизация</button>
            </div>
            
            
            }

            </div>
        </div>
    )
}

export default NavBar