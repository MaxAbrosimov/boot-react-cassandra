import { PRODUCTS_SAVED, PRODUCTS_ALL, PRODUCT_LOADED } from 'actions/actionTypes'
import {CHANGE_PRODUCT} from "../actions/actionTypes";

export default function productReducer(state = {}, action) {
    switch(action.type) {

        case PRODUCTS_SAVED:
            return {
                ...state,
                currentProduct: action.saved
            };

        case PRODUCTS_ALL:
            return {
                ...state,
                products: action.products
            };

        case PRODUCT_LOADED:
            return {
                ...state,
                currentProduct: action.product
            };

        case CHANGE_PRODUCT:
            return {
                ...state,
                currentProduct: {
                    ...state.currentProduct,
                    ...action.product
                }
            };

        default:
            return state
    }
}