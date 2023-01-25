import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDocumentUserId, getRowsId } from '../../http';
import { getsetIsAuth, getUser } from '../../redux/slices/authSlice';
import {  getRows, getStatus, rowsClear, rowsPush } from '../../redux/slices/documentSlice';
import OrdersTable from './OrderTable';

const Orders = () => { 

const [rows, setDocum] = React.useState([])
    const dispatch = useDispatch()
    const user = useSelector(getUser)
    const isAuth = useSelector(getsetIsAuth)
    const rowses = useSelector(getRows)
    const status = useSelector(getStatus)
  
    
    React.useEffect(() => {
        setDocum(rowses)
        // eslint-disable-next-line
      }, [rowses])


    const getDocumentsId = async (id) => {

        // Очищаем state - заказов, перед запросом
        dispatch(rowsClear())
    if (user) {
        const docs = await getDocumentUserId(id)  
       // ---- dispatch(documentFetchingSuccess(docs)) 
        
        if (Array.isArray(docs)) {

            docs.map( async (doc) => {
                const rows = await getRowsId(doc.id) 
                dispatch(rowsPush(rows)) 
                console.log("rows", rows)

            })
                       
        } else {
            const rows = await getRowsId(docs.id) 
            dispatch(rowsPush(rows)) 
            console.log("rows", rows)

        }
          

    } else {
        console.log("Не авторизован");
    }
}
   
    React.useEffect(() => {
        getDocumentsId(user.id)
        //console.log("rowses",rowses);
        // eslint-disable-next-line
      }, [isAuth])


    return (
        <>
        {rows.length ? rows &&  rows.map((row,i) => (
        <div className='document_head' key={i}>
           <div className='header'>
                <p>ID: {row[0].Salestables.id}</p>
                <p>Статус: {status.filter(stat => stat.id===row[0].Salestables.statusDocumentId).map(st => (st.name))}</p>
                <p>Пользователь: {user.email}</p>
               
            </div> 
            <div className='header'>    
                <p>Номер телефона: {row[0].Salestables.comment}</p> 
                <p>Доп информация: {row[0].Salestables.name}</p> 
            </div>           
            
              <OrdersTable key={i} row={row} />
              <b className='header'>Сумма документа: {row[0].Salestables.totalPrice}</b>
        </div>
        )): <h1 className='center'>Заказы отсутствуют !</h1>}
        </>
    )

}

export default Orders