//import axios from "axios"
import { $authHost } from "."

/*
// Создание товара
const createProduct = async(products) => { 
    try {
        const response = await $authHost.get(`api/product/`,{products})
        
        return response.data
    } catch(e) {
        console.log(e);
    }
}
*/
/*
const updateProduct = async(name, artikul, id) => { 
    try {
        const response = await axios.put(`api/product/${id}`,
        {name, artikul} )
        
        return response.data
    } catch(e) {
        console.log(e);
    }
}
*/


/*
const getOneProduct = async(id) => { 
    try {
        
        const response = await $authHost.get(`api/product/${id}`)
        //console.log("response.data", response.data);
        return response.data
    } catch(e) {
        console.log(e);
    }
}  
*/

//$authHost.get(`api/product/${id}`)
const paginationProduct = async(limit, page) => { 
    try {
        const response = await $authHost.get(`api/product?limit=${limit}&page=${page}`)

            
        return response.data
    } catch(e) {
        console.log(e);
    }
}    
// Фильтр по страницам
const pagePaginationProduct = async(limit, page=1, pageId) => { 
    try {
        const response = await $authHost.get(`api/product/page?limit=${limit}&page=${page}&pageId=${pageId}`)
        
        return response.data
    } catch(e) {
        console.log(e);
    }
} 



const getSearchProducts = async(name) => {
    try {
  //  const product = await Promise.all([axios.post(`api/product/search?name=${name}`)])
    
    const product = await Promise.all([$authHost.post(`api/product/search?name=${name}`)])

    //const {data} = product[0]
    
      return product
  
    } catch(e) {
      console.log(e)
      return []
  }
  
}

export {
    paginationProduct,
    pagePaginationProduct,
    getSearchProducts,
// getOneProduct,
//  createProduct,
//  updateProduct,  


}