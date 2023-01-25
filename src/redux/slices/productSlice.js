import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page: 1,
    limit: 9,
    count: 0,
    totalCount: 0,
    feching: false,
    product: [], // Отфильтрованные для вставки в input.
    productContainer: [], // Все контрагенты
    loading: false,
}


const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      productFetchingSuccess(state, action) {
            state.product = action.payload.rows
            state.productContainer = action.payload.rows
            state.count = action.payload.count
          },
      productFilterSuccess(state, action) {
            state.product = action.payload.rows
            state.productContainer = action.payload.rows
           // state.count = action.payload.count
           state.totalCount = 0
           state.page = 1
          },    
        productFetchingDestructor(state, action) {
            state.product = [...state.product, ...action.payload.rows]
            state.productContainer = [...state.productContainer, ...action.payload.rows]
            state.count = action.payload.count

          }, 
          setFeching(state, action) {
            state.feching = action.payload            
          },

          setFechingPage(state, action) {
            state.feching = action.payload
            state.page = state.page + 1
            state.totalCount = state.totalCount + state.limit
            
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
             state.product = [] 
             state.productContainer = []         
           },
          productFilter(state, action) {
            state.product = state.productContainer
              .filter(prod => prod.name.includes(action.payload))
          },    
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
         /* productSearch (state, action) {
            state.product = action.payload
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

export const { productFilter, productFetchingSuccess, productFetchingDestructor, setFeching, setFechingPage, setProductPage, productFilterSuccess, InitialProductPage,} = cartSlice.actions

export default cartSlice.reducer 