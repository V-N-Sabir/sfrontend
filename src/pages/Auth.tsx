import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { setIsAuth, setUser } from "../redux/slices/authSlice";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";





const Auth = () => {


    const location = useLocation()

    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    //const location = useLocation()
    //const isLogin = location.pathname === LOGIN_ROUTE
    const dispach = useDispatch()

    const navigate = useNavigate()

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
                navigate(SHOP_ROUTE)
                

            } else {
                // Раскодированный token
                data = await registration(email, password);
                navigate(LOGIN_ROUTE)
            }           
            
            dispach(setIsAuth(true))
            // В Redux данные о ползователе
            // @ts-ignore
            dispach(setUser(data)) //data
            // Redirect на главную
            
 
        } catch (e:any) {
            alert(e.response.data.messages)
        }

    }

    //const isAuth = useSelector(getsetIsAuth)
    // console.log("isAuth", isAuth);



    return (

        <div className="head_block">
             
            <h1 className="zagolovok">{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
            <div className="registration">
                <input 
                type="email"
                placeholder="Введите имя..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="registration">
                <input 
               
                placeholder="Введите пароль..."
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                />
            </div>
            {isLogin ? 
            <div className="registration ">
           
            <div>Нет аккаунта ?  
                <NavLink to={REGISTRATION_ROUTE}> 
                Зарегистрируйся</NavLink>
            </div>
            </div>
            :
            <div className="registration ">           
          Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                
            </div>

        }
        <div className="registration ">
                <button onClick={click}>{isLogin ? 'Войти' : 'Регистрация'}</button>
        </div>
        </div>
    
    )
}


export default Auth