import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";



export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    console.log("data_registration",data);
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {

  //  if (localStorage.getItem('token')) {
        try {
        const {data} = await $authHost.get('api/user/auth' )
        //console.log("data", data);
        if (data) {
            //localStorage.setItem('token', data.token)
            return jwt_decode(data.token)
        } else {
            localStorage.setItem('token', '')
            return '' //jwt_decode(data.token) 
        }       
   } catch (error) {
        console.log(`"func check"`, error)
   }
 //   } else {
 //       return ''
 //   }


}
