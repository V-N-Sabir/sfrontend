import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, } from "react-router-dom";
//import ModalWin from "../../components/modal/ModalWin";
import { paginationProduct, pagePaginationProduct } from "../../http/product";
import { getsetIsAuth } from "../../redux/slices/authSlice";
import { addProductBasket } from "../../redux/slices/basketSlice";
import { getCountProduct, productFetchingDestructor, setFeching, setFechingPage, setLoadingPage, setloadingPagination, } from "../../redux/slices/productSlice";
//import { NODE_SERVER } from "../../utils/consts";
import AuthModal from "./AuthModal";
import CollapseApp from "./Collapse";


import './index.scss'
//import {useInView} from 'react-intersection-observer'
//import * as dotenv from 'dotenv'
import dotenv from 'dotenv'
import { REACT_APP_SERV_HOST } from "../../utils/consts";
//import Loader from "../../Loader/Loader";
import LoaderTest from "../../Loader/LoaderLoading";
//import { useObserver } from "../../hooks/useObserver";
dotenv.config()

const Sales = () => {
//const lastElement = React.useRef()
/*    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true,
    })*/
    const {notFound} = useSelector(getCountProduct)


    const dispatch = useDispatch()
    // eslint-disable-next-line
    const {pathname} = useLocation()
    const {id} = useParams()

    React.useEffect(() => {

        return function() {
          //  dispatch(InitialProductPage({page:1, totalcount:0}))
            console.log("return  useEffect")
            // Запрос попробовать перенести сюда, фильт товаров
        }
     // eslint-disable-next-line 
    }, [])

    const isAuth = useSelector(getsetIsAuth)

    const [products, setProducts] = React.useState([])   
    const refTotal = React.useRef()
    const {limit,count, page, feching, product, totalCount, loading, countPag,loadingPag,routeLoading} = useSelector(getCountProduct)


    React.useEffect( () => { 
        //  if (feching) {
    refTotal.current = totalCount
        // }            
    }, [totalCount])
  
  /*
    console.log("inView", inView) 
    //++
    React.useEffect(() => {
        if (inView && feching && refTotal.current < count) {
            dispatch(setFeching(true))
            console.log("inView", inView) 
        }
        console.log("inView", inView)
     // eslint-disable-next-line 
    }, [inView])
    //++
*/




    React.useEffect( () => { 
      //  if (feching) {
            setProducts(product)  
       // }            
    }, [product])

     

    const producti = async () => {
       // dispatch(setFeching(true))
        const data = await paginationProduct(limit, page)
       // console.log("data= ", data)
        if(data) {
            //console.log("data---", data);
           dispatch(productFetchingDestructor(data))
           //dispatch(setFeching(false))
           dispatch(setLoadingPage(false))
           //dispatch(productFetchingSuccess(data))
            
        }
       }

       React.useEffect( () => { 
        document.addEventListener('scroll', scrollHandler)    
        return function() {
            //console.log("scroll - DELETE");
            document.removeEventListener('scroll', scrollHandler)
        }   
        // eslint-disable-next-line          
        }, [])


    React.useEffect( () => { 
        if (loading) {
            producti()
        }

    // eslint-disable-next-line
    }, [loading])


    //React.useCallback(()=> {'function'},[])


    const scrollHandler = React.useCallback((e) => {

       if (pathname === "/") {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && refTotal.current < count)    {         
            //console.log("УСЛОВИЕ")
            //setFeching(true)
            dispatch(setFeching(true))
            }
          
        }
// -- console.log('scrollHeight', e.target.documentElement.scrollHeight);
// -- console.log('scrollTop', e.target.documentElement.scrollTop);
// -- console.log('innerHeight', window.innerHeight);
    }
// eslint-disable-next-line    
,[])
    



    const addProduct = ({id,name,img,price}) => {
        //console.log(id,name,image)
        if (isAuth) {
            dispatch(addProductBasket({id,name,img,price}))
        } else {
            setActive(true)
            // В Redux хранить (булево), и открывать
        }
        
        //Добавить в Redux
        }



const loadProduct = async () => {
    console.log("loadProduct")
    if (pathname === "/") {
        console.log("loadProduct_pathname", pathname)
        dispatch(setFeching(true))      
    } else {
        dispatch(setFechingPage(true))
        const data = await pagePaginationProduct(limit, page+1, id)
        //console.log("data_Pagination", data)
        if(data) {
            refTotal.current = refTotal.current + limit
           dispatch(productFetchingDestructor(data))
           
            //dispatch(productFetchingSuccess(data))
           console.log("refTotal.current", refTotal.current) 
        }
        dispatch(setloadingPagination(false))
    }

}

const backUrl = process.env.REACT_APP_SERV_HOST || REACT_APP_SERV_HOST

const [active, setActive] = React.useState(false)
  
//++
        //const isPostsLoading = true
     //   if (pathname === "/") {
      //  useObserver(lastElement,refTotal.current < count,feching, () => {
      //      dispatch(setFeching(true))
      //  })
   // }
        //    useObserver(lastElement, page < totalPages, isPostsLoading, () => {setPage(page + 1)})

//console.log("feching",feching,"routeLoading",routeLoading,"loading",loading,"",);

    return (
        <div>
  
          
        <div className="blog">
         
            <div>
                <AuthModal  active={active} setActive={setActive}/>
            </div>
        <CollapseApp />
        
            {/*|| routeLoading  */}
            {feching || routeLoading ? 
            <div className="blog-head"><LoaderTest /></div>
            :
            <div className="blog-head">
            {products && products.length!==0 && products.map((product) => {
            return  <div className="blog-product" key={product.id}>
            
                <img src={backUrl + product.img} alt={product.img} className="blog-product"/>           
             
            <div className="prod_men">
              <p className="name-product">{product.name}</p>
            </div>
              <div className="prod_men">
              <p> Цена: {product.price} UZS</p>
              <button className='btn-outline btn-circle count-minus item-info' 
              onClick={() => addProduct(product)}>В корзину</button>
              </div>

            </div>                                      
        })}
       
       {/* {feching ? <div  style={{height: 20, background: 'red', display: 'block'}}>
        Анимация </div> : ''} ----|| feching*/}
        {notFound && <h1>Товары не найдены</h1>}   
    </div>
    }
    {/*  */}
    {loading || loadingPag ? <LoaderTest/> : ''}
    </div>


    {pathname === "/" && refTotal.current < count && !loading &&   
    <div className="productload">
    <p  onClick={loadProduct}>{'>>>'}</p> 
    </div>}
    
    {pathname !== "/" &&  refTotal.current < countPag && !routeLoading && 
        <div className="productload">
        <p  onClick={loadProduct}>{'>>>'}</p> 
        </div>
    }


</div> 

    )
}

export default Sales
