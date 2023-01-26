import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { pagePaginationProduct } from '../../http/product';
import { getPagesFilterId } from '../../redux/slices/pageSlice';
import { getCountProduct, productFilterSuccess, setFechingPaginat,} from '../../redux/slices/productSlice';
import { SHOP_ROUTE } from '../../utils/consts';


const CollapseChild = ({id}) => { 
    const [pages, setPages] = React.useState([])
    const page =  useSelector(getPagesFilterId(id))
    
    const dispatch = useDispatch()
    
    const {limit} = useSelector(getCountProduct)

    const navigate = useNavigate()

    React.useEffect( () => { 
        try {  
          console.log("page_use",page);
          setPages(page)                
        } catch(error) {
          console.log(error)
        }       
    // eslint-disable-next-line
    }, [])

const productFilter = async (id) => {
  console.log("page_CollapseChild", page)
  dispatch(setFechingPaginat(true))
// Запрос на сервер для получения товаров
  const data = await pagePaginationProduct(limit,1,id)

  console.log("data_productFilter", data)   


  dispatch(productFilterSuccess(data))
  dispatch(setFechingPaginat(false))
  navigate(SHOP_ROUTE + id)
}

    return (
        <>
        {pages && pages.map((page) =>    
            (<Link key={page.id} to={page.id} onClick={() => productFilter(page.id)} >{page.name}</Link>
            ))}
        </>
    )
}

export default CollapseChild

/*


<Typography.Link to={page.id} onClick={() => productFilter(page.id, page.name)} >{page.name}</Typography.Link> 
*/