import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalWin from "../../components/modal/ModalWin";
import { getStatesAuth, setAuthLoading, setIsAuth, setUser } from "../../redux/slices/authSlice";

import { login, registration } from "../../http/userAPI"
import Loader from "../../Loader/Loader";

//--- import { useNavigate } from "react-router-dom";
//import { SHOP_ROUTE } from "../../utils/consts";

//import React from "react";
//import { useDispatch } from "react-redux";
//import { NavLink, useLocation, useNavigate } from "react-router-dom";

//import { setIsAuth, setUser } from "../redux/slices/authSlice";
//import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";



const AuthModal = ({active, setActive}) => {

    const [isLogin, setIsLogin] = React.useState(true)

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {loading} = useSelector(getStatesAuth)





    const dispatch = useDispatch()
   
    const click = async (e) => {
        e.preventDefault()
        try {
            let data;
            if (isLogin) {
            // АНИМАЦИЯ
            dispatch(setAuthLoading(true))
 
                data = await login(email, password);
            dispatch(setAuthLoading(false))
                //console.log("data-login", data);
               // 
              if (data) {
                setActive(false) 
               }
               
             //  navigate(SHOP_ROUTE)

            } else {
            // АНИМАЦИЯ
            dispatch(setAuthLoading(true))
                // Раскодированный token
                data = await registration(email, password);
            dispatch(setAuthLoading(false))
                if (data) {
                    setActive(false) 
                   }
                   console.log("data-registration", data);
                //navigate(LOGIN_ROUTE)
            }           
            
            dispatch(setIsAuth(true))
            // В Redux данные о ползователе
            // @ts-ignore
            dispatch(setUser(data)) //data
            // Redirect на главную
            
 
        } catch (e) {
            //alert("Ошибка",e)//e.response.data.messages
            console.log("ERROR_data-registration", e)
        }

    }
    /*
 const setEmailPaste = (e) => {
        //setEmail(value)
        e.preventDefault()
        console.log("e", e);
    }*/

    return (
    <ModalWin active={active} setActive={setActive}>
           
        <div className="inputAuth">
          <form>
                <h1>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
                <input  type="email" placeholder="Введите email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)} /> 
                
                <input type="current-password" placeholder="Введите пароль..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

            {!loading ?       
                <button className="but_navbar" onClick={(e) => click(e)}>{isLogin ? 'Войти' : 'Регистрация'}</button> 
                :
                <Loader loader={false}/>
                }
              {/*  <input type="submit" value="Отправить" onClick={(e) =>setEmailPaste(e)}/>*/}
            </form>   
            </div>


        <div className="noAcounts"> 
            <p>{isLogin ? 'Нет аккаунта ? ' : 'Есть аккаунт ? '}</p>       
           

            <p className="registerClick" onClick={() => setIsLogin(prev => !prev)}>{isLogin ? 'Зарегистрируйся !': 'Войдите !'}</p>
    
        </div>
       </ModalWin>
    )
}

export default AuthModal