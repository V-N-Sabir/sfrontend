import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalWin from "../../components/modal/ModalWin";
import { getStatesAuth, setAuthLoading, setIsAuth, setUser } from "../../redux/slices/authSlice";

import { login, registration } from "../../http/userAPI"
import Loader from "../../Loader/Loader";
import { searchWord } from "../../hooks/searchWord";

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

    const [error, setError] = React.useState('')



    const dispatch = useDispatch()
   
    const click = async (e) => {
        e.preventDefault()
        //str.length
        if (password.length < 3) {
            setError('Пароль должен быть более 3-х символов')
            return
        }

            setError('')

            let data;
            if (isLogin) {
try {                
            // АНИМАЦИЯ
            dispatch(setAuthLoading(true))
 
                data = await login(email, password);
            
                //console.log("data-login", data);
               // 
              if (data) {
                setActive(false) 
                dispatch(setIsAuth(true))
                dispatch(setUser(data)) 
               }

               
             //  navigate(SHOP_ROUTE)
            } catch(e) {
                console.log(e)  
                const word = searchWord(e.message, '500')  
                if (word) {
                    setError(word)
                }      
            } finally {
            // Выполниться в любом случае
            dispatch(setAuthLoading(false))
}            
            } else {
            
                try {
            // АНИМАЦИЯ         
                // Раскодированный token
                dispatch(setAuthLoading(true))
                data = await registration(email, password)
                console.log("data_registration",data)
                if (data) {
                    setActive(false) 
                   }
                console.log("data-registration", data)
                //navigate(LOGIN_ROUTE)
          //  }           
            
                dispatch(setIsAuth(true))
                dispatch(setUser(data)) 
            // Redirect на главную       
                
                } catch (e) {
                //e.response.data.messages
                    const word = searchWord(e.message, '404')  
                    if (word) {
                        setError(word)
                    }
            } finally {
                // Выполниться в любом случае
                dispatch(setAuthLoading(false))
            }

    }
}
    /*
 const setEmailPaste = (e) => {
        //setEmail(value)
        e.preventDefault()
        console.log("e", e);
    }*/

    //console.log( typeof error.indexOf('404')) 

const loginOrRegistration = () => {
    setIsLogin(prev => !prev)
    setError('')
}


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
                 {error && <p className="errors">{error}</p>}

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
           

            <p className="registerClick" onClick={() => loginOrRegistration() }>{isLogin ? 'Зарегистрируйся !': 'Войдите !'}</p>
    
        </div>
       </ModalWin>
    )
}

export default AuthModal