import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page: 1,
    limit: 9,
    count: 0,
    countPag: 0,
    totalCount: 0,
    feching: false,
    product: [], // Отфильтрованные для вставки в input.
    productContainer: [], // Все контрагенты
    loading: false,
    loadingPag: false,
    routeLoading: false,
    notFound: false,
}


const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      productFetchingSuccess(state, action) {
            state.product = action.payload.rows
            state.productContainer = action.payload.rows
            state.count = action.payload.count
            state.notFound = false
          },
      productFilterSuccess(state, action) {
            state.product = action.payload.rows
            state.productContainer = action.payload.rows
            state.countPag = action.payload.count
           // state.count = action.payload.count
           state.totalCount = state.limit
           state.page = 1
           state.notFound = false
          },
        //++      
        productFetchingDestructor(state, action) {
            state.product = [...state.product, ...action.payload.rows]
            state.productContainer = [...state.productContainer, ...action.payload.rows]
            state.count = action.payload.count
           // state.page = state.page + 1

          }, 

          //++
          setFechingPage(state, action) {
            state.loadingPag = action.payload
            state.page = state.page + 1
            state.totalCount = state.totalCount + state.limit
            //state.loading = false
            
          },
          setloadingPagination(state, action){
            state.loadingPag = action.payload 
          },
          setProductPage(state) {
           // state.feching = action.payload
            state.page = state.page + 1
            state.totalCount = state.totalCount + state.limit           
          },
          InitialProductPage(state, action) {
            // state.feching = action.payload
             state.page = action.payload.page
             state.totalCount = action.payload.totalcount 
             //state.product = [] 
             //state.productContainer = []         
           },
          productFilter(state, action) {
            state.product = state.productContainer
              .filter(prod => prod.name.includes(action.payload))
          },    
          setFeching(state, action) {
            state.loading = action.payload  
            //state.feching = action.payload            
          },
          setLoadingPage(state, action) {
            state.loading = action.payload
            state.page = state.page + 1
            state.totalCount = state.totalCount + state.limit
            //state.loading = false
            
          },
          setFechingPaginat(state, action) {
            state.feching = action.payload  
          },
          setRouteLoading(state, action) {
            state.routeLoading = action.payload            
          },
          searchProductsName(state, action) {
            state.product = action.payload
            state.productContainer = action.payload
            state.count = action.payload.length
          },
          setNotFound(state, action) {
            state.notFound = action.payload
          },
          
         /*---- loadingProductPage(state, action) {
            state.feching = action.payload
          },*/

          // ++
         /* productFilterId(state, action) {
            state.product = state.productContainer
              .filter(prod => prod.Pages.id === Number(action.payload))
          },  */
        /*  productAddsUnShift  (state, action) {
            state.productContainer.unshift(action.payload)
            state.product = state.productContainer
          }, */ 
        /*  productFromContainer (state, action) {
            state.product = action.payload
            state.productContainer = action.payload
          }, */ 
          
         /*
          productPush (state, action) {
           // let productContainer = [...state.productContainer]
           console.log("[...action.payload]", [...action.payload]);
           state.productContainer.push([...action.payload])  
           //action.payload.map((product) => {
           //  return state.productContainer.push(product) })
            console.log("state.productContainer", state.productContainer);
           // state.productContainer = action.payload
          },  
          */

    }   
})

export const getProduct = (state) => state
export const getCountProduct = (state) => state.product

export const { productFilter, productFetchingSuccess, productFetchingDestructor, setFeching, setFechingPage, setProductPage, productFilterSuccess, InitialProductPage, setFechingPaginat,setloadingPagination,setLoadingPage,setRouteLoading, searchProductsName,setNotFound} = cartSlice.actions

export default cartSlice.reducer 