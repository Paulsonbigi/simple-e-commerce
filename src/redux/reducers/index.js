import { combineReducers } from "redux"
import { productReducer, selectedProductsReducer } from "./product.reducer"

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer
})
