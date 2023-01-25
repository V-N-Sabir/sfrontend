import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
    pageHead: [], 
    page: [], 
    loading: false,
}

const cartSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
      pageHeadFetchingSuccess(state, action) {
            state.pageHead = action.payload.rows
            state.count = action.payload.count

          },
        pageFetchingSuccess(state, action) {
            state.page = action.payload.rows
            state.count = action.payload.count
          },
         /* PagesFilterId(state, action) {
            state.page.filter(pg => pg.pageheadId === action.payload)// = action.payload.rows
            //state.count = action.payload.count
          },  */


        } })          

        
export const getPageHeadSlice = (state) => state.page.pageHead
export const getPagesFilterId = (id) => (state) => state.page.page.filter(pg => pg.pageheadId === id)

export const { pageHeadFetchingSuccess, pageFetchingSuccess, PagesFilterId} = cartSlice.actions

export default cartSlice.reducer 