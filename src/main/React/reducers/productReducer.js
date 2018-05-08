import { PRODUCTS_SAVED, PRODUCTS_ALL, PRODUCT_LOADED, FETCH_PRODUCT, CHANGE_PRODUCT } from '../actions/actionTypes'

const initialState = {};

export default function productReducer(state = initialState, action) {
    switch(action.type) {

        case FETCH_PRODUCT:
            return initialState;

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