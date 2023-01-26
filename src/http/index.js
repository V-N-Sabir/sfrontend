import axios from "axios"
import dotenv from 'dotenv'
import { REACT_APP_SERV_HOST} from "../utils/consts"
dotenv.config()

//console.log("process.env", process.env)

const $host = axios.create({
  
    baseURL: process.env.REACT_APP_SERV_HOST || REACT_APP_SERV_HOST
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_SERV_HOST || REACT_APP_SERV_HOST
})
// @ts-ignore
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

/*

// Все контрагенты --
const getKontragentsAxios = async(limit =4, page=1) => {
 // const kontr = await Promise.all([axios.get(`api/kontragent?limit=${limit}&page=${page}`)])
 try {
  const kontragents = await Promise.all([axios.get(`api/kontragent?limit=${limit}&page=${page}`)])
 
  const {data} = kontragents[0]
  return data

} catch(e) {
  console.log(e)
  return []
}
}


// All sales
const getProductsAxios = async(limit =4, page=1) => {
  try {
  const products = await Promise.all([axios.get(`api/product?limit=${limit}&page=${page}`)])
  
  const {data} = products[0]

  return data

  } catch(e) {
    console.log(e);
    return []
}

  }




const updateDocument = async(id,name, date_doc,statusDocumentId,  kontragentId,userId, ) => { 
  try { 
      //http://localhost:8080 $authHost.post('api/brand', brand)
      const response = await axios.put(`api/doc/${id}`,
      {name, date_doc, statusDocumentId, kontragentId, userId, } )
      
      return response.data
  } catch(e) {
      console.log(e);
  }
}


//?limit=${limit}&page=${page}
//api/doc?limit=3&page=1	

const getAllDocs = async(limit =4, page=1) => {
  try {
    const response = await axios.get(`api/doc?limit=${limit}&page=${page}`,
    {headers: 
        { Authorization: `Bearer ${localStorage.getItem('token')}`,}
     } 
    
    )
    return response.data
  } catch(e) {
    console.log(e);
  }
}




const getRowsId = async (documentOrderId) => {
  
  try {
    
    const response = await $authHost.get(`api/rows?documentOrderId=${documentOrderId}`  )
      return response.data    
    } catch(e) {
      console.log(e);
      return []
  }
}



const updateRows = async(id,) => { 
  try { 
       $authHost.post('api/brand', brand)
      const response = await $authHost.put(`api/rows/${id}`,
      {} )
      
      return response.data
  } catch(e) {
      console.log(e);
  }
}

const deleteRows = async(id) => { 
  try { 
       $authHost.post('api/brand', brand)
      const response = await $authHost.delete(`api/rows/${id}`
)
      
      return response.data
  } catch(e) {
      console.log(e);
  }
}
*/
// Создание документа
const CreateDocument = async(name, comment, userId,statusDocumentId, totalPrice) => { 
  try {     
      const response = await $authHost.post(`api/doc`,{name, comment, userId,statusDocumentId, totalPrice} )

      return response.data
  } catch(e) {
      console.log(e);
  }
}


const CreateRows = async (documentOrderId, productId, amount, price, sum, ) => {
  try {
    //const response = await $authHost.get(`api/page`,)
    const response = await $authHost.post(`api/rows`, {documentOrderId, productId, amount, price, sum,} )
    
    return response.data
} catch(e) {
    console.log(e);
}
}


const getDocumentUserId = async(id) => {
  try { 
    const response = await $authHost.get(`api/doc/${id}`,)
    return response.data
  } catch(e) {
    console.log(e);
  }
}

const getRowsId = async (documentOrderId) => {
  
  try {
    const response = await $authHost.get(`api/rows?documentOrderId=${documentOrderId}`  )
      return response.data    
    } catch(e) {
      console.log(e);
      return []
  }
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,
    
   // getKontragentsAxios,
   
    CreateDocument,
    CreateRows,
    getDocumentUserId,
    getRowsId,
   // updateDocument,
    //getAllDocs,
    //getDocumentId,

   
   // getRowsId,
    //updateRows,
    //deleteRows,
}
