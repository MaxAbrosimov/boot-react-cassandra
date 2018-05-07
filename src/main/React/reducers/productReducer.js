import {Map} from 'immutable'
import { PRODUCTS_SAVED, PRODUCTS_ALL, PRODUCT_LOADED } from 'actions/actionTypes'
import {CHANGE_PRODUCT} from "../actions/actionTypes";

export default function productReducer(state = Map(), action) {
    switch(action.type) {

        case PRODUCTS_SAVED:
            return state.merge({
                currentProduct: action.saved
            });

        case PRODUCTS_ALL:
            return state.merge({
                products: action.products
            });

        case PRODUCT_LOADED:
            return state.merge({
                currentProduct: action.product,
            });

        case CHANGE_PRODUCT:
            const product = state.get('currentProduct') || Map();
            return state.merge({
                currentProduct: product.merge(action.product),
            });

        default:
            return state
    }
}