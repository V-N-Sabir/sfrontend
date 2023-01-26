import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductBasket, minusItem, removeItems, selectCart } from '../../redux/slices/basketSlice';
import { CONTACT, REACT_APP_SERV_HOST, } from '../../utils/consts'
//import * as dotenv from 'dotenv'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const Basket = () => {


    //const [carts, useCarts] = React.useState([])
    //const [prise, usePrise] = React.useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {items, totalPrice} = useSelector(selectCart)

   // console.log("items", items);
   // console.log("totalPrise", totalPrise);

//    React.useEffect( () => { 
    //    try {  
          //  useCarts(items)   
           // usePrise(basket.totalPrise)                 
    //    } catch(error) {
    //      console.log(error)
    //    }
        
// eslint-disable-next-line
//    }, [])


const addProduct = ({id,name,img,price}) => {
    dispatch(addProductBasket({id,name,img,price}))
}


const minusProduct = ({id, price}) => {
    //console.log('id', id);
    dispatch(minusItem({id, price}))
}

const deleteProduct = ({id,price, count}) => {
    dispatch(removeItems({id,price, count}))
}

const checkout = () => {
    navigate('/' + CONTACT)
    // clear basket

}
console.log("items-basket", items)

const backUrl = process.env.REACT_APP_SERV_HOST || REACT_APP_SERV_HOST

    return (
        <div className='center'>
        { items.length ?
        items.map((item) => (
        <div key={item.id} className='basket'>
            
            <img className='basket-img' src={backUrl + item.img} alt={item.img} /> 
            <p className='item-info wordB'>{item.name}</p>
            <p className='item-info'>{item.price}</p>
            
            <p className='item-info'>{item.price * item.count}</p>
            <div className='item-count'>
            <button className='btn-outline btn-circle item-info' onClick={() => addProduct(item)}>+</button>
            <p className='item-info item-test'>{item.count}</p>
            
            <button className='btn-outline btn-circle count-minus item-info' 
            disabled={item.count===1 ? true  : false} onClick={() => minusProduct(item)}>-</button>
            </div>
            <button className='btn-circle btn-outline remove item-info' onClick={() => deleteProduct(item)}>x</button>  
        
        </div>
       
        )): <h1 className='item-info center'>Корзина пустая</h1>}
        
      
       {items.length ? 
        <div className='basket-footer'>
            <p className='item-info'>Сумма заказа: {totalPrice} UZS</p> 
            <button className='btn-outline btn-circle item-info' onClick={checkout}>Оформить заказ</button>
        </div>
       : ''}               
        </div>
    )
}

export default Basket