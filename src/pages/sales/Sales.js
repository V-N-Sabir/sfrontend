import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, } from "react-router-dom";
//import ModalWin from "../../components/modal/ModalWin";
import { paginationProduct } from "../../http/product";
import { getsetIsAuth } from "../../redux/slices/authSlice";
import { addProductBasket } from "../../redux/slices/basketSlice";
import { getCountProduct, productFetchingDestructor, setFeching, setFechingPage, } from "../../redux/slices/productSlice";
//import { NODE_SERVER } from "../../utils/consts";
import AuthModal from "./AuthModal";
import CollapseApp from "./Collapse";


import './index.scss'
//import * as dotenv from 'dotenv'
import dotenv from 'dotenv'
import { REACT_APP_SERV_HOST } from "../../utils/consts";
dotenv.config()

const Sales = () => {
    
    const dispatch = useDispatch()
    const {pathname} = useLocation()
/*--------------- DELETE
    React.useEffect(() => {

        return function() {
            dispatch(InitialProductPage({page:1, totalcount:0}))
            console.log("return  useEffect")
        }
     // eslint-disable-next-line 
    }, [])
    */
    const isAuth = useSelector(getsetIsAuth)

    const [products, setProducts] = React.useState([])   
    const refTotal = React.useRef()
    const {limit,count, page, feching, product, totalCount} = useSelector(getCountProduct)


    React.useEffect( () => { 
            //  if (feching) {
        refTotal.current = totalCount
            // }            
    }, [totalCount])



    React.useEffect( () => { 
      //  if (feching) {
            setProducts(product)  
       // }            
    }, [product])

     

    const producti = async () => {
        const data = await paginationProduct(limit, page)
       // console.log("data= ", data)
        if(data) {
            //console.log("data---", data);
           dispatch(productFetchingDestructor(data))
           dispatch(setFechingPage(false))
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
        if (feching) {
            producti()
        }

    // eslint-disable-next-line
    }, [feching])


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

const backUrl = process.env.REACT_APP_SERV_HOST || REACT_APP_SERV_HOST

const [active, setActive] = React.useState(false)




    return (
        <div className="blog">
            <div>
                <AuthModal  active={active} setActive={setActive}/>
            </div>
        <CollapseApp />
        
            <div className="blog-head">
            {products && products.length!==0 ? products.map((product) => {
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

              
        }): <h1>Товары отсутсвуют!</h1>}
    </div>
    </div>
    )
}

export default Sales
