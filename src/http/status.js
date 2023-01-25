import { $authHost } from ".";

// Token vstavlyaetsa iz $authHost.interceptors.request.use(authInterceptor)
// index.js
const getAllStatus = async () => {
    try {
    const {data} = await $authHost.get('api/status')
    //console.log("response_status", data);
    
    return data
  
  }catch(e) {
    console.log(e);
    return []
  }
  
  }

  export {
    getAllStatus,
  }
