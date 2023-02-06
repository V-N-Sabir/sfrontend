import React from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { getSearchProducts } from "../http/product"
import { searchProductsName, setNotFound, setRouteLoading } from "../redux/slices/productSlice"
import { SHOP_ROUTE } from "../utils/consts"



const InputComponent = ({type, placeholder, clName}) => {

    const {pathname} = useLocation()
    const navigate = useNavigate()

    const [state, setState] = React.useState('')
    const [noText, setNoText] = React.useState(false)

    const dispatch = useDispatch()
 
    const setStateValue = (e) => {
        setNoText(false)
        console.log(e)
        setState(e)
    }

   
const clearProducts = () => {
    setState('')
}

const searchProducts = async () => {
    if (!state) {
        setNoText(true)
        //console.log("Введите текст");
        return
    }
console.log('pathname', pathname, !pathname === "/");
   // if (!pathname === "/") {
        navigate(SHOP_ROUTE)
   // }

    dispatch(setRouteLoading(true))
    const product = await getSearchProducts(state)
    const {data} = product[0]
   // console.log('product',product)
    console.log('data',data)
    // data в dispatch
    if (data.length) {
        //console.log("data-true");
        dispatch(searchProductsName(data))  
    } else {
        dispatch(setNotFound(true))
        dispatch(searchProductsName([]))  
        //console.log("data-false");
    }

    dispatch(setRouteLoading(false))
}


    return (
    <>
        <input className={clName} type={type} placeholder={placeholder}
        value={state}
        onChange={e => setStateValue(e.target.value)} /> 


        <p className='searchInput sInClear' onClick={() => clearProducts()}>X</p>
        <p className='searchInput sInp' onClick={searchProducts}>
        <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="search icon" className='sInpimg' />
        </p>

        {noText && <p className="noText">Введите текст !!!</p>}
    </>
    )
}
export default InputComponent