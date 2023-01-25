import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/authSlice'
import product from './slices/productSlice'
import document from './slices/documentSlice'
import basket from './slices/basketSlice'
import page from './slices/pageSlice'
export const store = configureStore({
    reducer: {
        auth,
        product,
        basket,
        page,
        document, 
    },
})


//export type RootState = ReturnType<typeof store.getState>



//export type AppDispatch = typeof store.dispatch
//export const useAppDispatch: () => AppDispatch = useDispatch 