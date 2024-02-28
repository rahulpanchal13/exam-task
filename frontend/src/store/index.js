import {configureStore} from '@reduxjs/toolkit'
import loadingSlices from './slices/loadingSlices'
const store=configureStore({
    reducer:{
        loading:loadingSlices
    }
})  
export default store                