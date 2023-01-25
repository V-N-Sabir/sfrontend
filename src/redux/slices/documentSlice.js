import { createSlice, } from "@reduxjs/toolkit"


const initialState = {
    edit: false,
    count: 0,
    limit: 4,
    document: [], // Отфильтрованные для вставки в input.
    documentsContainer: [], // Все контрагенты
    rows: [],
    status: [],
    productOrder: [],
    statusId: [{id: 1, name: ''},],


}


const cartSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {
    /*  documentClear(state, action) {
        state.document = []
      }, */
      rowsPush(state, action) {
        state.rows.push(action.payload) 
         //.filter(air => air.country.includes(action.payload.country))
      }, 
      rowsClear(state) {
        state.rows = []
      },
      documentFetchingSuccess(state, action) {
           // state.error = ''
          
          state.document = action.payload
          state.documentsContainer = action.payload
          //state.count = action.payload.count
          //state.loading = true
          },
      statusFetchingSuccess(state, action) {                      
          state.status = action.payload
          // state.error = ''
                     },
        /*  documentFilter(state, action) {
            state.document = state.documentsContainer
              .filter(kontr => kontr.name.includes(action.payload))
             //.filter(air => air.country.includes(action.payload.country))
          },*/
         /* documentFilterId(state, action) {
             state.document = state.documentsContainer.filter(doc => doc.id === Number(action.payload))

           },*/
        /*  rowsAdd(state, action) {
              state.rows = action.payload
          },*/
        /*  clearRows(state) {
            state.rows = []
          },*/

        /*  statusFilterName(state, action) {
            state.statusId = state.status.filter(status => status.name.includes(action.payload))
          },  */
         /* documentAddsUnShift(state, action)    {
            state.documentsContainer.unshift(action.payload)
            state.document = state.documentsContainer
          },*/
         /* documentEdit(state, action) {
            state.edit = action.payload

          },*/
  
     
    }
    
})

// ++
export const getStatus = (state) => state.document.status
export const getDocuments = (state) => state
export const getRows = (state) => state.document.rows


export const {rowsPush, documentFetchingSuccess, statusFetchingSuccess, rowsClear,} = cartSlice.actions

export default cartSlice.reducer