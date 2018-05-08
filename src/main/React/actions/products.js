import {post, get, delete as deleteMapping} from 'axios';
import { hashHistory } from 'react-router'
import { PRODUCTS_SAVED, FETCH_PRODUCT, AJAX_END, PRODUCTS_ALL, PRODUCT_LOADED, CHANGE_PRODUCT } from './actionTypes';

export function saveProduct(productToSave) {

    return function(dispatch){
        dispatch({ type: FETCH_PRODUCT })

        return post('/api/products/save', productToSave )
            .then(function(response){
                dispatch({ type: PRODUCTS_SAVED, saved : response.data })
                dispatch({ type: AJAX_END })
                hashHistory.push('/products')
                return {type: CHANGE_PRODUCT, product: null}
            })
            .catch(function(response){
                dispatch({ type: AJAX_END })
            })
    }
}

export function deleteProduct(pid) {
    return function(dispatch){
        dispatch({ type: FETCH_PRODUCT })
        return deleteMapping(`/api/products/${pid}`).then(() => dispatch(loadAllProducts()));

    }
}

export function changeProduct(product) {
    return {type: CHANGE_PRODUCT, product: product}
}

export function fetchProduct(pid) {

    return function(dispatch){
        dispatch({ type: FETCH_PRODUCT })
        if (pid) {
            return get(`/api/products/${pid}`)
                .then(function(response){
                    dispatch({ type: PRODUCT_LOADED, product : response.data })
                })
                .catch(function(response){
                    dispatch({ type: AJAX_END })
                })
        }
        return dispatch({ type: PRODUCT_LOADED, product : {} })
    }
}

export function loadAllProducts() {

    return function(dispatch){
        dispatch({ type: FETCH_PRODUCT })

        return get('/api/products/all' )
            .then(function(response){
                dispatch({ type: PRODUCTS_ALL, products : response.data })
                dispatch({ type: AJAX_END })
            })
            .catch(function(response){
                dispatch({ type: AJAX_END })
            })
    }
}