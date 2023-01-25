//import React from 'react'


const OrdersTable = ({row}) => {

console.log("row--",row);
return (
  <div className='rows'>
    <div className='rows'>
      <ul>
    <li>{'Номенклатура'}</li> 
    <li>{'Количество'}</li>
    <li>{'Цена'}</li>
    <li>{'Сумма'}</li>
      </ul></div>
    {row.map((rw,i) => (
        <ul key={i}>
        <li>{rw.Products.name}</li>
        <li>{rw.amount}</li>
        <li>{rw.price}</li>
        <li>{rw.sum}</li>
        </ul>
    ))
    }
    </div>
    
)
}

export default OrdersTable