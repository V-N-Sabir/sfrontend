//import axios from "axios";
import { $authHost } from ".";

const getAllPageHead = async() => { 
    try {
        const response = await $authHost.get(`api/pagehead`,)
        //const response = await axios.get(`api/pagehead`,)
        
        return response.data
    } catch(e) {
        console.log(e);
    }
}  


const getAllPages = async() => { 
    try {
       const response = await $authHost.get(`api/page`,)
       // const response = await axios.get(`api/page`,)
        
        return response.data
    } catch(e) {
        console.log(e);
    }
}  

//api/page
export {
    getAllPageHead,
    getAllPages,

}