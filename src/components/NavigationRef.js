import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { paginationProduct } from '../http/product'
import AuthModal from '../pages/sales/AuthModal'
import { getsetIsAuth } from '../redux/slices/authSlice'
import { getCountProduct, InitialProductPage, productFetchingSuccess, setProductPage, setRouteLoading, } from '../redux/slices/productSlice'


import { SHOP_ROUTE, ORDERS, } from '../utils/consts'



const NavigationRef = () => {
        //page
    const {limit} = useSelector(getCountProduct) 
    const dispatch = useDispatch()
   //Товары
   const product = async () => {
    dispatch(setRouteLoading(true))
    dispatch(InitialProductPage({page:1, totalcount:0}))
    const data = await paginationProduct(limit, 1)
    console.log("data-product ---- ", data)
    if(data) {     
        dispatch(productFetchingSuccess(data))
       // dispatch(InitialProductPage(1))
        dispatch(setProductPage())
   
    }
 //   dispatch(setFeching(false))
    dispatch(setRouteLoading(false))
   }

   const isAuth = useSelector(getsetIsAuth)

   const [active, setActive] = React.useState(false)

   const isAuthUser = () => {
    if (!isAuth) {
        setActive(true) 
    }
   }


    return (
        <div className='center'>
       

        <div className="refNavigate">
            <Link onClick={() =>  product()} to={SHOP_ROUTE} >Главная</Link>
   
           {/*  <Link to={SALES} >Магазин</Link>*/} 
            <Link to={ORDERS} onClick={() =>  isAuthUser()}>Заказы</Link>
            <>
                <AuthModal  active={active} setActive={setActive}/>
            </>

           {/* <Link  to={'loadtest'} >loadtest</Link>*/} 

           
           {/* {page.map((pag) => (
                <Link key={pag.id} to={pag.name} >{pag.name}</Link>
            ))}*/} 
            
        </div>
        </div>
    )
}

export default NavigationRef