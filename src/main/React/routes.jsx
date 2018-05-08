import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {PageWithLeftBarLayout} from 'pages/PageWithLeftBarLayout'

import {ProductsList, EditProduct} from 'pages/products'

export default (
    <Route name="app" component={PageWithLeftBarLayout} path="/">
        <IndexRoute component={ProductsList}/>
        <Route path="products" component={ProductsList}/>
        <Route path="products/new" component={EditProduct}/>
        <Route path="products/:pid" component={EditProduct}/>
    </Route>
)
