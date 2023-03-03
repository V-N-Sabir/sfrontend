import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, selectCart } from '../../redux/slices/basketSlice';
import {getUser} from '../../redux/slices/authSlice'
import {getStatus} from '../../redux/slices/documentSlice'
import { CreateDocument, CreateRows } from '../../http'
import { useNavigate } from 'react-router-dom';
import { ORDERS } from '../../utils/consts';
import { useTelegram } from '../../hooks/useTelegram';




const ContactUser = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(getUser)
    const status = useSelector(getStatus)
    const {items, totalPrice} = useSelector(selectCart)

    const [number, setNumber] = React.useState('')
    const [comment, setComment] = React.useState('')
    
    const checkout = async () => {
       
        const val = false
        if (val) {
        dispatch(clearItems())  
        }
        try {
            // Document
            //console.log("totalPrice", totalPrice);
            const doc = await CreateDocument(comment,String(number),user.id,status[0].id, totalPrice)
            //console.log("doc", doc);                
            // В ТЧ товары
            items.map(async (product) => {
                // 2. Запись ТЧ
                const sum = product.count * product.price
                await CreateRows(doc.id,product.id,product.count, product.price, sum,)})  
            
            dispatch(clearItems())                
        } catch (error) {
            console.log("error", error)
        }

        
        navigate('/' + ORDERS)
        
    }


    const {tg} = useTelegram()

    React.useEffect(() => {
      tg.MainButton.setParams({
          text: 'Отправить данные'
      })
      // eslint-disable-next-line
  }, [])


  React.useEffect(() => {
    if(!number || !comment) {
        tg.MainButton.hide();
    } else {
        // Показать кнопку
        tg.MainButton.show();
    }
    // eslint-disable-next-line
}, [number, comment])

return (
    <div >


        <div className="form-group">
            <label for="text">Вашe сообщение:</label>           
            <textarea id="text" 
            value={comment}
            onChange={e => setComment(e.target.value)}
            rows="2" cols="15">
            </textarea>
            <input 
            placeholder="Номер телефона"
            value={number}
            onChange={e => setNumber(e.target.value)}
            type="number" />
                    
            <button className='btn-outline btn-circle item-info' onClick={checkout}>Оформить заказ</button>
          </div>


    </div>
)
}

export default ContactUser