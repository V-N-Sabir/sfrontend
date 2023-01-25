import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';


import AppRouter from './components/AppRouter'
import { getAllPageHead, getAllPages } from './http/page';
import { paginationProduct } from './http/product';
//import { paginationProduct } from './http/product';
import { getAllStatus } from './http/status';
import { check } from './http/userAPI';
import { setIsAuth, setUser } from './redux/slices/authSlice';
import { statusFetchingSuccess } from './redux/slices/documentSlice';
import { pageFetchingSuccess, pageHeadFetchingSuccess } from './redux/slices/pageSlice';
import { getCountProduct, productFetchingSuccess, setProductPage } from './redux/slices/productSlice';


//import './scss/app.scss' 







const App:React.FC = () =>  {


  const dispatch = useDispatch()


  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    //setTimeout(() => { 
      if (localStorage.getItem('token')) {
      check().then(data => {
        console.log("data", data);
        if (data) {
          dispatch(setIsAuth(true))
          // @ts-ignore
          dispatch(setUser(data))         
        }

      }).finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
   // }, 2000)
 // eslint-disable-next-line 
}, [])



const getAllStatusDoc = async () => {

  const data = await getAllStatus() 
  
  dispatch(statusFetchingSuccess(data))
}

const {limit, page} = useSelector(getCountProduct) 

   //Товары
   const product = async () => {
    const data = await paginationProduct(limit, page)
    //console.log("data ---- ", data)
    if(data) {
    dispatch(productFetchingSuccess(data))
    dispatch(setProductPage())
    }
   }

   const pageHead = async () => {
    const data = await getAllPageHead()

    if(data) {
    dispatch(pageHeadFetchingSuccess(data))
    }
   }

   const pages = async () => {
    const data = await getAllPages()

    if(data) {
      dispatch(pageFetchingSuccess(data))
    }
   }



   React.useEffect( () => { 
    try {  
      product() 
      pageHead()   
      pages() 
      getAllStatusDoc()  
                     
    } catch(error) {
      console.log(error)
    }
    
// eslint-disable-next-line
}, [])


if (loading) {
  return (<><h1>Загрузка</h1></>)
}

  return (      
    <AppRouter />      
   )
}

export default App;
