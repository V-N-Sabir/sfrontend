import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDocumentUserId, getRowsId } from '../../http';
//import Loader from '../../Loader/Loader';
import LoaderTest from '../../Loader/LoaderLoading';
import { getsetIsAuth, getUser } from '../../redux/slices/authSlice';
import {  documentEdit, getDocuments, getRows, getStatus, rowsClear, rowsPush } from '../../redux/slices/documentSlice';
import OrdersTable from './OrderTable';

const Orders = () => { 

const [rows, setDocum] = React.useState([])
    const dispatch = useDispatch()
    const user = useSelector(getUser)
    const isAuth = useSelector(getsetIsAuth)
    const rowses = useSelector(getRows)
    const status = useSelector(getStatus)
    const {edit} = useSelector(getDocuments)
  
    
    React.useEffect(() => {
        setDocum(rowses)
        // eslint-disable-next-line
      }, [rowses])


    const getDocumentsId = async (id) => {
        dispatch(documentEdit(true))
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
    dispatch(documentEdit(false))
}
   
    React.useEffect(() => {
       if (isAuth) {
        getDocumentsId(user.id)
       }
        //console.log("rowses",rowses);
        // eslint-disable-next-line
      }, [isAuth])



    return (
        <>
        


        {edit && <LoaderTest />}
        {rows.length !==0 && rows &&  rows.map((row,i) => (
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
        ))}
        {!edit && rows.length ===0 && <h1>Заказы отсутствуют !</h1>}
        </>
    )

}

export default Orders