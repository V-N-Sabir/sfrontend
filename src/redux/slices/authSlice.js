import { createSlice } from "@reduxjs/toolkit"
//import { RootState } from "../store"





const initialState = {
    isAuth: false,
    user: {id:0, email:"", role:""},
   // searchValue: '',
   // categoryId: 0,
   // currentPage: 1,
   // sort: {
   //     name: 'популярности', 
   //     sortProperty: 'rating'
   // }, 
}


const filterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action){
           // console.log(action)
            state.isAuth = action.payload
        },
        setUser(state, action){
            // console.log(action)
             state.user = action.payload
         },
        /* 
         setFilters(state, action){
            state.sort          =  action.payload.sort
            state.currentPage   = action.payload.currentPage
            state.categoryId    =  action.payload.categoryId
         }
         */
    }
    
})

export const getsetIsAuth = (state) => state.auth.isAuth
export const getUser = (state) => state.auth.user


export const { setIsAuth,  setUser} = filterSlice.actions

export default filterSlice.reducer